<script lang="ts">
	import TerminalHeader from '$lib/components/TerminalHeader.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ExperienceSection from '$lib/components/ExperienceSection.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import BlogSection from '$lib/components/BlogSection.svelte';

	const sections = ['about', 'experience', 'projects', 'blog'] as const;
	let currentSection = $state<typeof sections[number]>('about');

	$effect(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
				return;
			}

			const currentIndex = sections.indexOf(currentSection);

			if (e.key === 'h' && currentIndex > 0) {
				currentSection = sections[currentIndex - 1];
			} else if (e.key === 'l' && currentIndex < sections.length - 1) {
				currentSection = sections[currentIndex + 1];
			}
		}

		window.addEventListener('keydown', handleKeydown);

		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<!-- Full viewport terminal with minimal padding -->
<div class="min-h-screen bg-background text-foreground p-2 md:p-4">
	<div class="h-[calc(100vh-1rem)] md:h-[calc(100vh-2rem)] border-2 border-border bg-card flex flex-col">
		<TerminalHeader />

		<!-- Terminal content area with overflow -->
		<div class="flex-1 overflow-y-auto p-4 md:p-6">
			<!-- Simple navigation -->
			<div class="mb-6">
				<span class="text-muted-foreground">$</span>
				<span class="text-foreground ml-2">ls</span>
				<div class="mt-2 flex gap-4 flex-wrap">
					<button 
						onclick={() => currentSection = 'about'} 
						class="text-primary hover:underline {currentSection === 'about' ? 'underline' : ''}"
					>
						about.txt
					</button>
					<button 
						onclick={() => currentSection = 'experience'} 
						class="text-primary hover:underline {currentSection === 'experience' ? 'underline' : ''}"
					>
						experience/
					</button>
					<button 
						onclick={() => currentSection = 'projects'} 
						class="text-primary hover:underline {currentSection === 'projects' ? 'underline' : ''}"
					>
						projects/
					</button>
					<button 
						onclick={() => currentSection = 'blog'} 
						class="text-primary hover:underline {currentSection === 'blog' ? 'underline' : ''}"
					>
						blog/
					</button>
				</div>
			</div>
			
			<!-- Simplified content sections -->
			{#if currentSection === 'about'}
				<AboutSection />
			{:else if currentSection === 'experience'}
				<ExperienceSection />
			{:else if currentSection === 'projects'}
				<ProjectsSection />
			{:else if currentSection === 'blog'}
				<BlogSection />
			{/if}
		</div>
	</div>
</div>
