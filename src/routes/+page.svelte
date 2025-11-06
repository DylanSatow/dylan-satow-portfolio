<script lang="ts">
	import TerminalHeader from '$lib/components/TerminalHeader.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ExperienceSection from '$lib/components/ExperienceSection.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import BlogSection from '$lib/components/BlogSection.svelte';
	import { jobs, research, projects, blogPosts } from '$lib/data';

	const sections = ['about', 'experience', 'projects', 'blog'] as const;
	let currentSection = $state<typeof sections[number]>('about');
	let selectedIndex = $state(0);

	// Get max items for current section
	function getMaxItems(): number {
		switch (currentSection) {
			case 'about':
				return 5; // about_me, about_website, skills, grad_courses, links
			case 'experience':
				return jobs.length + research.length;
			case 'projects':
				return projects.length;
			case 'blog':
				return blogPosts.length;
			default:
				return 0;
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
			return;
		}

		const currentIndex = sections.indexOf(currentSection);
		const maxItems = getMaxItems();

		if (e.key === 'h' && currentIndex > 0) {
			currentSection = sections[currentIndex - 1];
			selectedIndex = 0;
		} else if (e.key === 'l' && currentIndex < sections.length - 1) {
			currentSection = sections[currentIndex + 1];
			selectedIndex = 0;
		} else if (e.key === 'j' && maxItems > 0 && selectedIndex < maxItems - 1) {
			selectedIndex++;
		} else if (e.key === 'k' && maxItems > 0 && selectedIndex > 0) {
			selectedIndex--;
		} else if (e.key === 'Enter') {
			if (currentSection === 'projects' && selectedIndex < projects.length) {
				window.open(projects[selectedIndex].link, '_blank');
			} else if (currentSection === 'blog' && selectedIndex < blogPosts.length) {
				window.location.href = `/blog/${blogPosts[selectedIndex].slug}`;
			}
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- Full viewport terminal with minimal padding -->
<div class="min-h-screen bg-background text-foreground p-1 sm:p-2 md:p-4">
	<div class="min-h-[calc(100vh-0.5rem)] sm:min-h-[calc(100vh-1rem)] md:h-[calc(100vh-2rem)] border sm:border-2 border-border bg-card flex flex-col">
		<TerminalHeader />

		<!-- Terminal content area with overflow -->
		<div class="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6">
			<!-- Simple navigation -->
			<div class="mb-4 sm:mb-6">
				<span class="text-muted-foreground">$</span>
				<span class="text-foreground ml-2">ls</span>
				<div class="mt-2 flex gap-2 sm:gap-3 md:gap-4 flex-wrap">
					<button
						onclick={() => currentSection = 'about'}
						class="text-primary hover:underline {currentSection === 'about' ? 'underline' : ''} py-2 px-1 min-h-[44px] flex items-center"
					>
						about/
					</button>
					<button
						onclick={() => currentSection = 'experience'}
						class="text-primary hover:underline {currentSection === 'experience' ? 'underline' : ''} py-2 px-1 min-h-[44px] flex items-center"
					>
						experience/
					</button>
					<button
						onclick={() => currentSection = 'projects'}
						class="text-primary hover:underline {currentSection === 'projects' ? 'underline' : ''} py-2 px-1 min-h-[44px] flex items-center"
					>
						projects/
					</button>
					<button
						onclick={() => currentSection = 'blog'}
						class="text-primary hover:underline {currentSection === 'blog' ? 'underline' : ''} py-2 px-1 min-h-[44px] flex items-center"
					>
						blog/
					</button>
				</div>
			</div>
			
			<!-- Simplified content sections -->
			{#if currentSection === 'about'}
				<AboutSection {selectedIndex} />
			{:else if currentSection === 'experience'}
				<ExperienceSection {selectedIndex} />
			{:else if currentSection === 'projects'}
				<ProjectsSection {selectedIndex} />
			{:else if currentSection === 'blog'}
				<BlogSection {selectedIndex} />
			{/if}
		</div>
	</div>
</div>
