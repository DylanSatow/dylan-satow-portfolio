---
title: My New Personal Website
date: 2025-10
slug: deslop
---

# My New Website

Dylansatow.com has been freed from bloated Virtual DOMs and endless boilerplate code
and has embraced the simplicity and speed of svelte.

I chose to avoid any component libraries, opting instead to write an initial svelte base manually and style it using claude code, which was
able to achieve a surprisingly nice aesthetic with Tailwind CSS.

The main tooling I used was:

- SvelteKit (Svelte 5) with runes for cleaner reactivity
- Tailwind CSS to avoid bloated component libraries while keeping visual consistency
- mdsvex as a handy markdown renderer for the blog section
- vite for builds
- sveltejs vercel adapter for vercel deployment (chosen for simplicity)

The design embraces my recent obsession with TUIs—I added vim keybinds (h/l/j/k navigation + Enter)
and styled everything to match my actual terminal setup, complete with Catppuccin Mocha Lavender accents.
I even tried to replicate the scrolling behavior of Golang's Bubbletea Bubbles/List component.
The result feels like a proper terminal application, and I'm quite happy with it.

The followup project I'm planning is to implement an actual TUI version of the site with Go/Bubbletea as faithfully as I can as a fun exercise. 


