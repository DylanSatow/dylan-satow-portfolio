<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { sections, activeIndex } from '$lib/nav';

	// Vim-style keys are PURELY ADDITIVE — every link is reachable with Tab/Enter
	// regardless, so keyboard users never depend on these. Guarded against inputs
	// and modifier combos so they don't hijack browser/AT shortcuts.

	let helpOpen = $state(false);
	let lastFocused: HTMLElement | null = null;
	let dialogEl: HTMLDivElement | null = $state(null);

	function navItems(): HTMLElement[] {
		return Array.from(document.querySelectorAll<HTMLElement>('[data-nav-item]'));
	}

	function moveFocus(dir: 1 | -1) {
		const list = navItems();
		const main = document.getElementById('content');
		if (!list.length) {
			main?.scrollBy({ top: dir * 140, behavior: 'smooth' });
			return;
		}
		const cur = document.activeElement as HTMLElement | null;
		const at = cur ? list.indexOf(cur) : -1;
		const next = at === -1 ? (dir === 1 ? 0 : list.length - 1) : at + dir;
		const clamped = Math.min(list.length - 1, Math.max(0, next));
		list[clamped].focus();
		list[clamped].scrollIntoView({ block: 'nearest' });
	}

	function switchSection(dir: 1 | -1) {
		const i = activeIndex(page.url.pathname);
		const target = i + dir;
		if (target >= 0 && target < sections.length) goto(sections[target].path);
	}

	function openHelp() {
		lastFocused = document.activeElement as HTMLElement;
		helpOpen = true;
		queueMicrotask(() => dialogEl?.focus());
	}
	function closeHelp() {
		helpOpen = false;
		lastFocused?.focus();
	}

	function onKeydown(e: KeyboardEvent) {
		if (e.metaKey || e.ctrlKey || e.altKey) return;
		const t = e.target as HTMLElement | null;
		if (t && (t.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(t.tagName))) return;

		if (helpOpen) {
			if (e.key === 'Escape' || e.key === '?' || e.key === 'q') closeHelp();
			return;
		}

		switch (e.key) {
			case '?':
				e.preventDefault();
				openHelp();
				break;
			case 'h':
				switchSection(-1);
				break;
			case 'l':
				switchSection(1);
				break;
			case 'j':
				e.preventDefault();
				moveFocus(1);
				break;
			case 'k':
				e.preventDefault();
				moveFocus(-1);
				break;
		}
	}

	const bindings = [
		{ keys: 'h  l', desc: 'switch section (left / right)' },
		{ keys: 'j  k', desc: 'move down / up' },
		{ keys: '↵', desc: 'open focused item' },
		{ keys: 'Tab', desc: 'cycle every link (always works)' },
		{ keys: '?', desc: 'toggle this help' },
		{ keys: 'Esc', desc: 'close help' }
	];
</script>

<svelte:window onkeydown={onKeydown} />

{#if helpOpen}
	<!-- backdrop: click to dismiss. Keyboard dismissal is handled globally (Esc)
	     and by the focusable close button below, so this div is presentational. -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		class="fixed inset-0 z-40 grid place-items-center bg-backdrop/80 p-4 backdrop-blur-[1px]"
		role="presentation"
		onclick={closeHelp}
	>
		<div
			bind:this={dialogEl}
			class="w-full max-w-md border-2 border-frame bg-window shadow-xl outline-none"
			role="dialog"
			aria-modal="true"
			aria-label="Keyboard shortcuts"
			tabindex="-1"
			onclick={(e) => e.stopPropagation()}
		>
			<div
				class="flex items-center justify-between border-b border-border bg-panel px-4 py-2 text-sm"
			>
				<span class="text-accent-2">[?] keybindings</span>
				<button
					class="text-fg-muted hover:text-accent"
					onclick={closeHelp}
					aria-label="Close help">esc</button
				>
			</div>
			<dl class="space-y-2 p-4 text-sm">
				{#each bindings as b}
					<div class="flex items-baseline gap-4">
						<dt class="w-20 shrink-0 font-semibold tracking-wide text-accent">{b.keys}</dt>
						<dd class="text-fg-muted">{b.desc}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
{/if}
