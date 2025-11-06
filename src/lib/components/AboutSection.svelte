<script lang="ts">
	import { skills, gradCourses, links } from '$lib/data';

	interface Props {
		selectedIndex: number;
		onSelect: (index: number) => void;
	}

	let { selectedIndex, onSelect }: Props = $props();
</script>

<div class="space-y-4">
	<div class="space-y-2">
		<div>
			<span class="text-muted-foreground">$</span>
			<span class="text-foreground ml-2">cat about/about_me.txt</span>
		</div>
		<div
			role="button"
			tabindex="-1"
			onclick={() => onSelect(0)}
			class="border-l-2 border-transparent pl-4 cursor-pointer {selectedIndex === 0 ? 'bg-secondary/50 !border-primary' : ''}"
		>
			<p class="leading-relaxed text-foreground">
				I'm Dylan Satow, a 4th year at Columbia University studying Math & CS. I am quite passionate about ML research
				(my recent interests have been non-euclidean representation learning and mechanistic interpretability), although
				I am also very into traditional software. I have recently began the process of joining the NixOS cult, and have increasingly been spending
				my time working on low-level projects/courses.
				<br>
				<br>
				I am also an avid jazz trumpet player/multi-instrumentalist. My primary instruments are trumpet, guitar, EWI, bass, ocarina, and keys
				with my proficiency in each falling roughly in that order. I play trumpet in the band Noshows with my brother, and have had the privilege of playing
				in a bunch of notable venues in NYC. Lastly, when time permits it, I am a big nature/camping lover.
			</p>

		</div>
	</div>

	<div class="space-y-2">
		<div>
			<span class="text-muted-foreground">$</span>
			<span class="text-foreground ml-2">cat about/about_this_website.txt</span>
		</div>
		<div
			role="button"
			tabindex="-1"
			onclick={() => onSelect(1)}
			class="border-l-2 border-transparent pl-4 cursor-pointer {selectedIndex === 1 ? 'bg-secondary/50 !border-primary' : ''}"
		>
			<p class="leading-relaxed text-foreground">
				This site is written using SvelteKit and styled using tailwind-CSS with a Catppuccin Mocha/Lavendar theme (All credit for any CSS/mobile view goes to claude code).
				I chose svelte to avoid the bloat of a VDOM while keeping easy, boilerplate-free reactivity.
				<br>
				<br>
				I have added vim motions to the site (if you don't know what that means, good on you for having a life), so h/l/j/k to your hearts content.
				Just remember to disable Vimium or your favorite browser vim extension to enjoy.
			</p>
		</div>
	</div>

	<div class="space-y-2 mt-6">
		<div>
			<span class="text-muted-foreground">$</span>
			<span class="text-foreground ml-2">cat about/what_im_using_right_now.txt</span>
		</div>
		<div
			role="button"
			tabindex="-1"
			onclick={() => onSelect(2)}
			class="border-l-2 border-transparent pl-4 cursor-pointer {selectedIndex === 2 ? 'bg-secondary/50 !border-primary' : ''}"
		>
			<div class="flex flex-wrap gap-6">
				{#each skills as skill}
					<span class="text-primary">{skill}</span>
				{/each}
			</div>
		</div>
	</div>

	<div class="space-y-2 mt-6">
		<div>
			<span class="text-muted-foreground">$</span>
			<span class="text-foreground ml-2">cat about/grad_courses.txt</span>
		</div>
		<div
			role="button"
			tabindex="-1"
			onclick={() => onSelect(3)}
			class="border-l-2 border-transparent pl-4 cursor-pointer {selectedIndex === 3 ? 'bg-secondary/50 !border-primary' : ''}"
		>
			<div class="flex flex-wrap gap-6">
				{#each gradCourses as course}
					<span class="text-primary">{course}</span>
				{/each}
			</div>
		</div>
	</div>

	<div class="space-y-2 mt-6">
		<div>
			<span class="text-muted-foreground">$</span>
			<span class="text-foreground ml-2">cat about/links.txt</span>
		</div>
		<div
			role="button"
			tabindex="-1"
			onclick={() => onSelect(4)}
			class="border-l-2 border-transparent pl-4 cursor-pointer {selectedIndex === 4 ? 'bg-secondary/50 !border-primary' : ''}"
		>
			<div class="flex flex-wrap gap-6">
				{#each links as link}
					<a href={link.url} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">{link.name}</a>
				{/each}
			</div>
		</div>
	</div>
</div>
