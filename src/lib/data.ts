export const jobs = [
	{ role: 'SDE Intern', company: 'Amazon Web Services | MSK-Connect Team', period: 'Summer 2025',
		description: 'Implmeneted customer-facing automated limit increase approvals and a daily-executing Lambda to purge non-compliant log groups for every single account in our service.'
	},
	{ role: 'Data Science Intern', company: 'Pharmavite', period: 'Summer 2022', description: 'Created a full ML pipeline to forecast customer LTVs and CACs. Created Snowflake tasks to automatically push results to a LookerBI dashboard for stakeholders. Too much data engineering.' }
];

export const research = [
	{ role: 'Non-Euclidean Representation Learning', company: "Pe'er Lab @ Columbia", period: 'Jan 2025 - Aug 2025', description: 'Coauthor/contributor to non-euclidean representation learning library w/ 60+ stars on github. Implemented all curvature estimation methods & corresponding unit tests/docs. Working on followup paper characterizing the distribution of the delta hyperbolicity.' },
	{ role: 'Database/Applied Causal Inference', company: "Wu Lab @ Columbia", period: 'Oct 2024 - May 2025',
		description: 'Implemented GPU accelerated kNN-based mutual information calculation over relational joins without materialization for SUNA, a scalable causal confounder discovery system.'},
	{ role: 'Unsupervised Learning Theory/Agentic Data Analysis', company: "Verma Lab @ Columbia", period: 'Jan 2024 - Jan 2025', description: 'Explored dimensionality reduction theoretical bounds. Realized I am not cut out to be a theoretician and began working on agentic data analysis and optimized deployment of unsueprvised learning algorithms in a webapp.' },
	{ role: 'Prior Fitted Networks applied to EHR data (Specialized transformer architecture for few-shot Bayesian inference)', company: "ReAIM Lab @ Columbia", period: 'May 2024 - Oct 2025', description: 'Modified PFNs to optimize for EHR data (altered synthetic data generation process)' },
];

export const projects = [
	{ name: 'Manify', description: 'Non-Euclidean Representation Learning Library/Paper. 60+ stars on Github', tech: 'Pytorch, Differential Geometry, Representation Learning', link: 'https://github.com/pchlenski/manify' },
	{ name: 'Nix Config', description: 'My beautiful Multisystem Nix Config', tech: 'NixOS', link: 'https://github.com/DylanSatow/nix-config' },
	{ name: 'Cuda Neural Network from Scratch', description: 'Cuda neural network implemented entirely from scratch using no deep learning/matmul libraries', tech: 'CUDA, GPUs', link: 'https://github.com/DylanSatow/CudaNeuralNetwork' },
	{ name: 'Ixion', description: 'Co-developed withixion.com, an AI-powered lab management software currently being used/adopted by 3 Columbia University labs.', tech: 'CUDA, GPUs', link: 'https://withixion.com/' },
];

export const blogPosts = [
	{ title: 'dylansatow.com is finally de-slopified', date: '2025-10', slug: 'deslop' },
];

export const skills = ['Golang', 'Python', 'Pytorch', 'C/C++', 'Cuda'];

export const gradCourses = [
	'COMS E6998 High Performance Machine Learning',
	'COMS E4776 Neural Networks',
	'COMS W4771 Machine Learning',
	'COMS W4774 Unsupervised Learning',
	'COMS W4705 Natural Language Processing',
	'MATH GU4041 Modern Algebra',
	'MATH GU4044 Modern Analysis',
];
