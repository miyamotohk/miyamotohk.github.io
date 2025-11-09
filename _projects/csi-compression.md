---
layout: page
title: Context-tree-based CSI compression
description:
img: assets/img/publication_preview/csi-compression.png
importance: 1
category: research
related_publications: true
---

<img style="float: right; padding-left: 20px;" src="./../figures/tree.jpg" height="250"/>

<p align="justify">
We propose a novel context-tree-based approach to compressing time-varying CSI for wireless communications. The proposed scheme combines lossy vector quantisation, by means of data-adapted companders, with lossless compression, based on symbol probabilities estimated by a context-tree model.
</p>

<div style="text-align: justify">
Our scheme combines two steps.

 <ol>
  <li><strong>Vector quantisation.</strong> The new vector quantisation technique is based on a class of parametrised companders applied on each component of the normalised vectors. In particular, we propose the &beta;-law compander, inspired by the beta distribution. Our algorithm optimises the compander parameters whenever empirical data are available.</li>

  <li><strong>Data compression.</strong> Then, we compress the sequence of quantisation indices using a context-tree-based approach. Essentially, we build and regularly update the context-tree maximising (CTM) model, and encode the current symbol at each instant with the estimated distribution.</li>
</ol> 
</div>

<center>
     <img style="float: center" src="./../figures/diagram.jpg" width="400">
</center>

## Resources

* Implementation codes are available on [GitHub](https://github.com/miyamotohk/context-tree-compression){:target="_blank"}.


#### Journal paper
H.K. Miyamoto and S. Yang, "Context-Tree-Based Lossy Compression and Its Application to CSI Representation", _IEEE Transactions on Communications_, early access, 2022. [[IEEEXplore](https://ieeexplore.ieee.org/document/9770048){:target="_blank"}] [[arXiv](https://arxiv.org/abs/2110.14748){:target="_blank"}] [[BibTeX](/bibtex/tcom-2022.txt)]

#### Conference paper
H.K. Miyamoto and S. Yang, "A CSI Compression Scheme Using Context Trees", _International Zurich Seminar on Information and Communication (IZS)_, Zurich, 2022, pp. 24-28. doi: 10.3929/ethz-b-000535273. [[Link](https://www.research-collection.ethz.ch/handle/20.500.11850/535273){:target="_blank"}] [[BibTeX](/bibtex/izs-2022.txt)]

## Authors

* [Henrique Miyamoto](./../index)
* [Sheng Yang](https://www.l2s.centralesupelec.fr/u/yang-sheng/){:target="_blank"}

{% cite miyamoto2022-izs %}
{% cite miyamoto2022-tcomm %}