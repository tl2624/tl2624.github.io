---
layout: single
title: ""
permalink: /publications/
redirect_from:
  - /research/
author_profile: true
---

{% comment %}
Abstracts and BibTeX records (assets/js/pub-toggle.js, assets/css/custom.css).
This note is removed when the site is built, so it is never published.

Both belong to the links line and follow its grammar, Label: link | link. The
abstract is a second way to read the paper, so it joins the PDF under the
entry's Paper or Preprint label. The BibTeX record gets a label of its own,
Citation, because it cites the published work even where the PDF is a preprint:

    **Paper**:&nbsp;[PDF](...) | [Abstract](#abs-KEY)&nbsp;· **Citation**:&nbsp;[BibTeX](#bib-KEY)

The non-breaking spaces do the work of a tie in LaTeX. They hold a label
together (Replication&nbsp;material), keep it with its first link, so that no
line ends on a bare label, and keep each separator with the item before it, so
that no line begins with one. A line can still break after a separator or a bar.

These are ordinary Markdown links. A link becomes a toggle by pointing at a
collapsible block, which follows the entry, set off by blank lines, and carries
the id the link names. markdown="1" has the abstract read as Markdown, which
also curls its quotes:

    <div class="pub-toggle-body" id="abs-KEY" markdown="1">
    Abstract text.
    </div>

A BibTeX block holds a pre element instead. Wrap the pre element in Liquid's raw
and endraw tags: BibTeX doubles its braces to protect a capitalized word at the
start of a title, and Liquid would otherwise read the doubled brace as its own.

BibTeX is given only for work with final publication details: volume, issue
and pages for an article; volume, chapter and pages for a chapter.
{% endcomment %}

## Published and Accepted Papers

Leavitt, T. (2023). Randomization-Based, Bayesian Inference of Causal Effects. *Journal of Causal Inference*, 11(1), 20220025. [DOI: 10.1515/jci-2022-0025](https://doi.org/10.1515/jci-2022-0025)  
**Paper**:&nbsp;[PDF](https://tl2624.github.io/files/Leavitt_2023.pdf) | [Abstract](#abs-leavitt2023)&nbsp;· **Replication&nbsp;material**:&nbsp;[GitHub](https://github.com/tl2624/bayesian-randomization-replication)&nbsp;· **Citation**:&nbsp;[BibTeX](#bib-leavitt2023)

<div class="pub-toggle-body" id="abs-leavitt2023" markdown="1">
Bayesian causal inference in randomized experiments usually imposes model-based structure on potential outcomes. Yet causal inferences from randomized experiments are especially credible because they depend on a known assignment process, not a probability model of potential outcomes. In this article, I derive a randomization-based procedure for Bayesian inference of causal effects in a finite population setting. I formally show that this procedure satisfies Bayesian analogues of unbiasedness and consistency under weak conditions on a prior distribution. Unlike existing model-based methods of Bayesian causal inference, my procedure supposes neither probability models that generate potential outcomes nor independent and identically distributed random sampling. Unlike existing randomization-based methods of Bayesian causal inference, my procedure does not suppose that potential outcomes are discrete and bounded. Consequently, researchers can reap the benefits of Bayesian inference without sacrificing the properties that make inferences from randomized experiments especially credible in the first place.
</div>

<div class="pub-toggle-body" id="bib-leavitt2023">
{% raw %}<pre>@article{leavitt2023randomization,
  title     = {Randomization-Based, {Bayesian} Inference of Causal Effects},
  author    = {Leavitt, Thomas},
  journal   = {Journal of Causal Inference},
  volume    = {11},
  number    = {1},
  pages     = {20220025},
  year      = {2023},
  publisher = {De Gruyter},
  doi       = {10.1515/jci-2022-0025}
}</pre>{% endraw %}
</div>

Leavitt, T. and V. Rivera-Burgos (2024). Audit Experiments of Racial Discrimination and the Importance of Symmetry in Exposure to Cues. *Political Analysis*, 32(4), 445-462. [DOI: 10.1017/pan.2024.3](https://doi.org/10.1017/pan.2024.3)  
**Paper**:&nbsp;[PDF](https://tl2624.github.io/files/Leavitt_Rivera-Burgos_2024.pdf) | [Abstract](#abs-leavitt-rivera-burgos2024)&nbsp;· **Replication&nbsp;material**:&nbsp;[Dataverse](https://doi.org/10.7910/DVN/R3JGWS) | [GitHub](https://github.com/tl2624/audit-symmetry-replication)&nbsp;· **Citation**:&nbsp;[BibTeX](#bib-leavitt-rivera-burgos2024)

<div class="pub-toggle-body" id="abs-leavitt-rivera-burgos2024" markdown="1">
Researchers are often interested in whether discrimination on the basis of racial cues persists above and beyond discrimination on the basis of nonracial attributes that decision makers—e.g., employers and legislators—infer from such cues. We show that existing audit experiments may be unable to parse these mechanisms because of an asymmetry in when decision makers are exposed to cues of race and additional signals intended to rule out discrimination due to other attributes. For example, email audit experiments typically cue race via the name in the email address, at which point legislators can choose to open the email, but cue other attributes in the body of the email, which decision makers can be exposed to only after opening the email. We derive the bias resulting from this asymmetry and then propose two distinct solutions for email audit experiments. The first exposes decision makers to all cues before the decision to open. The second crafts the email to ensure no discrimination in opening and then exposes decision makers to all cues in the body of the email after opening. This second solution works without measures of opening, but can be improved when researchers do measure opening, even if with error.
</div>

<div class="pub-toggle-body" id="bib-leavitt-rivera-burgos2024">
{% raw %}<pre>@article{leavitt2024audit,
  title     = {Audit Experiments of Racial Discrimination and the Importance of Symmetry in Exposure to Cues},
  author    = {Leavitt, Thomas and Rivera-Burgos, Viviana},
  journal   = {Political Analysis},
  volume    = {32},
  number    = {4},
  pages     = {445--462},
  year      = {2024},
  publisher = {Cambridge University Press},
  doi       = {10.1017/pan.2024.3}
}</pre>{% endraw %}
</div>

Leavitt, T. and L. A. Hatfield. (2025). Averaged Prediction Models (APM): Identifying Causal Effects in Controlled Pre-Post Settings with Application to Gun Policy. *The Annals of Applied Statistics*, 19(3), 1826-1846. [DOI: 10.1214/25-AOAS2011](https://doi.org/10.1214/25-AOAS2011)  
**Paper**:&nbsp;[PDF](https://tl2624.github.io/files/Leavitt_Hatfield_2025.pdf) | [Abstract](#abs-leavitt-hatfield2025)&nbsp;· **Replication&nbsp;material**:&nbsp;[GitHub](https://github.com/tl2624/apm-replication)&nbsp;· **R&nbsp;package&nbsp;(apm)**:&nbsp;[CRAN](https://doi.org/10.32614/CRAN.package.apm) | [GitHub](https://tl2624.github.io/apm/)&nbsp;· **Citation**:&nbsp;[BibTeX](#bib-leavitt-hatfield2025)

<div class="pub-toggle-body" id="abs-leavitt-hatfield2025" markdown="1">
To investigate causal impacts, many researchers use controlled pre-post designs that compare over-time differences between a population exposed to a policy change and an unexposed comparison group. However, researchers using these designs often disagree about the “correct” specification of the causal model, perhaps most notably in analyses to identify the effects of gun policies on crime. To help settle these model specification debates, we propose a general identification framework that unifies a variety of models researchers use in practice. In this framework, which nests “brand name” designs like difference-in-differences as special cases, we use models to predict untreated outcomes and then correct the treated group’s predictions using the comparison group’s observable prediction errors. Our point identifying assumption is that treated and comparison groups would have equal prediction errors (in expectation) under no treatment. To choose among candidate models, we propose a data-driven procedure based on models’ robustness to violations of this point identifying assumption. Our selection procedure averages over candidate models, weighting by each model’s posterior probability of being the most robust, given its differential average prediction errors in the pre-period. This approach offers a way out of debates over the “correct” model by choosing on robustness instead and has the desirable property of being feasible in the “locked box” of preintervention data only. We apply our methodology to the gun policy debate, focusing specifically on Missouri’s 2007 repeal of its permit-to-purchase law, and provide an R package (apm) for implementation.
</div>

<div class="pub-toggle-body" id="bib-leavitt-hatfield2025">
{% raw %}<pre>@article{leavitt2025averaged,
  title     = {Averaged Prediction Models ({APM}): Identifying Causal Effects in Controlled Pre-Post Settings with Application to Gun Policy},
  author    = {Leavitt, Thomas and Hatfield, Laura A.},
  journal   = {The Annals of Applied Statistics},
  volume    = {19},
  number    = {3},
  pages     = {1826--1846},
  year      = {2025},
  publisher = {Institute of Mathematical Statistics},
  doi       = {10.1214/25-AOAS2011}
}</pre>{% endraw %}
</div>

Leavitt, T. (2026). Fisher Meets Bayes: The Value of Randomisation for Bayesian Inference of Causal Effects. *International Statistical Review*, 94(1), 188-201. [DOI: 10.1111/insr.12598](https://doi.org/10.1111/insr.12598)  
**Paper**:&nbsp;[PDF](https://tl2624.github.io/files/Leavitt_2026a.pdf) | [Abstract](#abs-leavitt2026)&nbsp;· **Replication&nbsp;material**:&nbsp;[GitHub](https://github.com/tl2624/fisher-meets-bayes-replication)&nbsp;· **Citation**:&nbsp;[BibTeX](#bib-leavitt2026)

<div class="pub-toggle-body" id="abs-leavitt2026" markdown="1">
For a Bayesian agent with beliefs about the relationship between covariates and potential outcomes, deterministically selecting an assignment that yields optimal covariate balance rationally dominates randomisation. However, randomisation—by enabling control over the probabilities of erroneous causal conclusions due to unknown covariate imbalances—offers insurance against the possibility that an agent’s beliefs may be misleading. For the most part, such rational justifications for optimum assignment have presupposed the framework of Bayesian inference, while such epistemic justifications for randomisation have presupposed the framework of significance testing. In this paper, I build on a conception of balance that seems inextricable from the significance testing framework, Fisherian balance, to show that it implies an analogous epistemic justification for randomisation within the framework of Bayesian inference. Consequently, for the choice between optimum and random assignment, this paper shows that epistemic justifications need not be wedded to significance testing nor must Bayesian inference be wedded to rational justifications.
</div>

<div class="pub-toggle-body" id="bib-leavitt2026">
{% raw %}<pre>@article{leavitt2026fisher,
  title     = {{Fisher} Meets {Bayes}: The Value of Randomisation for {Bayesian} Inference of Causal Effects},
  author    = {Leavitt, Thomas},
  journal   = {International Statistical Review},
  volume    = {94},
  number    = {1},
  pages     = {188--201},
  year      = {2026},
  publisher = {Wiley},
  doi       = {10.1111/insr.12598}
}</pre>{% endraw %}
</div>

Leavitt, T. and V. Rivera-Burgos. (In press). Navigating the Mismeasurement of Intermediary Variables in Message-Based Experiments. *Political Science Research and Methods*, First View. [DOI: 10.1017/psrm.2025.10082](https://doi.org/10.1017/psrm.2025.10082)  
**Paper**:&nbsp;[PDF](https://tl2624.github.io/files/Leavitt_Rivera-Burgos_First_View.pdf) | [Abstract](#abs-leavitt-rivera-burgos-psrm)&nbsp;· **Replication&nbsp;material**:&nbsp;[Dataverse](https://doi.org/10.7910/DVN/X3CORT) | [GitHub](https://github.com/tl2624/message-based-experiments)

<div class="pub-toggle-body" id="abs-leavitt-rivera-burgos-psrm" markdown="1">
Researchers frequently deliver treatments through messages, as in many audit and get-out-the-vote (GOTV) experiments. These message-based experiments often hinge on intermediary variables—actions subjects must take to actually receive the treatment or control embedded in a message. Whether subjects open the message is a crucial intermediary step, which can serve as a condition for estimating downstream treatment effects or as an outcome of interest in its own right. Yet opens are often measured with error, most notably when some openers are misclassified as non-openers in email-based studies. We characterize the resulting bias, derive interpretable bounds on effects for well-defined subgroups, and provide sensitivity analyses for mismeasurement, thereby offering practical guidance for message-based experiments conducted through email and other communication technologies.
</div>

Leavitt, T. and L. W. Miratrix. Building a Design-Based Matching Pipeline: From Principles to Practical Implementation in R. Accepted at *Observational Studies*.  
**Preprint**:&nbsp;[PDF](https://tl2624.github.io/files/Leavitt_Miratrix_Accepted.pdf) | [Abstract](#abs-leavitt-miratrix)&nbsp;· **Replication&nbsp;material**:&nbsp;[GitHub](https://github.com/tl2624/matching-guide)

<div class="pub-toggle-body" id="abs-leavitt-miratrix" markdown="1">
Matching, a canonical design for observational studies, takes many forms that rest on distinct — yet often implicit — statistical principles. We construct a matching pipeline for practitioners that makes these principles explicit and integrates stages often treated separately within a coherent design-based framework. The pipeline begins from the conceptual ideal of a randomized experiment, traces how observational studies depart from it, and then employs matching to approximate that ideal. The next stage is inference under the as-if randomization assumption that matched sets are equivalent to a collection of randomized experiments within blocks, where each block has a fixed number of treated units equal to the number observed in that set. Under this assumption, we consider inference on all individual effects in the “sharp” framework and on the average effect in the “weak” framework. The final stage is a sensitivity analysis to assess, under either framework, how inferences change under departures from as-if randomization. Each step includes extensively commented R code that equips practitioners to implement both established and newly developed procedures, including several not yet available in existing R packages. We illustrate the full workflow through an application examining the effect of United Nations peacekeeping interventions on the duration of post-conflict peace.
</div>

Leavitt, T. Beyond Pretrends: A Discordance-Based Sensitivity Analysis for Difference-in-Differences. Accepted at *Observational Studies*. [arXiv:2609.19081](https://arxiv.org/abs/2609.19081)  
**Preprint**:&nbsp;[PDF](https://tl2624.github.io/files/Leavitt_Accepted.pdf) | [Abstract](#abs-leavitt-did)&nbsp;· **Replication&nbsp;material**:&nbsp;[GitHub](https://github.com/tl2624/did-discordance-sensitivity)

<div class="pub-toggle-body" id="abs-leavitt-did" markdown="1">
In the canonical Difference-in-Differences design, the control group’s post-treatment change serves as an imputation of the treated group’s counterfactual change in the same period, an imputation justified by parallel trends. However, differences in group composition can produce between-group differences in how outcomes would evolve over time, rendering this imputation vulnerable to confounding. An alternative imputation — such as one based on the treated group’s pre-treatment change — avoids such between-group confounding but introduces the risk of confounding from within-group temporal shifts. Ideally, both imputations, each vulnerable to different sources of confounding, would have concordant values, thereby yielding the same causal conclusions. When the imputations are discordant, conclusions under parallel trends hinge more critically on that assumption since alternative imputations would point to different results. Yet in these scenarios, existing pretrends-based sensitivity analyses can show low sensitivity because they ignore post-treatment deviations from pretrends in the control group. This paper therefore proposes a discordance-based sensitivity model in which parallel pretrends are necessary but not sufficient for low sensitivity. I formally justify this model in terms of the expected distance between the ATT under parallel trends and under alternative assumptions, weighted by the joint plausibility of those assumptions. I then provide a decision-theoretic rationale for benchmarking violations of parallel trends using the worst-case discordance between the parallel trends imputation and alternative imputations. Finally, I apply both pretrends- and discordance-based sensitivity models to assess how a labor supply shock influenced electoral support for apartheid-era policies in South Africa, showing how the two approaches yield different results.
</div>

## Under Review

Leavitt, T., J. Bowers, and L. W. Miratrix. Sequential Sensitivity Analysis for Multiple Assumptions: A Framework for Understanding Racial Disparity in Police Use of Force. Revise and resubmit at *Journal of the American Statistical Association*. [arXiv:2605.21893](https://arxiv.org/abs/2605.21893)  
**Preprint**:&nbsp;[PDF](https://tl2624.github.io/files/Leavitt_et_al_2026.pdf) | [Abstract](#abs-leavitt-bowers-miratrix)

<div class="pub-toggle-body" id="abs-leavitt-bowers-miratrix" markdown="1">
Inferring racial discrimination in police use of force — the average causal effect of civilian race on use of force — requires two assumptions about policing prior to potential use of force: that officers do not discriminate in whom they would stop (no discrimination in stops) and that, conditional on patrol context, the probability that an encounter is with a minority rather than a white civilian does not vary across encounters (no bias in encounters). As Knox et al. (2020) show, violations of the first can mask racial disparity in force. Whether it reflects discrimination in force also depends on the second. Existing sensitivity analyses address one assumption at a time. We develop a framework that varies both sequentially and apply it to NYPD Stop, Question, and Frisk data (2003–2013). Under plausible levels of discrimination in stops, we find substantial racial disparity in force. However, the conclusion that this disparity reflects discrimination is fragile to modest departures from no bias in encounters that census-based calibration suggests are demographically feasible. By jointly addressing both confounding channels, the framework reveals how they interact in ways that separate analyses cannot, contributing to understanding what generates racial disparities and how they might be addressed.
</div>

Leavitt, T. Which Effect of Race? Causal Inference without Holding All Else Equal. Submitted. [arXiv:2607.16371](https://arxiv.org/abs/2607.16371)  
**Preprint**:&nbsp;[PDF](https://tl2624.github.io/files/Leavitt_2026b.pdf) | [Abstract](#abs-leavitt-race)

<div class="pub-toggle-body" id="abs-leavitt-race" markdown="1">
Empirical studies of racial discrimination vary race while holding nonracial traits fixed, a design the literature defends as what credible inference requires. This defense bundles two claims: which effect of race a study should target, and whether its design can recover that effect. I separate them. The same randomization that secures credible estimation and inference recovers a family of race estimands, from the all-else-equal effect to a within-race effect that lets associated traits vary with race. Every member of that family is causal rather than descriptive, and the choice among members is a claim about what a racial category is — a claim extending to ethnicity, religion, and other identity categories that index associated traits. I derive conditions, weaker than the literature’s, for credible estimation and inference. Reanalyzing a Spanish-language campaign experiment, I find coethnic preference among Hispanic voters under the within-race effect and none under the all-else-equal effect.
</div>

## Book Chapters

Bowers, J. and T. Leavitt (2020). Causality and design-based inference. In L. Curini and R. Franzese (Eds.), The SAGE Handbook of Research Methods in Political Science and International Relations, Volume 2, Chapter 41, pp. 769-804. Thousand Oaks, CA: SAGE Publications. [DOI: 10.4135/9781526486387.n44](https://doi.org/10.4135/9781526486387.n44)  
**Preprint**:&nbsp;[PDF](https://tl2624.github.io/files/Bowers_Leavitt_2020.pdf) | [Abstract](#abs-bowers-leavitt2020)&nbsp;· **Citation**:&nbsp;[BibTeX](#bib-bowers-leavitt2020)

<div class="pub-toggle-body" id="abs-bowers-leavitt2020" markdown="1">
Counterfactual causal quantities cannot be observed, but researchers can use statistical procedures – namely, estimators and hypothesis tests – to draw inferences from data that can be observed. In this chapter, we present a unified account of estimation and testing for causal inference, showing how a study’s research design can provide a foundation for both estimators and tests. We show how certain characteristics of research designs can justify claims that a given estimator or test has ‘good’ properties (e.g., unbiasedness, consistency, controlled error rates). We first develop ideas in the context of a randomized controlled experiment. In that context, we juxtapose estimations of and tests about causal effects and then provide an explicit comparison of Fisherian and Neymanian hypothesis tests. We then extend our analysis to research designs that are either partially controlled (e.g., experiments with noncompliance and/or attrition) or uncontrolled (e.g., observational studies). We show the ways in which knowledge and assumptions about research design – as well as assessments of how inferences would change should these assumptions be false – constitute a reliable basis for causal inference. We conclude by discussing the value of design-based causal inference in light of recent debates on its role in social scientific inquiry more broadly.
</div>

<div class="pub-toggle-body" id="bib-bowers-leavitt2020">
{% raw %}<pre>@incollection{bowers2020causality,
  title     = {Causality and Design-Based Inference},
  author    = {Bowers, Jake and Leavitt, Thomas},
  editor    = {Curini, Luigi and Franzese, Robert},
  booktitle = {The {SAGE} Handbook of Research Methods in Political Science and International Relations},
  volume    = {2},
  chapter   = {41},
  pages     = {769--804},
  year      = {2020},
  publisher = {SAGE Publications},
  address   = {Thousand Oaks, CA},
  doi       = {10.4135/9781526486387.n44}
}</pre>{% endraw %}
</div>

Green, D. P., T. Leavitt, and D. Markovits (2023). Challenges that Proprietary Research Poses for Meta-analysis. In J. M. Box-Steffensmeier, D. P. Christenson, and V. Sinclair-Chapman (Eds.), Oxford Handbook of Engaged Methodological Pluralism in Political Science, Volume 1, Chapter 18, pp. 257-271. New York, NY: Oxford University Press. Print edition 2026. [DOI: 10.1093/oxfordhb/9780192868282.013.21](https://doi.org/10.1093/oxfordhb/9780192868282.013.21)  
**Preprint**:&nbsp;[PDF](https://tl2624.github.io/files/Green_et_al_In_Progress.pdf) | [Abstract](#abs-green-leavitt-markovits2023)&nbsp;· **Citation**:&nbsp;[BibTeX](#bib-green-leavitt-markovits2023)

<div class="pub-toggle-body" id="abs-green-leavitt-markovits2023" markdown="1">
The social sciences in general and political science in particular have seen marked improvements in research transparency. Data-sharing, pre-analysis plans, and results-blind reviewing have helped improve the trustworthiness of research findings, which in turn has facilitated credible research syntheses. At the same time, the rapid growth of proprietary research conducted by or on behalf of private entities presents a new set of challenges. Proprietary research seldom adheres to best practices in terms of open data, pre-registration, or pre-analysis plans; moreover, results from an undisclosed set of studies may be selectively released to the public in order to advance the interests of the research sponsors. This chapter addresses the problems of inference that arise when meta-analysts attempt to synthesize a research literature that comes exclusively or partly from proprietary sources. The authors’ approach invokes a model of how proprietary organizations choose to disclose their results. Uncertainty over the parameters of this model implies that proprietary research should be down-weighted. This broad analytic argument is illustrated with reference to two experimental literatures on voter mobilization, one involving Facebook’s banner ads and another involving handwritten letters to voters. The chapter concludes by outlining procedural changes that can decrease the threat selective reporting poses to inference.
</div>

<div class="pub-toggle-body" id="bib-green-leavitt-markovits2023">
{% raw %}<pre>@incollection{green2023challenges,
  title     = {Challenges that Proprietary Research Poses for Meta-Analysis},
  author    = {Green, Donald P. and Leavitt, Thomas and Markovits, Daniel},
  editor    = {Box-Steffensmeier, Janet M. and Christenson, Dino P. and Sinclair-Chapman, Valeria},
  booktitle = {Oxford Handbook of Engaged Methodological Pluralism in Political Science},
  volume    = {1},
  chapter   = {18},
  pages     = {257--271},
  year      = {2023},
  publisher = {Oxford University Press},
  address   = {New York, NY},
  doi       = {10.1093/oxfordhb/9780192868282.013.21},
  note      = {Print edition 2026}
}</pre>{% endraw %}
</div>
