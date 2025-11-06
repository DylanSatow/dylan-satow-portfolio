<script lang="ts">
	import { skills } from '$lib/data';

	interface Props {
		selectedIndex: number;
	}

	let { selectedIndex }: Props = $props();
</script>

<div class="space-y-4">
	<div class="border-l-2 border-transparent pl-4 {selectedIndex === 0 ? 'bg-secondary/50 !border-primary' : ''}">
		<div>
			<span class="text-muted-foreground">$</span>
			<span class="text-foreground ml-2">cat about_me.txt</span>
		</div>
		<p class="leading-relaxed text-foreground">
			I'm Dylan, a senior at Columbia University. I'm super into broadening my horizons in both math and computer science, with my current interests being Mechanistic Interpretability and Representation Learning. I also love more general CS/Software Engineering (shoutout NixOS), and have recently gotten much more into high performance computing. I am also an avid jazz trumpet player/multi-instrumentalist, with experience playing at many notable venues in NYC
		</p>
	</div>

	<div class="border-l-2 border-transparent pl-4 {selectedIndex === 1 ? 'bg-secondary/50 !border-primary' : ''}">
		<div>
			<span class="text-muted-foreground">$</span>
			<span class="text-foreground ml-2">cat about_this_website.txt</span>
		</div>
		<p class="leading-relaxed text-foreground">
			This site is written using SvelteKit and styled using straight CSS with a Catppuccin theme (All credit for any CSS goes to claude code).
			I have added vim motions to the site (if you don't know what that means, good on you for having a life), so h/l/j/k to your hearts content.
			Just remember to disable Vimium or your favorite browser vim extension to enjoy.
		</p>
	</div>

	<div class="border-l-2 border-transparent pl-4 mt-6 {selectedIndex === 2 ? 'bg-secondary/50 !border-primary' : ''}">
		<div>
			<span class="text-muted-foreground">$</span>
			<span class="text-foreground ml-2">cat what_im_using_right_now.txt</span>
		</div>
		<div class="flex flex-wrap gap-2 mt-2">
			{#each skills as skill}
				<span class="text-primary">{skill}</span>
			{/each}
		</div>
	</div>
</div>
