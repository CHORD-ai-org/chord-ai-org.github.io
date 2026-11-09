export type ProductSlug = 'thylas' | 'wam' | 'rym' | 'knock';

export interface Product {
  slug: ProductSlug;
  symbol: string;
  symbolName: string;
  name: string;
  category: string;
  layer: string;
  summary: string;
  /** Short line used on the homepage list row. */
  oneliner: string;
  href: string;
  status: string;
}

export const products: Product[] = [
  {
    slug: 'thylas',
    symbol: 'τ',
    symbolName: 'tau',
    name: 'Thylas',
    category: 'Application Layer',
    layer: 'Application layer',
    summary:
      'A computational workspace for human-AI collaboration: persistent workspaces, Markdown notes, spatial whiteboards, the interface for delegated work, and one honest AI capability.',
    oneliner:
      'A computational workspace for human-AI collaboration — CHORD’s application layer.',
    href: '/products/thylas',
    status: 'UI MVP in progress',
  },
  {
    slug: 'wam',
    symbol: 'ω',
    symbolName: 'omega',
    name: 'WAM',
    category: 'Agent Framework',
    layer: 'Orchestration layer',
    summary:
      'A human–agent collaboration framework for complex, long-horizon work that spans conversations. Shared context, dynamic planning, verifiable execution — coordinated by a centralized Miracle Agent rather than negotiation between peers.',
    oneliner:
      'Human–agent collaboration for long-horizon work: shared context, dynamic planning, verifiable execution.',
    href: '/products/wam',
    status: 'Core framework',
  },
  {
    slug: 'rym',
    symbol: 'γ',
    symbolName: 'gamma',
    name: 'Rym',
    category: 'Small Language Models',
    layer: 'Model layer',
    summary:
      'A family of specialized small language models built to operate inside WAM. Rym is a research direction, not a conventionally fine-tuned foundation model: compact models for specialized cognitive and computational operations.',
    oneliner:
      'Specialized small models for the operations agents perform — a research direction, not another fine-tuned foundation model.',
    href: '/products/rym',
    status: 'Research direction',
  },
  {
    slug: 'knock',
    symbol: 'κ',
    symbolName: 'kappa',
    name: 'Knock',
    category: 'Developer Community',
    layer: 'Ecosystem layer',
    summary:
      'The developer forum and community platform, built around LemmaX integration. A place for the people building, testing, and arguing about agent infrastructure to compare notes in the open.',
    oneliner:
      'Developer forum and community, built around LemmaX integration.',
    href: '/products/knock',
    status: 'In development',
  },
];

export const productBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const site = {
  name: 'CHORD',
  url: 'https://chord-ai-org.github.io',
  tagline: 'Expanding what agents can do.',
  description:
    'CHORD is an AI infrastructure company. We build the infrastructure, models, and computational approaches that let autonomous agents work on long-horizon, complex tasks.',
  github: 'https://github.com/CHORD-ai-org',
  email: 'zhaoceaseer@gmail.com',
  githubRepo: 'https://github.com/CHORD-ai-org/chord-ai-org.github.io',
  license: 'https://github.com/CHORD-ai-org/chord-ai-org.github.io/blob/main/LICENSE',
};

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; meta?: string }[];
}

export const navigation: NavItem[] = [
  {
    label: 'Products',
    href: '/#products',
    children: products.map((p) => ({
      label: p.name,
      href: p.href,
      meta: p.category,
    })),
  },
  {
    label: 'Research',
    href: '/research',
    children: [
      { label: 'Overview', href: '/research', meta: 'Directions' },
      { label: 'Publications', href: '/research/publications', meta: 'Index' },
      { label: 'Operator Paradigm', href: '/#operators', meta: 'Concept' },
    ],
  },
  {
    label: 'Company',
    href: '/about',
    children: [
      { label: 'About', href: '/about', meta: 'What CHORD is' },
      { label: 'Vision', href: '/vision', meta: 'Where it goes' },
      { label: 'Join', href: '/join', meta: 'Open work' },
    ],
  },
  {
    label: 'Developers',
    href: '/developers',
    children: [
      { label: 'Overview', href: '/developers', meta: 'Build with CHORD' },
      { label: 'Documentation', href: '/developers/documentation', meta: 'In preparation' },
      { label: 'GitHub', href: site.github, meta: 'External' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export interface ResearchArea {
  index: string;
  title: string;
  question: string;
  detail: string;
}

export const researchAreas: ResearchArea[] = [
  {
    index: 'R/01',
    title: 'Agent Infrastructure',
    question: 'What has to exist for an agent to work for days, not minutes?',
    detail:
      'Runtime isolation, durable state, scheduling, and the observability needed to trust a long-running process. This is the layer most agent demos skip.',
  },
  {
    index: 'R/02',
    title: 'Small Language Models',
    question: 'How small can a model be and still perform a specialized operation reliably?',
    detail:
      'Rym asks whether compact models can be built for specific cognitive and computational operations instead of being distilled from a larger general model.',
  },
  {
    index: 'R/03',
    title: 'Dynamic Planning',
    question: 'How does a plan survive contact with reality?',
    detail:
      'Plans that are revised against evidence, not replayed. The open problem is knowing when a plan is wrong before the work is wasted.',
  },
  {
    index: 'R/04',
    title: 'Shared Context',
    question: 'What should persist between two conversations about the same problem?',
    detail:
      'Context as a maintained artifact rather than a transcript: what was decided, what was tried, what failed, and why.',
  },
  {
    index: 'R/05',
    title: 'Computational Cognition',
    question: 'Which parts of reasoning are operations rather than prose?',
    detail:
      'Treating some cognitive work as computation with inputs, invariants, and checkable outputs, rather than as text generation.',
  },
  {
    index: 'R/06',
    title: 'Reusable Operators',
    question: 'When a complex operation succeeds once, what exactly can be reused?',
    detail:
      'The central question behind the Operator Paradigm: extracting structure from a successful trajectory so it can be composed and generalized.',
  },
];
