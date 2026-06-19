---
layout: single
title: ""
permalink: /methods-guides/
author_profile: true
---

- **Difference-in-Differences website** (with Bret Zeldow and Laura Hatfield).  
  - [Difference-in-Differences](https://diff.healthpolicydatascience.org/)

- **Foundational proofs in design-based causal inference**, presented with greater step-by-step detail than standard expositions for improved clarity and understanding.
  - [Notation and setup](https://tl2624.github.io/files/00_notation_and_setup.pdf). Lays out the standard potential outcomes framework that the other guides rely on, including the assignment mechanisms, potential outcomes, estimands, and the variances of the potential outcomes in both the finite sample and the superpopulation.
  - [Unbiasedness of Difference-in-Means estimator](https://tl2624.github.io/files/01_difference_in_means_unbiasedness.pdf). Gives a step-by-step proof that the Difference-in-Means estimator is unbiased for the sample average treatment effect (SATE) under complete and simple random assignment, and for the population average treatment effect (PATE) when the study sample is drawn by simple random sampling from the superpopulation.
  - [Variance and conservative estimation of Difference-in-Means estimator (SATE)](https://tl2624.github.io/files/02_difference_in_means_variance_sate.pdf). Works through the derivation of the variance of the Difference-in-Means estimator for the sample average treatment effect, where the study units are the fixed population of interest and the only randomness is the treatment assignment, and presents the conservative estimator of that variance.
  - [Variance and conservative estimation of Difference-in-Means estimator (PATE)](https://tl2624.github.io/files/03_difference_in_means_variance_pate.pdf). Carries the same derivation over to the population average treatment effect, where the study units are a simple random sample from a superpopulation and randomness comes from both sampling and assignment, and shows that the same conservative estimator is exactly unbiased there.
