<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	import type {Readable} from 'svelte/store';

	import {get_theme, type Theme} from '$lib/theme.js';
	import {default_themes} from '$lib/themes.js';
	import {swallow} from '$lib/swallow.js';

	const dispatch = createEventDispatcher<{select: Theme; edit: Theme}>();

	export let selected_theme: Readable<Theme | null> = get_theme();
	export let themes: Theme[] = default_themes;
	export let enable_editing = false;
	export let select: ((theme: Theme) => void | boolean) | null = (theme) => {
		$selected_theme = theme;
	};

	$: selected_theme_name = $selected_theme?.name;
</script>

<menu class="theme_input">
	{#each themes as theme (theme.name)}
		<!-- TODO @multiple proper equality check, won't work when we allow editing, need an id or unique names and a deep equality check -->
		{@const selected = theme.name === selected_theme_name}
		<li role="none">
			<button
				type="button"
				class="theme_button"
				role="menuitemradio"
				aria-label="{theme.name} theme"
				aria-checked={selected}
				class:selected
				on:click={(e) => {
					swallow(e);
					if (select?.(theme) !== false) {
						dispatch('select', theme);
					}
				}}
			>
				{theme.name}
			</button>
			{#if enable_editing}
				<button
					type="button"
					class="icon_button plain"
					on:click={(e) => {
						swallow(e);
						dispatch('edit', theme);
					}}>•••</button
				>
			{/if}
		</li>
	{/each}
</menu>

<style>
	.theme_input {
		padding-left: 0; /* allow nesting in .prose */
	}
	.theme_button {
		flex: 1;
	}
	li {
		display: flex; /* allow nesting in .prose */
		list-style: none; /* allow nesting in .prose */
	}
</style>
