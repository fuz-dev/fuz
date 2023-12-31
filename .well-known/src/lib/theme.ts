import {getContext, setContext} from 'svelte';
import type {Writable} from 'svelte/store';

import {default_variables} from '$lib/variables.js';
import {default_themes} from '$lib/themes.js'; // TODO shoudln't be a dep, see usage below

// TODO more flavored types? zod?

// TODO this is more like `Color_Scheme_Setting`, because `Color_Scheme` is an arbitrary string if it means `color-scheme` - https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
export type Color_Scheme = 'dark' | 'light' | 'auto';

export const color_schemes: Color_Scheme[] = ['light', 'auto', 'dark'];

export const THEME_COLOR = '#257e25'; // same as `--color_2`

export const sync_color_scheme = (color_scheme: Color_Scheme | null): void => {
	if (import.meta.env.SSR) return;
	if (
		color_scheme === 'dark' ||
		(color_scheme !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
};
export const COLOR_SCHEME_STORAGE_KEY = 'color-scheme';
// TODO @multiple refactor, probably with a storage util
export const save_color_scheme = (
	color_scheme: Color_Scheme | null,
	key = COLOR_SCHEME_STORAGE_KEY,
): void => {
	if (import.meta.env.SSR) return;
	try {
		if (color_scheme === null) {
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, color_scheme);
		}
	} catch (_) {}
};
export const load_color_scheme = (
	fallback: Color_Scheme | null = 'auto',
	key = COLOR_SCHEME_STORAGE_KEY,
): Color_Scheme | null => {
	if (import.meta.env.SSR) return null;
	let stored: any;
	try {
		stored = localStorage.getItem(key);
	} catch (_) {
		return fallback;
	}
	if (color_schemes.includes(stored)) {
		return stored;
	}
	return fallback;
};

// TODO @multiple refactor, probably with a storage util
export const THEME_STORAGE_KEY = 'theme';
export const save_theme = (theme: Theme | null, key = THEME_STORAGE_KEY): void => {
	if (import.meta.env.SSR) return;
	try {
		if (theme === null) {
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, JSON.stringify(theme));
		}
	} catch (_) {}
};
export const load_theme = (fallback: Theme = default_themes[0], key = THEME_STORAGE_KEY): Theme => {
	if (import.meta.env.SSR) return fallback;
	try {
		const v = localStorage.getItem(key);
		const stored = v === null ? v : JSON.parse(v);
		if (stored) {
			return stored;
		}
	} catch (_) {}
	return fallback;
};

// TODO can we add `nonce="%sveltekit.nonce%"` to this script to fix the CSP issues? does it even work on the style tag below?
// TODO look at this to initialize the theme synchronously in the HEAD to avoid flashing
/**
 * Creates an HTML script string to be inserted into the `head`
 * that initializes the dark/light color scheme.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
 * Prefers a value in `localStorage` if available, and if not detects using `matchMedia`.
 * In case of an unexpected error, like if `localStorage` is disabled, the `fallback` value is used.
 * @param fallback
 * @param key
 * @returns HTML string with the color scheme setup script and a `color-schema` meta tag
 */
export const create_theme_setup_script = (
	fallback: Color_Scheme = 'light',
	key = COLOR_SCHEME_STORAGE_KEY,
): string => `
	try {
		let c = localStorage.getItem('${key}');
		if (c === 'auto' || (c !== 'dark' && c !== 'light')) {
			c = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
		if (c === 'dark') document.documentElement.classList.add('dark');
	} catch (_) { ${fallback === 'dark' ? "document.documentElement.classList.add('dark');" : ''} }
`;

/**
 * Creates an HTML style string to be inserted into the `head`
 * that overrides the theme for a part of the page.
 * @param style same as the result of a call to `render_theme_style`
 * @returns HTML string with the style tag and its contents
 */
export const create_theme_style_html = (style: string): string => `<style nonce="%sveltekit.nonce%">
	${style}
</style>`;

export interface Theme {
	// TODO probably need an `id`
	// id: string;
	name: string;
	items: Theme_Variable[];
}

export interface Theme_Variable {
	name: string;
	light?: string;
	dark?: string;
	summary?: string;
}

export interface Render_Theme_Style_Options {
	comments?: boolean;
	id?: string | null;
	empty_default_theme?: boolean;
	/**
	 * Any integer >= 1, defaults to 2,
	 * needed because SvelteKit may insert `svelte:head` content in any order.
	 */
	specificity?: number;
}

export const render_theme_style = (
	theme: Theme,
	options: Render_Theme_Style_Options = {},
): string => {
	const {comments = false, id = null, empty_default_theme = true, specificity = 2} = options;
	const variables =
		theme.name === default_themes[0].name
			? empty_default_theme
				? null
				: default_variables
			: theme.items;
	if (!variables?.length) return '';
	const rendered_light = variables.map((v) => render_theme_variable(v)).filter(Boolean);
	const rendered_dark = variables
		.map((v) => render_theme_variable(v, true, comments))
		.filter(Boolean);
	const scope = (id ? '#' + id : ':root').repeat(specificity);
	return `${
		rendered_light.length
			? `${scope} {
	${rendered_light.join('\n\t')}
}`
			: ''
	}
${
	rendered_dark.length
		? `${scope}.dark {
	${rendered_dark.join('\n\t')}
}`
		: ''
}
`.trim();
};

export const render_theme_variable = (
	variable: Theme_Variable,
	dark = false,
	comments = true,
): string => {
	const v = dark ? variable.dark : variable.light;
	if (!v) return '';
	return (
		'--' +
		variable.name +
		': ' +
		v +
		';' +
		(comments && variable.summary ? ' /* ' + variable.summary + ' */' : '')
	);
};

const THEME_KEY = Symbol('theme');
export const get_theme = (): Writable<Theme> => getContext(THEME_KEY);
export const set_theme = (store: Writable<Theme>): Writable<Theme> => setContext(THEME_KEY, store);

const COLOR_SCHEME_KEY = Symbol('color_scheme');
export const get_color_scheme = (): Writable<Color_Scheme | null> => getContext(COLOR_SCHEME_KEY);
export const set_color_scheme = (
	store: Writable<Color_Scheme | null>,
): Writable<Color_Scheme | null> => setContext(COLOR_SCHEME_KEY, store);
