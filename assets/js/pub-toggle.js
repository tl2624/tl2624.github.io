/* Show or hide the abstract and BibTeX blocks under publication entries.
 *
 * A collapsible block is an element with the class "pub-toggle-body" and an
 * id. Any ordinary link that points at that id shows and hides the block:
 *
 *   **Paper**: [PDF](...) | [Abstract](#abs-key)
 *
 *   <div class="pub-toggle-body" id="abs-key" markdown="1"> ... </div>
 *
 * So a toggle needs no markup of its own: it is recognised by where it points.
 * The blocks start collapsed (assets/css/custom.css hides them whenever
 * scripting is available). Without JavaScript they stay visible and each link
 * jumps to its block, so nothing is ever unreachable.
 *
 * The page must not move when a block opens or closes. The theme binds an
 * animated scroll to every link that points at an id on the same page
 * (assets/js/_main.js). Left alone it would run on these links too, and
 * because a collapsed block has no position it sends the page to the top. The
 * click listener below therefore runs in the capture phase and stops the event
 * at the document, before it can reach the link and the theme's handler on it.
 */
(function () {
  'use strict';

  function bodyFor(link) {
    var href = link.getAttribute('href') || '';
    if (href.charAt(0) !== '#' || href.length < 2) return null;
    var el = document.getElementById(href.slice(1));
    return el && el.classList.contains('pub-toggle-body') ? el : null;
  }

  function linkFrom(ev) {
    var target = ev.target;
    return target && target.closest ? target.closest('a[href^="#"]') : null;
  }

  var toggles = Array.prototype.filter.call(document.querySelectorAll('a[href^="#"]'), bodyFor);

  function setOpen(body, open) {
    body.classList.toggle('is-open', open);
    toggles.forEach(function (link) {
      if (bodyFor(link) === body) link.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* Closing a block near the end of the page can leave the page too short for
     where the reader has scrolled to. The browser then drags the whole page
     down to fit, and the link slides out from under the pointer. A spacer at
     the end of the content stands in for exactly the height that went missing,
     so the page holds still. It is given back as the reader scrolls up, which
     cannot be seen, because it lies at or below the bottom of the window. */
  var spacer = null;

  function shortfall(y) {
    var root = document.documentElement;
    var natural = root.scrollHeight - (spacer ? spacer.offsetHeight : 0);
    return Math.max(0, Math.ceil(y + root.clientHeight - natural));
  }

  function flip(body) {
    var y = window.pageYOffset;
    setOpen(body, !body.classList.contains('is-open'));
    var need = shortfall(y);
    if (need && !spacer) {
      spacer = document.createElement('div');
      spacer.setAttribute('aria-hidden', 'true');
      body.parentNode.appendChild(spacer);
    }
    if (spacer) spacer.style.height = need + 'px';
    if (window.pageYOffset !== y) window.scrollTo(0, y);
  }

  /* Only ever shrink the spacer here. Growing it is flip's job alone: a window
     that overscrolls at the bottom, as on a phone, must not make the page taller. */
  function giveBack() {
    if (!spacer || !spacer.offsetHeight) return;
    var need = shortfall(window.pageYOffset);
    if (need < spacer.offsetHeight) spacer.style.height = need + 'px';
  }

  window.addEventListener('scroll', giveBack, { passive: true });
  window.addEventListener('resize', giveBack);

  /* Each link acts as a button that expands a region, so say so to assistive
     technology: a screen reader then announces "Abstract, button, collapsed". */
  toggles.forEach(function (link) {
    link.setAttribute('role', 'button');
    link.setAttribute('aria-controls', bodyFor(link).id);
    link.setAttribute('aria-expanded', 'false');
  });

  document.addEventListener('click', function (ev) {
    var link = linkFrom(ev);
    var body = link && bodyFor(link);
    if (!body) return;
    ev.stopPropagation();
    /* A modified click asks the browser to open the link in a new tab or
       window. Leave that to the browser; the block opens over there. */
    if (ev.button !== 0 || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;
    ev.preventDefault();
    flip(body);
  }, true);

  /* A link responds to Enter on its own. A button also responds to Space, so
     add that, and keep Space from scrolling the page. A key held down repeats
     its keydown, which would otherwise flip the block open and shut. */
  document.addEventListener('keydown', function (ev) {
    if (ev.key !== ' ' && ev.key !== 'Spacebar' && ev.code !== 'Space') return;
    var link = linkFrom(ev);
    var body = link && bodyFor(link);
    if (!body) return;
    ev.preventDefault();
    if (!ev.repeat) flip(body);
  });

  /* An address that names a block, as when a toggle is opened in a new tab or
     its link is shared, arrives with that block open. The browser scrolls to
     the block of its own accord once it can be seen, and would leave the entry
     above it hidden behind the fixed masthead. So give the block a scroll
     margin tall enough for its entry and the masthead: the browser's scroll
     and the one below then agree on where to stop, whichever comes last. */
  var named = location.hash.length > 1 ? document.getElementById(location.hash.slice(1)) : null;
  if (named && named.classList.contains('pub-toggle-body')) {
    setOpen(named, true);
    var opener = toggles.filter(function (link) { return bodyFor(link) === named; })[0];
    var entry = (opener && opener.closest('p')) || named;
    var masthead = document.querySelector('.masthead');
    var room = named.getBoundingClientRect().top - entry.getBoundingClientRect().top +
               (masthead ? masthead.offsetHeight : 0) + 16;
    named.style.scrollMarginTop = Math.ceil(room) + 'px';
    named.scrollIntoView();
  }
})();
