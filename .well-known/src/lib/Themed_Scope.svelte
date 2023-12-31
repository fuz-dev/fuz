<script lang="ts" context="module">
	let _id = 0;
</script>

<script lang="ts">
	import {get, writable, type Writable} from 'svelte/store';

	import {
		create_theme_style_html,
		render_theme_style,
		type Theme,
		set_theme,
		type Color_Scheme,
		set_color_scheme,
		get_theme,
		get_color_scheme,
	} from '$lib/theme.js';

	/**
	 * `Themed_Scope` is a variant of `Themed` that scopes its theme to one branch of the DOM.
	 *
	 * To sync the theme globally and persist to local storage, use `Themed`.
	 * There is some copied code between the two,
	 * but combining them was too complicated both internally and externally.
	 *
	 * This is implemented as a component instead of an action so it can write to the `<head>`.
	 * The main downside of the current implementation when scoped
	 * is it adds an extra element to the tree,
	 * though a more complicated API could be devised to accept an `Element` as a prop.
	 */

	/**
	 * A writable store containing a theme object.
	 * Defaults to the first default theme.
	 * Like `color_scheme`, the store reference is not reactive
	 * because it's set in context without a wrapper, use `{#key theme}` if it changes.
	 * @nonreactive
	 */
	export let selected_theme: Writable<Theme> = writable(get(get_theme()));
	set_theme(selected_theme);

	/**
	 * A writable store containing the active color scheme.
	 * Defaults to looking in localStorage and falls back to detecting with `prefers-color-scheme`.
	 * Like `theme`, the store reference is not reactive
	 * because it's set in context without a wrapper, use `{#key color_scheme}` if it changes.
	 * @nonreactive
	 */
	export let selected_color_scheme: Writable<Color_Scheme | null> = writable(
		get(get_color_scheme()),
	);
	set_color_scheme(selected_color_scheme);

	export let tagName = 'div';

	/**
	 * @readonly
	 */
	export let id = 'themed_' + _id++;
	/**
	 * @readonly
	 */
	export let style: string | null = null;
	/**
	 * @readonly
	 */
	export let theme_style_html: string | null = null;

	$: style = render_theme_style($selected_theme, {id, empty_default_theme: false});
	$: theme_style_html = style ? create_theme_style_html(style) : null;

	$: final_color__scheme =
		$selected_color_scheme === 'dark' || $selected_color_scheme === 'light'
			? $selected_color_scheme
			: !import.meta.env.SSR && matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light'; // fallback to best guess
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<svelte:head>
	{#if theme_style_html}{@html theme_style_html}{/if}
</svelte:head>

<svelte:element this={tagName} {id} class="themed" class:dark={final_color__scheme === 'dark'}>
	<slot
		{id}
		{style}
		{theme_style_html}
		theme={selected_theme}
		color_scheme={selected_color_scheme}
	/>
</svelte:element>
