---
title: Building with Svelte 5
date: 2024-01
slug: building-with-svelte-5
---

# Building with Svelte 5

Svelte 5 introduces runes, a new way to handle reactivity that makes your code more explicit and powerful.

## What are Runes?

Runes are special functions that tell Svelte how to handle reactive state. Instead of relying on assignments, you use `$state()`, `$derived()`, and `$effect()` to be explicit about reactivity.

## Why This Matters

This new approach gives you more control and makes the reactivity model more predictable, especially in complex applications.
