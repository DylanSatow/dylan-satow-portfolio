<script lang="ts">
	let currentSection = $state('about');
	
	const experiences = [
		{ role: 'Senior Developer', company: 'Tech Corp', period: '2022-Present', description: 'Building scalable web applications' },
		{ role: 'Developer', company: 'StartupXYZ', period: '2020-2022', description: 'Full-stack development' }
	];
	
	const projects = [
		{ name: 'terminal-ui', description: 'A minimalist terminal UI library', tech: 'TypeScript, Svelte', link: '#' },
		{ name: 'dotfiles', description: 'My personal configuration files', tech: 'Bash, Lua', link: '#' }
	];
	
	const blogPosts = [
		{ title: 'Building with Svelte 5', date: '2024-01', content: '# Building with Svelte 5\n\nSvelte 5 introduces runes, a new way to handle reactivity...' },
		{ title: 'Terminal Aesthetics', date: '2023-12', content: '# Terminal Aesthetics\n\nWhy I love the terminal look in web design...' }
	];
	
	let selectedPost = $state(null);
	
	function renderMarkdown(md: string) {
		return md
			.replace(/^# (.*$)/gim, '<h1 class="text-xl text-primary mb-4">$1</h1>')
			.replace(/^## (.*$)/gim, '<h2 class="text-lg text-primary mb-3">$1</h2>')
			.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary">$1</strong>')
			.replace(/\n\n/g, '</p><p class="mb-4">');
	}
</script>

<!-- Full viewport terminal with minimal padding -->
<div class="min-h-screen bg-background text-foreground p-2 md:p-4">
	<div class="h-[calc(100vh-1rem)] md:h-[calc(100vh-2rem)] border-2 border-border bg-card flex flex-col">
		<!-- Minimal terminal header -->
		<div class="flex items-center gap-2 px-4 py-2 bg-secondary border-b border-border shrink-0">
			<div class="flex gap-1.5">
				<div class="w-3 h-3 rounded-full bg-[#f38ba8]"></div>
				<div class="w-3 h-3 rounded-full bg-[#f9e2af]"></div>
				<div class="w-3 h-3 rounded-full bg-[#a6e3a1]"></div>
			</div>
			<span class="text-xs text-muted-foreground ml-2">~/portfolio</span>
		</div>
		
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
				<div class="space-y-4">
					<div>
						<span class="text-muted-foreground">$</span>
						<span class="text-foreground ml-2">cat about.txt</span>
					</div>
					<p class="leading-relaxed text-foreground">
						Hey! I'm a developer who loves building things with code.
						I'm passionate about clean code, terminal aesthetics, and creating
						delightful user experiences.
					</p>
					<div class="mt-6">
						<span class="text-muted-foreground">$</span>
						<span class="text-foreground ml-2">cat skills.txt</span>
					</div>
					<div class="flex flex-wrap gap-2 mt-2">
						{#each ['TypeScript', 'Svelte', 'React', 'Node.js', 'Rust'] as skill}
							<span class="text-primary">{skill}</span>
						{/each}
					</div>
				</div>
			{:else if currentSection === 'experience'}
				<div class="space-y-6">
					<div>
						<span class="text-muted-foreground">$</span>
						<span class="text-foreground ml-2">cat experience/*</span>
					</div>
					{#each experiences as exp}
						<div class="border-l-2 border-primary pl-4">
							<div class="text-primary">{exp.role}</div>
							<div class="text-muted-foreground text-sm">{exp.company} • {exp.period}</div>
							<div class="mt-1 text-foreground">{exp.description}</div>
						</div>
					{/each}
				</div>
			{:else if currentSection === 'projects'}
				<div class="space-y-6">
					<div>
						<span class="text-muted-foreground">$</span>
						<span class="text-foreground ml-2">ls projects/</span>
					</div>
					{#each projects as project}
						<div class="border-l-2 border-primary pl-4">
							<a href={project.link} class="text-primary hover:underline">{project.name}</a>
							<div class="text-foreground mt-1">{project.description}</div>
							<div class="text-muted-foreground text-sm mt-1">{project.tech}</div>
						</div>
					{/each}
				</div>
			{:else if currentSection === 'blog'}
				<div class="space-y-6">
					{#if !selectedPost}
						<div>
							<span class="text-muted-foreground">$</span>
							<span class="text-foreground ml-2">ls blog/</span>
						</div>
						{#each blogPosts as post}
							<button 
								onclick={() => selectedPost = post}
								class="block border-l-2 border-primary pl-4 text-left hover:bg-secondary/30 w-full py-2"
							>
								<div class="text-primary">{post.title}</div>
								<div class="text-muted-foreground text-sm">{post.date}</div>
							</button>
						{/each}
					{:else}
						<div>
							<button onclick={() => selectedPost = null} class="text-muted-foreground hover:text-primary">
								← back
							</button>
						</div>
						<div class="prose prose-invert max-w-none">
							{@html renderMarkdown(selectedPost.content)}
						</div>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>
