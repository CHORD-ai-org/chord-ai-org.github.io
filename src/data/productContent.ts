export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'list'; items: { title: string; text: string }[] }
  | { kind: 'note'; text: string };

export interface ProductPageContent {
  slug: 'wam' | 'rym' | 'knock';
  eyebrow: string;
  title: string;
  caption: string;
  intro: string[];
  sections: { title: string; blocks: Block[] }[];
  aside: { label: string; value: string }[];
  seo: string;
}

export const productContent: ProductPageContent[] = [
  {
    slug: 'wam',
    eyebrow: 'Products / ω / 02',
    title: 'WAM',
    caption:
      'Fig. ω — A central Miracle Agent, a tool registry around it, and a shared context band underneath.',
    intro: [
      'WAM — Wait a Minute — is a human–agent collaboration framework for complex, long-horizon tasks that span conversations. Its subject is not a single prompt and response, but work that continues: a project that runs for weeks, across sessions, with a person and an agent both changing their minds along the way.',
      'It maintains shared context, organizes distributed information and task states, and makes accumulated working experience reusable. The objective is narrow and difficult: complex work should get better over time instead of restarting each time the conversation does.',
    ],
    sections: [
      {
        title: 'Fundamental architecture',
        blocks: [
          {
            kind: 'list',
            items: [
              {
                title: 'Shared Context Management',
                text: 'What the work knows. Decisions, constraints, open questions, and artifacts are maintained as state rather than reconstructed from a transcript at the start of every session.',
              },
              {
                title: 'Dynamic Planning',
                text: 'What the work should do next. The plan is a live object revised against what actually happened, not a script written once at the beginning and replayed.',
              },
              {
                title: 'Verifiable Execution',
                text: 'What the work actually did. Steps produce checkable outcomes, so a claim of completion can be tested rather than accepted on the strength of its phrasing.',
              },
            ],
          },
        ],
      },
      {
        title: 'One scheduling core, many executors',
        blocks: [
          {
            kind: 'p',
            text: 'WAM does not rely on conventional multi-agent negotiation. A centralized Miracle Agent is the scheduling core; specialized execution entities are invoked through a tool registry.',
            },
          {
            kind: 'p',
            text: 'The choice is deliberate. When the state of the work has one owner, a failure has one place to be traced to, and the next step has one place to be decided. Negotiation between peers distributes both the decision and the diagnosis — which is expensive exactly when something has gone wrong and the work is long.',
          },
        ],
      },
      {
        title: 'Why long-horizon is the hard case',
        blocks: [
          {
            kind: 'p',
            text: 'Most agent tooling is optimized for a single session. The problems CHORD is interested in — a paper, a product, a competition entry — do not fit inside one. In that setting the interesting failure is rarely a bad answer; it is a lost thread: work that was done, then forgotten, then done again.',
          },
        ],
      },
    ],
    aside: [
      { label: 'Category', value: 'Agent Framework' },
      { label: 'Layer', value: 'Orchestration / execution' },
      { label: 'Mark', value: 'ω — omega' },
      { label: 'Scheduling core', value: 'Miracle Agent' },
      { label: 'Status', value: 'Core framework' },
    ],
    seo: 'WAM (Wait a Minute) is CHORD’s human–agent collaboration framework for long-horizon work: shared context, dynamic planning, and verifiable execution, coordinated by a centralized Miracle Agent.',
  },
  {
    slug: 'rym',
    eyebrow: 'Products / γ / 03',
    title: 'Rym',
    caption:
      'Fig. γ — A compact core inside a bounded operation, with specialized modules at the corners.',
    intro: [
      'Rym is CHORD’s family of specialized small language models, deeply integrated with WAM. It is a research direction, not a released model family.',
      'One point matters more than the rest: Rym will not simply be another conventionally fine-tuned foundation model. We are exploring alternative approaches to building compact models that can perform specialized cognitive and computational operations efficiently.',
    ],
    sections: [
      {
        title: 'The hypothesis',
        blocks: [
          {
            kind: 'p',
            text: 'Much of an agent’s working day is a small number of operations repeated: parse this, check that, transform this structure, decide whether a claim is supported by the evidence attached to it. A general-purpose model can do all of them. The question is whether it should.',
          },
          {
            kind: 'p',
            text: 'Our working hypothesis is that a compact model built around a defined operation can perform that operation more precisely, and far more cheaply, than a general model invoked for everything.',
          },
        ],
      },
      {
        title: 'Relationship to WAM',
        blocks: [
          {
            kind: 'p',
            text: 'Rym is designed against WAM’s operator boundaries. The framework defines the operation — its inputs, its invariants, and the condition under which the result is wrong — and the model is built to satisfy that definition. This is the opposite order from fine-tuning a general model and hoping the behaviour generalizes to the operation later.',
          },
        ],
      },
      {
        title: 'What this page is not',
        blocks: [
          {
            kind: 'note',
            text: 'Rym is not a released product. This page publishes no benchmark comparisons, parameter counts, or performance claims. When there are results we can defend, they will appear under Research rather than in product copy.',
          },
        ],
      },
    ],
    aside: [
      { label: 'Category', value: 'Small Language Models' },
      { label: 'Layer', value: 'Model / specialized operations' },
      { label: 'Mark', value: 'γ — gamma' },
      { label: 'Integration', value: 'Designed for WAM' },
      { label: 'Status', value: 'Research direction' },
    ],
    seo: 'Rym is CHORD’s family of specialized small language models for WAM — a research direction exploring compact models for discrete cognitive and computational operations.',
  },
  {
    slug: 'knock',
    eyebrow: 'Products / κ / 04',
    title: 'Knock',
    caption:
      'Fig. κ — A connected graph of contributors, with LemmaX as the integration surface beneath it.',
    intro: [
      'Knock is CHORD’s developer forum and community platform. It exists because agent infrastructure is being invented in public, by people who are not all inside the same company.',
      'Knock is deeply integrated with LemmaX. Its purpose is to connect developers, researchers, contributors, and people exploring new approaches to agent infrastructure — and to keep the arguments that produce good infrastructure visible instead of buried in private threads.',
    ],
    sections: [
      {
        title: 'What it is for',
        blocks: [
          {
            kind: 'list',
            items: [
              {
                title: 'Discussion with a record',
                text: 'Threads keep their context, so a decision made in the first month is still findable in the sixth.',
              },
              {
                title: 'Work in progress',
                text: 'CHORD’s research notes and open questions, shared before they are finished, while they can still be argued with.',
              },
              {
                title: 'Contributors',
                text: 'A path from using the framework to changing it, for people who are not on the team.',
              },
            ],
          },
        ],
      },
      {
        title: 'Status',
        blocks: [
          {
            kind: 'note',
            text: 'Knock is in development. There is no public launch date on this page, no waitlist, and no community to join yet. When it opens, it will open here first.',
          },
        ],
      },
      {
        title: 'On LemmaX',
        blocks: [
          {
            kind: 'p',
            text: 'Knock is built around LemmaX integration. That integration is product detail rather than a marketing claim, so it will be documented when Knock is available — not described in advance on a page that has nothing to show yet.',
          },
        ],
      },
    ],
    aside: [
      { label: 'Category', value: 'Developer Community' },
      { label: 'Layer', value: 'Ecosystem' },
      { label: 'Mark', value: 'κ — kappa' },
      { label: 'Integration', value: 'LemmaX' },
      { label: 'Status', value: 'In development' },
    ],
    seo: 'Knock is CHORD’s developer forum and community platform, built around LemmaX integration, for people building and questioning agent infrastructure.',
  },
];
