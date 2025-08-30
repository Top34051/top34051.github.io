import React, { useState } from 'react';

const publications = [
  {
    title: 'Conversational AI and equity through assessing GPT-3\'s communication with diverse social groups on contentious topics',
    authors: 'Kaiping Chen, Anqi Shao, <b>Jirayu Burapacheep</b>, Yixuan Li',
    year: '2024',
    abstract: 'Autoregressive language models, which use deep learning to produce human-like texts, have surged in prevalence. Despite advances in these models, concerns arise about their equity across diverse populations. While AI fairness is discussed widely, metrics to measure equity in dialogue systems are lacking. This paper presents a framework, rooted in deliberative democracy and science communication studies, to evaluate equity in human–AI communication. Using it, we conducted an algorithm auditing study to examine how GPT-3 responded to different populations who vary in sociodemographic backgrounds and viewpoints on crucial science and social issues: climate change and the Black Lives Matter (BLM) movement. We analyzed 20,000 dialogues with 3290 participants differing in gender, race, education, and opinions. We found a substantively worse user experience among the opinion minority groups (e.g., climate deniers, racists) and the education minority groups; however, these groups changed attitudes toward supporting BLM and climate change efforts much more compared to other social groups after the chat. GPT-3 used more negative expressions when responding to the education and opinion minority groups. We discuss the social-technological implications of our findings for a conversational AI system that centralizes diversity, equity, and inclusion.',
    paperLink: 'https://www.nature.com/articles/s41598-024-51969-w',
    githubLink: 'https://github.com/top34051/chat-with-gpt-3',
    venue: 'Scientific Reports',
  },
  {
    title: 'Alignment as Reward-Guided Search',
    authors: 'Maxim Khanov*, <b>Jirayu Burapacheep</b>*, Yixuan Li',
    year: '2024',
    abstract: 'Aligning large language models with human objectives is paramount, yet common approaches including RLHF suffer from unstable and resource-intensive training. In response to this challenge, we introduce ARGS, Alignment as Reward-Guided Search, a novel framework that integrates alignment into the decoding process, eliminating the need for expensive RL training. By adjusting the model\'s probabilistic predictions using a reward signal, ARGS generates texts with semantic diversity while being aligned with human preferences, offering a promising and flexible solution for aligning language models. Notably, our method demonstrates consistent enhancements in average reward compared to baselines across diverse alignment tasks and various model dimensions. For example, under the same greedy-based decoding strategy, our method improves the average reward by 19.56% relative to the baseline and secures a preference or tie score of 64.33% in GPT-4 evaluation. We believe that our framework, emphasizing test-time alignment, paves the way for more responsive language models in the future.',
    paperLink: 'https://openreview.net/forum?id=shgx0eqdw6',
    githubLink: 'https://github.com/deeplearning-wisc/args',
    venue: 'ICLR 2024',
  },
  {
    title: 'ColorSwap: A Color and Word Order Dataset for Multimodal Evaluation',
    authors: '<b>Jirayu Burapacheep</b>, Ishan Gaur, Agam Bhatia, Tristan Thrush',
    year: '2024',
    abstract: 'This paper introduces the ColorSwap dataset, designed to assess and improve the proficiency of multimodal models in matching objects with their colors. The dataset is comprised of 2,000 unique image-caption pairs, grouped into 1,000 examples. Each example includes a caption-image pair, along with a ``color-swapped\'\' pair. We follow the Winoground schema: the two captions in an example have the same words, but the color words have been rearranged to modify different objects. The dataset was created through a novel blend of automated caption and image generation with humans in the loop. We evaluate image-text matching (ITM) and visual language models (VLMs) and find that even the latest ones are still not robust at this task. GPT-4V and LLaVA score 72% and 42% on our main VLM metric, although they may improve with more advanced prompting techniques. On the main ITM metric, contrastive models such as CLIP and SigLIP perform close to chance (at 12% and 30%, respectively), although the non-contrastive BLIP ITM model is stronger (87%). We also find that finetuning on fewer than 2,000 examples yields significant performance gains on this out-of-distribution word-order understanding task.',
    paperLink: 'https://arxiv.org/abs/2404.00001',
    githubLink: 'https://github.com/Top34051/colorswap',
    venue: 'ACL 2024 (Findings)',
  },
  {
    title: 'Your Classifier Can Be Secretly a Likelihood-Based OOD Detector',
    authors: '<b>Jirayu Burapacheep</b>, Yixuan Li',
    year: '2024',
    abstract: 'The ability to detect out-of-distribution (OOD) inputs is critical to guarantee the reliability of classification models deployed in an open environment. A fundamental challenge in OOD detection is that a discriminative classifier is typically trained to estimate the posterior probability p(y|z) for class y given an input z, but lacks the explicit likelihood estimation of p(z) ideally needed for OOD detection. While numerous OOD scoring functions have been proposed for classification models, these estimate scores are often heuristic-driven and cannot be rigorously interpreted as likelihood. To bridge the gap, we propose Intrinsic Likelihood (INK), which offers rigorous likelihood interpretation to modern discriminative-based classifiers. Specifically, our proposed INK score operates on the constrained latent embeddings of a discriminative classifier, which are modeled as a mixture of hyperspherical embeddings with constant norm. We draw a novel connection between the hyperspherical distribution and the intrinsic likelihood, which can be effectively optimized in modern neural networks. Extensive experiments on the OpenOOD benchmark empirically demonstrate that INK establishes a new state-of-the-art in a variety of OOD detection setups, including both far-OOD and near-OOD. Code is available at this https URL.',
    paperLink: 'https://arxiv.org/abs/2408.04851',
    githubLink: 'https://github.com/deeplearning-wisc/ink',
    venue: 'TMLR 2024',
  },
  {
    title: 'Detecting Corpus-Level Knowledge Inconsistencies in Wikipedia with Large Language Models',
    authors: 'Sina J. Semnani, <b>Jirayu Burapacheep</b>, Arpandeep Khatua, Thanawan Atchariyachanvanit, Zheng Wang, Monica S. Lam',
    year: '2025',
    abstract: 'Wikipedia is the largest open knowledge corpus, widely used worldwide and serving as a key resource for training large language models (LLMs) and retrieval-augmented generation (RAG) systems. Ensuring its accuracy is therefore critical. But how accurate is Wikipedia? In this paper, we focus on inconsistencies, a specific type of factual inaccuracy. We introduce the task of corpus-level inconsistency detection and present a human-annotated dataset for this task. We also propose an agent-based system combining an LLM with information retrieval to effectively identify inconsistencies, which outperforms strong LLM baselines by 2.1% in terms of AUROC on our dataset. Based on our findings, we estimate that at least 79.9 million facts (approximately 3.3%) in the English Wikipedia contradict at least one other fact within the corpus (99% confidence interval: 37.6 million to 121.9 million). We further show that these inconsistencies propagate into widely-used NLP datasets, affecting gold labels in at least 7.3% of examples in the fact-verification dataset FEVEROUS and 4.0% in the question-answering dataset AmbigQA. In a user study with experienced Wikipedia editors, 87.5% of participants reported increased confidence in identifying inconsistencies when using our system, discovering on average 64.7% more inconsistencies in the same amount of time. Our results demonstrate that LLM-based tools can effectively assist humans in detecting inconsistencies in large-scale corpora.',
    paperLink: '',
    githubLink: '',
    venue: 'EMNLP 2025 (Main)',
  },
  // Add more publications as needed
];

function Publications() {
  const reversedPublications = [...publications].reverse();

  const [showAbstract, setShowAbstract] = useState(false);
  const [selectedPublication, setSelectedPublication] = useState(null);

  const handleAbstractToggle = (index) => {
    setSelectedPublication(index);
    setShowAbstract(!showAbstract);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold">Publications</h2>
      {reversedPublications.map((publication, index) => (
        <div key={index} className="mt-3 border bg-white rounded shadow p-4">
          {publication.venue && publication.venue !== 'Preprint' && (
            <p className="text-sm py-1 px-3 mb-2 mr-2 border text-white font-semibold bg-emerald-600 border-none rounded">
              {publication.venue}
            </p>
          )}
          <h2 className="text-l font-bold mb-2">{publication.title}</h2>
          <p className="text-sm text-gray-600">
            <b>Authors:</b> <span dangerouslySetInnerHTML={{ __html: publication.authors }} /><br />
            {publication.year && (
              <div>
                <b>Year:</b> <span dangerouslySetInnerHTML={{ __html: publication.year }} /><br />
              </div>
            )}
          </p>
          {publication.abstract && (
            <button className="text-xs w-32 py-1 px-3 mt-3 mr-2 border text-white font-semibold bg-gray-500 border-gray-700 hover:bg-gray-700 rounded transition duration-200" onClick={() => handleAbstractToggle(index)}>
              {showAbstract && selectedPublication === index ? 'Hide Abstract' : 'Show Abstract'}
            </button>
          )}
          {publication.paperLink && (
            <a href={publication.paperLink} target="_blank" rel="noopener noreferrer" className="mr-2">
              <button className="text-xs py-1 px-3 mt-2 border text-white font-semibold bg-blue-500 border-blue-700  hover:bg-blue-700 rounded transition duration-200">
                Paper
              </button>
            </a>
          )}
          {publication.githubLink && (
            <a href={publication.githubLink} target="_blank" rel="noopener noreferrer" className="mr-2">
              <button className="text-xs py-1 px-3 mt-2 border text-white font-semibold bg-yellow-500 border-yellow-600  hover:bg-yellow-600 rounded transition duration-200">
                Code
              </button>
            </a>
          )}
          {showAbstract && selectedPublication === index && publication.abstract && (
            <div className="text-sm text-gray-600 mt-2">
              <b>Abstract:</b> <span dangerouslySetInnerHTML={{ __html: publication.abstract }} /><br />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Publications;
