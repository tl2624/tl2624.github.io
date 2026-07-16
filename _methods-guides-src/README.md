# Methods guides — LaTeX sources

Sources for the design-based causal inference guides linked from
[/methods-guides/](https://tl2624.github.io/methods-guides/).

Jekyll does not publish this directory: directories whose names begin with an
underscore are excluded unless listed under `include:` in `_config.yml`, and this
one is not (`_pages` and `files` are). The compiled PDFs the site links to live in
`../files/`.

## Files

| File | Guide |
|---|---|
| `00_notation_and_setup.tex` | Notation and Setup for Design-Based Causal Inference |
| `01_difference_in_means_unbiasedness.tex` | Unbiasedness of the Difference-in-Means Estimator for the SATE and the PATE |
| `02_difference_in_means_variance_sate.tex` | Variance of the Difference-in-Means Estimator for the SATE and Estimation of That Variance |
| `03_difference_in_means_variance_pate.tex` | Variance of the Difference-in-Means Estimator for the PATE and Estimation of That Variance |
| `references.bib` | Shared bibliography (chicago/natbib) |

Guide 00 is the canonical reference. Guides 01–03 state the framework only as far
as their own proofs require and point back to it, so a change to the framework is
made in 00 and echoed only where a later guide restates a symbol locally.

## Building

Each guide needs bibtex and three subsequent LaTeX passes (the third resolves
`backref` page references):

```sh
for f in 0*.tex; do
  b="${f%.tex}"
  pdflatex -interaction=nonstopmode -halt-on-error "$b"
  bibtex "$b"
  pdflatex -interaction=nonstopmode -halt-on-error "$b"
  pdflatex -interaction=nonstopmode -halt-on-error "$b"
  pdflatex -interaction=nonstopmode -halt-on-error "$b"
  cp "$b.pdf" ../files/"$b.pdf"
done
```

A build is only finished when every guide reports no LaTeX warnings, no overfull
or underfull boxes, no undefined citations or references, and no `nag` complaints.

## Conventions

The four preambles are byte-identical apart from the `\title` line. Notation is
defined once, via macros, so a change of rendering is a one-line edit per file.

- **Potential outcomes** are functions: `\po{i}{1}` → $y_i(1)$, `\pov{1}` → $\bm{y}(1)$,
  `\ybar{1}` → $\bar{y}(1)$. The observed outcome is $Y_i := y_i(Z_i)$.
- **Counts** are functions of the random vectors: $n_T(\bm{Z})$, $n_C(\bm{Z})$, $n(\bm{R})$.
  The supports $\Omega$ and $\Pi$ are level sets of those counting functions, which is
  also how a blocked or matched design would express its support.
- **Moments** name the distribution: `\EZ`/`\VarZ` over assignment, `\ER`/`\VarR` over
  sampling, unsubscripted over both. The subscript names the distribution in force on
  the support, not the support itself.
- **Variance families**: letter $S$ means divisor (size − 1), $\sigma$ means divisor
  (size); the subscript names the index set ($n$ for $\mathcal{S}_n$, $N$ for $\mathcal{P}_N$);
  no subscript means the $N \to \infty$ limit. Macros `\Ssq`, `\ssq`, `\scov`, `\Ssqhat`
  take the index set as an optional first argument.
- **Estimands and estimator**: `\tauS`, `\tauP`, `\tauhat`. In the PATE guide the SATE is
  random, so it is written $\tau_{\text{SATE}}(\bm{R})$ inside $\E_\Pi$ and $\Var_\Pi$.
- **House style for assumptions**: when an assumption licenses a change of notation, set
  it out in numbered steps — general object, assumption invoked, licensed simplification,
  realization — rather than asserting it in passing.

## Typography

Inline math uses `\frac`, plain delimiters, and `\sum_{}^{}`; displays may use `\dfrac`,
`\left`/`\right`, and `\sum\limits`. Align rows are separated with `\\[1ex]`, never a
blank `\\ \\` row. Numbered equations must fit on one line beside their number; if one
does not, break it inside a `split` so it keeps a single number.
