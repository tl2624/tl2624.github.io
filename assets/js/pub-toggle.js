/* Show or hide the [Abstract] and [BibTeX] blocks under publication entries.
 *
 * A toggle is a link to the block it controls:
 *
 *   <a class="pub-toggle" href="#abs-key">[Abstract]</a>
 *   <div class="pub-toggle-body" id="abs-key"> ... </div>
 *
 * The blocks start collapsed (assets/css/custom.css hides them whenever
 * scripting is available), and a click shows or hides the one block the link
 * points to. Without JavaScript the blocks stay visible and each link simply
 * jumps to its block, so nothing is ever unreachable.
 */
(function () {
  'use strict';

  function bodyOf(toggle) {
    var hash = toggle.getAttribute('href') || '';
    return hash.charAt(0) === '#' ? document.getElementById(hash.slice(1)) : null;
  }

  function flip(toggle) {
    var body = bodyOf(toggle);
    if (!body) return;
    var open = !body.classList.contains('is-open');
    body.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function toggleFrom(ev) {
    return ev.target && ev.target.closest ? ev.target.closest('a.pub-toggle') : null;
  }

  /* Each link acts as a button that expands a region, so say so to assistive
     technology: a screen reader then announces "[Abstract], button, collapsed". */
  Array.prototype.forEach.call(document.querySelectorAll('a.pub-toggle'), function (toggle) {
    var body = bodyOf(toggle);
    if (!body) return;
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('aria-controls', body.id);
    toggle.setAttribute('aria-expanded', 'false');
  });

  document.addEventListener('click', function (ev) {
    var toggle = toggleFrom(ev);
    if (!toggle || !bodyOf(toggle)) return;
    ev.preventDefault();
    flip(toggle);
  });

  /* A link responds to Enter on its own. A button also responds to Space, so
     add that, and keep Space from scrolling the page. A key held down repeats
     its keydown, which would otherwise flip the block open and shut. */
  document.addEventListener('keydown', function (ev) {
    if (ev.key !== ' ' && ev.key !== 'Spacebar' && ev.code !== 'Space') return;
    var toggle = toggleFrom(ev);
    if (!toggle || !bodyOf(toggle)) return;
    ev.preventDefault();
    if (!ev.repeat) flip(toggle);
  });
})();
