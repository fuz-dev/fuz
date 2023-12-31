import type {Theme} from '$lib/theme.js';

export const DEFAULT_THEME: Theme = {
	name: 'base',
	items: [], // inherits base
};

export const default_themes: Theme[] = [
	DEFAULT_THEME,
	{
		name: 'low contrast',
		items: [
			{name: 'tint_saturation', light: '8%'},
			{
				name: 'bg',
				light: 'hsl(var(--tint_hue), var(--tint_saturation), 86%)',
				dark: 'hsl(var(--tint_hue), var(--tint_saturation), 18%)',
			},
		],
	},
	{
		name: 'high contrast',
		items: [
			{
				name: 'bg',
				light: '#fff',
				dark: '#000',
			},
			{
				name: 'text_1',
				light: 'hsl(var(--tint_hue), var(--tint_saturation), 8%)',
				dark: 'hsl(var(--tint_hue), var(--tint_saturation), 90%)',
			},
			{
				name: 'text_2',
				light: 'hsl(var(--tint_hue), var(--tint_saturation), 16%)',
				dark: 'hsl(var(--tint_hue), var(--tint_saturation), 83%)',
			},
			{
				name: 'text_3',
				light: 'hsl(var(--tint_hue), var(--tint_saturation), 24%)',
				dark: 'hsl(var(--tint_hue), var(--tint_saturation), 75%)',
			},
		],
	},
];
