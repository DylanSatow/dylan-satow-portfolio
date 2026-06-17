<script lang="ts">
	import Prompt from '$lib/components/Prompt.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { music } from '$lib/data';
</script>

<Seo
	title="Music — Dylan Satow"
	description="Dylan Satow plays jazz trumpet and a handful of other instruments, including with the NYC band Noshows."
/>

<div class="space-y-8">
	<section class="space-y-2">
		<Prompt heading={1} command="cat music/about.txt" />
		<div class="space-y-3 border-l-2 border-border pl-4 text-fg">
			<p>{music.intro}</p>
			<p>
				{music.band.note.split(music.band.name)[0]}<a
					href={music.band.url}
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent underline decoration-from-font underline-offset-2 hover:decoration-2"
					>{music.band.name}</a
				>{music.band.note.split(music.band.name)[1]}
			</p>
		</div>
	</section>

	<section class="space-y-2">
		<Prompt command="ls music/instruments/" />
		<ul class="flex flex-wrap gap-x-5 gap-y-1 border-l-2 border-border pl-4">
			{#each music.instruments as inst}
				<li class="text-accent">{inst}</li>
			{/each}
		</ul>
	</section>

	<section class="space-y-2">
		<Prompt command="cat music/offline.txt" />
		<p class="border-l-2 border-border pl-4 text-fg-muted">{music.outro}</p>
	</section>
</div>
