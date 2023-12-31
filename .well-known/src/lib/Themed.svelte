<script lang="ts" context="module">
	let mounted = false;
</script>

<script lang="ts">
	import {onDestroy, onMount} from 'svelte';
	import {writable, type Writable} from 'svelte/store';

	import {
		create_theme_style_html,
		render_theme_style,
		type Theme,
		set_theme,
		create_theme_setup_script,
		type Color_Scheme,
		set_color_scheme,
		load_color_scheme as default_load_color_scheme,
		save_color_scheme as default_save_color_scheme,
		sync_color_scheme as default_sync_color_scheme,
		save_theme as default_save_theme,
		load_theme as default_load_theme,
		THEME_COLOR,
	} from '$lib/theme.js';
	import {DEFAULT_THEME} from '$lib/themes.js';

	// TODO improve this so it works without `unsafe-inline` in the CSP - hash/nonce?

	// In dev mode only, warn about misuse of the singleton `Themed`.
	// Use `Themed_Scope` for non-global themes and color schemes.
	if (import.meta.env.DEV) {
		onMount(() => {
			if (mounted) {
				console.warn('more than one Themed was mounted, use Themed_Scope if this was intended'); // eslint-disable-line no-console
			}
			mounted = true;
		});
		onDestroy(() => {
			mounted = false;
		});
	}

	/**
	 * `Themed` adds global color scheme and theme support to the page.
	 * It also sets writable stores containing the theme and color scheme in the Svelte context.
	 *
	 * To scope the theme to only a part of the page, use `Themed_Scope`.
	 * There is some copied code between the two,
	 * but combining them was too complicated both internally and externally.
	 */

	export let sync_color_scheme = default_sync_color_scheme;
	export let load_color_scheme = default_load_color_scheme;
	export let save_color_scheme = default_save_color_scheme;
	export let load_theme = default_load_theme;
	export let save_theme = default_save_theme;

	/**
	 * A writable store containing a theme object.
	 * Defaults to the first default theme.
	 * Like `color_scheme`, the store reference is not reactive
	 * because it's set in context without a wrapper, use `{#key theme}` if it changes.
	 * @nonreactive
	 */
	export let selected_theme: Writable<Theme> = writable(load_theme());
	set_theme(selected_theme);

	/**
	 * A writable store containing the active color scheme.
	 * Defaults to looking in localStorage and falls back to detecting with `prefers-color-scheme`.
	 * Like `theme`, the store reference is not reactive
	 * because it's set in context without a wrapper, use `{#key color_scheme}` if it changes.
	 * @nonreactive
	 */
	export let selected_color_scheme: Writable<Color_Scheme | null> = writable(load_color_scheme());
	set_color_scheme(selected_color_scheme);

	export let color_scheme_fallback: Color_Scheme | undefined = undefined;
	export let color_scheme_css: string | undefined = undefined;
	export let theme_color: string | undefined = undefined;

	/**
	 * @readonly
	 */
	export let style: string | null = null;
	/**
	 * @readonly
	 */
	export let theme_style_html: string | null = null;
	/**
	 * @readonly
	 */
	export let theme_setup_script: string | null = null;

	$: selected_theme_name = $selected_theme.name;
	$: style =
		selected_theme_name === DEFAULT_THEME.name // TODO @multiple proper equality check, won't work when we allow editing, need an id or unique names and a deep equality check
			? null
			: render_theme_style($selected_theme);
	$: theme_style_html = style ? create_theme_style_html(style) : null;
	$: theme_setup_script = create_theme_setup_script(color_scheme_fallback);

	let c1 = 0; // hackily skip the first call
	$: if (c1++) sync_color_scheme?.($selected_color_scheme);
	let c2 = 0; // hackily skip the first call
	$: if (c2++) save_color_scheme?.($selected_color_scheme);

	let t = 0; // hackily skip the first call
	$: if (t++) save_theme?.($selected_theme);

	// TODO this is messy and probably wrong -- do we want both values?
	// or only one if there's a defined fallback? how to sync with the setup script?
	$: final_color_scheme_css =
		color_scheme_css ??
		(color_scheme_fallback === 'dark' || color_scheme_fallback === 'light'
			? color_scheme_fallback
			: !import.meta.env.SSR && matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark light'
				: 'light dark');
	$: final_theme_color = theme_color ?? THEME_COLOR;
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<svelte:head>
	{#if theme_style_html}{@html theme_style_html}{/if}
	{#if theme_setup_script}
		<meta name="color-scheme" content={final_color_scheme_css} />
		<meta name="theme-color" content={final_theme_color} />
		<svelte:element this="script">{@html theme_setup_script}</svelte:element>
	{/if}
</svelte:head>

<slot {style} {theme_style_html} {theme_setup_script} {selected_theme} {selected_color_scheme} />
