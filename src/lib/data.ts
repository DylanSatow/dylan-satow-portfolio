// ============================================================================
// Site content. Single source of truth for every section.
// ============================================================================

export interface Entry {
	role: string;
	company: string;
	period: string;
	description: string;
}

export interface Project {
	name: string;
	description: string;
	tech: string;
	link: string;
}

// --- identity -------------------------------------------------------------
export const profile = {
	name: 'Dylan Satow',
	handle: 'dylansatow',
	role: 'Software Engineer @ AWS',
	host: 'dylan@satow',
	email: 'dylansatow531@gmail.com'
};

export const about = {
	bio: `I'm Dylan Satow, a software engineer at AWS working on Amazon MSK (Managed Streaming for Apache Kafka) where I spend my time deep in distributed systems. I graduated from Columbia with a degree in Math & CS. I came up through ML research (non-Euclidean representation learning and mechanistic interpretability) and still care about it, but these days I'm a software/systems engineer first, with that ML background layered on top.`,
	siteNote: `This site is built with SvelteKit and Tailwind CSS in a Catppuccin Mocha theme, designed to feel like a focused window in a tiling window manager. I chose Svelte to skip the VDOM overhead while keeping boilerplate-free reactivity, and every page is prerendered to static HTML for instant loads.`,
	vimNote: `It's keyboard-driven if you want it to be: h/l switch sections, j/k move, Enter opens, ? shows help. Don't know vim? Just scroll, tap, and click — everything works the normal way too.`
};

// --- experience -----------------------------------------------------------
export const jobs: Entry[] = [
	{
		role: 'Software Development Engineer',
		company: 'Amazon Web Services · MSK (Apache Kafka)',
		period: 'August 2026 – Present',
		description:
			"Engineering on Amazon MSK, AWS's fully-managed Apache Kafka service — distributed streaming infrastructure run at scale."
	},
	{
		role: 'SDE Intern',
		company: 'Amazon Web Services · MSK-Connect',
		period: 'Summer 2025',
		description:
			'Shipped customer-facing automated limit-increase approvals and a daily Lambda that purges non-compliant log groups across every account in the service.'
	},
	{
		role: 'Data Science Intern',
		company: 'Bonafide / Pharmavite',
		period: 'Summer 2022',
		description:
			'Built an end-to-end ML pipeline forecasting customer LTV and CAC, with Snowflake tasks pushing results into a Looker dashboard for stakeholders.'
	}
];

export const research: Entry[] = [
	{
		role: 'Non-Euclidean Representation Learning',
		company: "Pe'er Lab @ Columbia",
		period: 'Jan 2025 – Aug 2025',
		description:
			'Core contributor to Manify, a non-Euclidean representation learning library (75+ stars). Implemented every curvature-estimation method with full tests and docs; now working on a follow-up characterizing the distribution of delta-hyperbolicity.'
	},
	{
		role: 'Database / Applied Causal Inference',
		company: 'Wu Lab @ Columbia',
		period: 'Oct 2024 – May 2025',
		description:
			'Implemented GPU-accelerated kNN mutual-information estimation over relational joins without materialization, for SUNA — a scalable causal confounder-discovery system.'
	},
	{
		role: 'Unsupervised Learning Theory / Agentic Data Analysis',
		company: 'Verma Lab @ Columbia',
		period: 'Jan 2024 – Jan 2025',
		description:
			'Explored dimensionality-reduction theory, then pivoted to agentic data analysis and optimized deployment of unsupervised algorithms in a web app.'
	},
	{
		role: 'Prior-Fitted Networks for EHR Data',
		company: 'ReAIM Lab @ Columbia',
		period: 'May 2024 – Oct 2025',
		description:
			'Adapted Prior-Fitted Networks (a transformer architecture for few-shot Bayesian inference) to EHR data by reworking the synthetic data-generation process.'
	}
];

// --- projects -------------------------------------------------------------
export const projects: Project[] = [
	{
		name: 'Manify',
		description:
			'Core contributor to this non-Euclidean representation learning library and paper. 75+ stars on GitHub.',
		tech: 'PyTorch · Differential Geometry · Representation Learning',
		link: 'https://github.com/pchlenski/manify'
	},
	{
		name: 'Ixion',
		description:
      'Cofounded Ixion Systems, a lab management/procurement platform for universities. We are in the process of onboarding 40+ labs across Columbia, and are currently in talks with other universities for expansion.',
		tech: 'Rust · NixOS · Fully self-hosted deployments',
		link: 'https://withixion.com/'
	},
	{
		name: 'CUDA Neural Network from Scratch',
		description:
			'A neural network implemented entirely in CUDA — no deep-learning or matmul libraries, just kernels.',
		tech: 'CUDA · GPUs · C++',
		link: 'https://github.com/DylanSatow/CudaNeuralNetwork'
	},
	{
		name: 'Nix Config',
		description: 'My multi-system Nix configuration for Mac and NixOS.',
		tech: 'Nix · NixOS',
		link: 'https://github.com/DylanSatow/nix-config'
	}
];

// --- music ----------------------------------------------------------------
export const music = {
	intro: `I am an avid jazz trumpet player, with decent experience across a wide variety of other instruments. I was previously a student of Don Sickler (Owner of Rudy Van Gelder studio and a former jazz messenger)`,
	band: {
		name: 'Noshows',
		url: 'https://noshowsband.com/',
		note: 'I am also the sole horn player for the band Noshows, an NYC based band with 350,000+ monthly listeners and several songs with stream numbers in the millions.'
	},
	instruments: ['Trumpet', 'Guitar', 'Wind Synths', 'Bass', 'Ocarina', 'Keyboard'],
	outro: `When time allows, you'll find me out in nature — camping is the other thing I never say no to.`
};

// --- about: tech & coursework ---------------------------------------------
export const skills = ['Go', 'Java', 'Scala', 'Python', 'C / C++', 'CUDA', 'Rust'];

export const gradCourses = [
	'COMS E6998 High Performance Machine Learning',
	'COMS E4776 Neural Networks',
	'COMS W4771 Machine Learning',
	'COMS W4774 Unsupervised Learning',
	'COMS W4705 Natural Language Processing',
	'MATH GU4041 Modern Algebra',
	'MATH GU4044 Modern Analysis'
];

// --- links ----------------------------------------------------------------
export const links = [
	{ name: 'GitHub', url: 'https://github.com/DylanSatow' },
	{ name: 'LinkedIn', url: 'https://linkedin.com/in/dylan-satow' },
	{ name: 'X (Twitter)', url: 'https://x.com/dylansatow' },
	{ name: 'Email', url: 'mailto:dylansatow531@gmail.com' }
];
