---
layout: ../layouts/Page.astro
title: Research
description: Our research focuses on the development, evaluation, and trustworthy use of AI in medicine.
---

<section class="section">

# Research&nbsp;

Our research focuses on the development, evaluation, and trustworthy use of AI in medicine. We work across language, imaging, and multimodal health data, with particular interests in biomedical NLP, medical LLMs, multimodal and foundation models, ophthalmology and medical imaging AI, and rigorous evaluation for real-world applications in biomedicine and healthcare.

</section>

<section class="section topic first">

# Medical LLMs and Biomedical NLP&nbsp;

We develop and evaluate large language models for biomedical and clinical text. Our work includes the development of domain-specific LLMs and broad applications in biomedical natural language processing.

Selected recent work:

- [Rethinking Retrieval-Augmented Generation for Medicine: A Large-Scale, Systematic Expert Evaluation and Practical Insights](https://arxiv.org/pdf/2511.06738), *Preprint*
- [A Federated and Parameter-Efficient Framework for Large Language Model Training in Medicine](https://arxiv.org/pdf/2601.22124), to appear in *npj Digital Medicine, 2026*
- [Benchmarking Large Language Models for Biomedical Natural Language Processing Applications and Recommendations](https://www.nature.com/articles/s41467-025-56989-2.pdf), *Nature Communications*, 2025; selected for the AMIA 2025 Year in Review
- [Outpatient Reception via Collaboration Between Nurses and a Large Language Model: A Randomized Controlled Trial](https://idp.nature.com/authorize/casa?redirect_uri=https://www.nature.com/articles/s41591-024-03148-7&casa_token=ynXDa_6zUagAAAAA:LBP3nv9uf75WvuPdjkiOF4C9N0aMVmVAnTVGsjr9HH-be4_I_u1hTtqrn2v9mR6VF90i9fLn4-WCa_fFQXo), *Nature Medicine*, 2024

</section>

<section class="section topic tall">

# Multimodal and Foundation Models in Medicine

We build foundation and multimodal models that integrate language, medical images, and other health data. Our goal is to support scalable representation learning and clinically relevant prediction across medical tasks.

Selected recent work:

- [MedPMC: A Systematic Framework for Scaling High-Fidelity Medical Multimodal Data for Foundation Models](https://arxiv.org/pdf/2607.07673), *Preprint*. A continuously updated resource with 11M medical image–text pairs and foundation models. See [open data collection](https://huggingface.co/collections/Yale-BIDS-Chen/medpmc) and [code repositories](https://github.com/Yale-BIDS-Chen-Lab/MedPMC).
- [From Compound Figures to Composite Understanding: Developing a Multi-Modal LLM from Biomedical Literature with Medical Multiple-Image Benchmarking and Validation](https://arxiv.org/pdf/2511.22232), *Preprint*
- [Are Multimodal LLMs Ready for Clinical Dermatology? A Real-World Evaluation in Dermatology](https://arxiv.org/abs/2605.04098), *Preprint*
- [Building the world’s first truly global medical foundation model](https://idp.nature.com/authorize/casa?redirect_uri=https://www.nature.com/articles/s41591-025-03859-5&casa_token=KGwUrN_w5KAAAAAA:y2XbAeoush8hUbkoudYHt8VaiDdWFbaABJ2hQ9wlwGfLbE-urWEYCi9XHtllxbeo3GC7dNa8hMzWIS-9z2U), *Nature Medicine,* 2025
- [Medical Foundation Large Language Models for Comprehensive Text Analysis and Beyond](https://www.nature.com/articles/s41746-025-01533-1.pdf), *npj Digital Medicine*, 2025

</section>

<section class="section topic">

# Ophthalmology and Medical Imaging AI

We develop AI methods for ophthalmology and broader medical imaging applications, including disease screening, diagnosis, prognosis, and multimodal reasoning. We are especially interested in open and clinically useful models for eye care.

Selected recent work:

- [OphMAE: Bridging Volumetric and Planar Imaging with a Foundation Model for Adaptive Ophthalmological Diagnosis](https://arxiv.org/pdf/2605.02714), *Preprint*
- [LEME: Open Large Language Models for Ophthalmology with Advanced Reasoning and Clinical Validation](https://arxiv.org/pdf/2410.03740), to appear in *npj Digital Medicine, 2026*
- [VOLMO: Versatile and Open Large Models for Ophthalmology](https://arxiv.org/pdf/2603.23953), *Preprint*
- [Ophthalmological Question Answering and Reasoning Using OpenAI o1 vs Other Large Language Models](https://jamanetwork.com/journals/jamaophthalmology/article-abstract/2836770). *JAMA Ophthalmology*, 2025
- [LMOD+: A Comprehensive Multimodal Dataset and Benchmark for Developing and Evaluating Multimodal Large Language Models in Ophthalmology](https://dl.acm.org/doi/10.1145/3801746), *ACM Transactions on Computing for Healthcare*, 2025; [the preliminary version](https://aclanthology.org/2025.findings-naacl.135/) was published in *NAACL Findings*

</section>

<section class="section topic">

# Trustworthy AI in Medicine&nbsp;

We study how AI systems in medicine should be evaluated, validated, and trusted. Our work focuses on factuality, memorization, generalization, real-world evaluation, and responsible deployment in biomedicine and healthcare.

Selected recent work:

- [How Far Have Large Language Models Advanced in Ophthalmology? A Systematic Review of Their Development, Evaluation, and Readiness for Clinical Use](https://www.researchsquare.com/article/rs-8819770/latest.pdf), *Preprint*
- [Memorization in Large Language Models in Medicine: Prevalence, Characteristics, and Implications](https://arxiv.org/pdf/2509.08604). *Nature Communications*, 2026
- [Reasoning-Driven Large Language Models in Medicine](https://www.thelancet.com/pdfs/journals/landig/PIIS2589-7500%2825%2900113-X.pdf), *The Lancet Digital Health*, 2026
- [AI workflow, external validation, and development in eye disease diagnosis](https://jamanetwork.com/journals/jamanetworkopen/articlepdf/2836426/chen_2025_oi_250545_1751908823.25507.pdf), *JAMA network open*, 2025, NLM Honor Award

</section>

<style>
  /* (Headings keep the trailing non-breaking space from the original, which affects wrapping on phones.) */
  /* Research topics: description and "Selected recent work:" in black; publication lists in the
     default body style (#212121, line-height 1.6, 6px apart), matching the original page. */
  .topic h1 {
    margin-top: 15px;
  }
  .topic p {
    color: #000;
  }
  .topic h1 + p {
    line-height: 1.38;
    margin: 12pt 0;
  }
  .topic.first h1 + p {
    line-height: 1.6;
    margin: 15px 0 0;
  }
  .topic li + li {
    margin-top: 6px;
  }
  /* "Multimodal and Foundation Models in Medicine" has a taller heading box on the original */
  .topic.tall h1 {
    line-height: calc(38pt * 1.38);
    margin: 35px 0 4pt;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    .topic.tall h1 {
      line-height: calc(33pt * 1.38);
    }
  }
  @media (max-width: 479px) {
    .topic.tall h1 {
      line-height: calc(27pt * 1.38);
    }
  }
</style>
