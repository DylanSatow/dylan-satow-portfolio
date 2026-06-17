---
title: My New Website
date: "2026-06-17"
description: Rebuilding dylansatow.com on SvelteKit — prerendered, mobile-first, and styled like a focused window in a tiling WM.
tags: [SvelteKit, Svelte, Web Performance, Catppuccin]
---

# My New Website

Dylansatow.com has been freed from virtual DOMs and boilerplate, and
rebuilt around the simplicity and speed of Svelte.

This version is a ground-up redesign. The goals were narrow and stubborn: it should be
**fast**, it should be **mobile-first** rather than mobile-as-an-afterthought, and it should
feel like a proper terminal — specifically, a focused window in a tiling window manager.

## The stack

- **SvelteKit (Svelte 5)** with runes for clean, VDOM-free reactivity
- **Tailwind CSS v4** for visual consistency without a component-library tax
- **mdsvex** to render this very post from Markdown
- **Prerendering** — every page is static HTML on a CDN, so loads are effectively instant
- A self-hosted, subset **JetBrains Mono** (~31KB) with zero-CLS fallback metrics

## The design

The whole thing is styled as a focused tiling-WM window: a 2px Catppuccin Lavender border
on a darker crust backdrop, a `user@host:path` title bar, and a vim-style status line along
the bottom. Sharp corners — on purpose.

It's keyboard-driven if you want it: `h`/`l` switch sections, `j`/`k` move, `Enter` opens,
`?` shows help. And if you don't speak vim, everything scrolls, taps, and clicks exactly
like you'd expect — on every device.

## What's next

The follow-up I keep threatening to build: an actual TUI version of this site in
Go/Bubbletea, as faithful to the real thing as I can make it.
