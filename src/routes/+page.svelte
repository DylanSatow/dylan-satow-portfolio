<script lang="ts">
	import Prompt from '$lib/components/Prompt.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { about, skills, gradCourses, links } from '$lib/data';

	const personLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Dylan Satow',
		url: 'https://dylansatow.com',
		jobTitle: 'Software Engineer',
		worksFor: { '@type': 'Organization', name: 'Amazon Web Services' },
		alumniOf: { '@type': 'CollegeOrUniversity', name: 'Columbia University' },
		knowsAbout: ['Distributed Systems', 'Apache Kafka', 'Software Engineering', 'Machine Learning'],
		sameAs: [
			'https://github.com/DylanSatow',
			'https://linkedin.com/in/dylan-satow',
			'https://x.com/dylansatow'
		]
	};
</script>

<Seo
	title="Dylan Satow — Software Engineer @ AWS"
	description="Dylan Satow — software engineer at AWS working on Amazon MSK (Apache Kafka) and distributed systems, with a background in ML research. Columbia Math & CS grad."
/>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(personLd)}</script>`}
</svelte:head>

<div class="space-y-8">
	<section class="space-y-2">
		<Prompt heading={1} command="cat about/bio.txt" />
		<p class="border-l-2 border-border pl-4 text-fg">{about.bio}</p>
	</section>

	<section class="space-y-2">
		<Prompt command="cat about/this_site.txt" />
		<div class="space-y-3 border-l-2 border-border pl-4 text-fg">
			<p>{about.siteNote}</p>
			<p class="text-fg-muted">{about.vimNote}</p>
		</div>
	</section>

	<section class="space-y-2">
		<Prompt command="cat about/stack.txt" />
		<ul class="flex flex-wrap gap-x-5 gap-y-1 border-l-2 border-border pl-4">
			{#each skills as skill}
				<li class="text-accent">{skill}</li>
			{/each}
		</ul>
	</section>

	<section class="space-y-2">
		<Prompt command="ls about/grad_coursework/" />
		<ul class="flex flex-col gap-1 border-l-2 border-border pl-4">
			{#each gradCourses as course}
				<li class="text-fg">{course}</li>
			{/each}
		</ul>
	</section>

	<section class="space-y-2">
		<Prompt command="cat about/links.txt" />
		<ul class="flex flex-wrap gap-x-5 gap-y-1 border-l-2 border-border pl-4">
			{#each links as link}
				<li>
					<a
						href={link.url}
						target={link.url.startsWith('http') ? '_blank' : undefined}
						rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
						class="text-path underline decoration-from-font underline-offset-2 hover:text-accent"
					>
						{link.name}
					</a>
				</li>
			{/each}
		</ul>
	</section>
</div>
