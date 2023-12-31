import type {Theme_Variable} from '$lib/theme.js';

/**
 * These are implicitly the variables for the `base` theme.
 * See also the empty `variables` array of the `base` theme above.
 */
export const default_variables: Theme_Variable[] = [
	/* colors */
	{name: 'hue_1', light: '210', summary: 'blue'} /* TODO midpoint? */,
	{
		name: 'color_1',
		light: 'hsl(var(--hue_1), 55%, 50%)',
		dark: 'hsl(var(--hue_1), 55%, 75%)',
	},
	{name: 'hue_2', light: '120', summary: 'green, triad with `--color_3` and `--color_4`'},
	{
		name: 'color_2',
		light: 'hsl(var(--hue_2), 55%, 32%)',
		dark: 'hsl(var(--hue_2), 45%, 70%)',
		summary: 'same as THEME_COLOR',
	},
	{name: 'hue_3', light: '251', summary: 'purple, triad with `--color_2` and `--color_4`'},
	{
		name: 'color_3',
		light: 'hsl(var(--hue_3), 50%, 50%)',
		dark: 'hsl(var(--hue_3), 50%, 75%)',
	},
	{name: 'hue_4', light: '26', summary: 'orange, triad with `--color_2` and `--color_3`'},
	{
		name: 'color_4',
		light: 'hsl(var(--hue_4), 55%, 50%)',
		dark: 'hsl(var(--hue_4), 65%, 75%)',
	},
	{name: 'hue_5', light: '0', summary: 'red'},
	{
		name: 'color_5',
		light: 'hsl(var(--hue_5), 50%, 50%)',
		dark: 'hsl(var(--hue_5), 50%, 65%)',
	},
	{name: 'hue_6', light: '32', summary: 'brown'},
	{
		name: 'color_6',
		light: 'hsl(var(--hue_6), 97%, 22%)',
		dark: 'hsl(var(--hue_6), 32%, 75%)',
	},
	{name: 'hue_7', light: '335', summary: 'pink'},
	{
		name: 'color_7',
		light: 'hsl(var(--hue_7), 74%, 56%)',
		dark: 'hsl(var(--hue_7), 74%, 76%)',
	},

	/* color variants */
	/* using these usually means handling both light and dark mode separately - the semantic variants
	that handle `color-schema` automatically include `--bg_1` and `--bg_2`  */
	{name: 'darken_1', light: '#0000000f', summary: '6%'},
	{name: 'darken_2', light: '#0000001f', summary: '12%'},
	{name: 'darken_3', light: '#00000036', summary: '21%'},
	{name: 'darken_4', light: '#00000052', summary: '32%'},
	{name: 'darken_5', light: '#00000073', summary: '45%'},
	{name: 'darken_6', light: '#000000a6', summary: '65%'},
	{name: 'darken_7', light: '#000000cc', summary: '80%'},
	{name: 'darken_8', light: '#000000e3', summary: '89%'},
	{name: 'darken_9', light: '#000000f5', summary: '96%'},
	{name: 'lighten_1', light: '#ffffff0f', summary: '6%'},
	{name: 'lighten_2', light: '#ffffff1f', summary: '12%'},
	{name: 'lighten_3', light: '#ffffff36', summary: '21%'},
	{name: 'lighten_4', light: '#ffffff52', summary: '32%'},
	{name: 'lighten_5', light: '#ffffff73', summary: '45%'},
	{name: 'lighten_6', light: '#ffffffa6', summary: '65%'},
	{name: 'lighten_7', light: '#ffffffcc', summary: '80%'},
	{name: 'lighten_8', light: '#ffffffe3', summary: '89%'},
	{name: 'lighten_9', light: '#fffffff5', summary: '96%'},

	/* tint colors */
	{name: 'tint_hue', light: 'var(--hue_4)'},
	{name: 'tint_saturation', light: '11%'},

	/* bg colors */
	{
		name: 'bg',
		light: 'hsl(var(--tint_hue), var(--tint_saturation), 96%)',
		dark: 'hsl(var(--tint_hue), var(--tint_saturation), 7%)',
	},
	{
		name: 'fg',
		light: 'hsl(var(--tint_hue), var(--tint_saturation), 7%)',
		dark: 'hsl(var(--tint_hue), var(--tint_saturation), 96%)',
	},
	/* these are light or dark with a low alpha, so they nest/stack arbitrarily */
	/* TODO maybe extract --bg_lightness and --fg_lightness */
	{name: 'bg_1', light: 'var(--lighten_1)', dark: 'var(--darken_1)'},
	{name: 'bg_2', light: 'var(--lighten_2)', dark: 'var(--darken_2)'},
	{name: 'bg_3', light: 'var(--lighten_3)', dark: 'var(--darken_3)'},
	{name: 'bg_4', light: 'var(--lighten_4)', dark: 'var(--darken_4)'},
	{name: 'bg_5', light: 'var(--lighten_5)', dark: 'var(--darken_5)'},
	{name: 'bg_6', light: 'var(--lighten_6)', dark: 'var(--darken_6)'},
	{name: 'bg_7', light: 'var(--lighten_7)', dark: 'var(--darken_7)'},
	{name: 'bg_8', light: 'var(--lighten_8)', dark: 'var(--darken_8)'},
	{name: 'bg_9', light: 'var(--lighten_9)', dark: 'var(--darken_9)'},
	{name: 'fg_1', light: 'var(--darken_1)', dark: 'var(--lighten_1)'},
	{name: 'fg_2', light: 'var(--darken_2)', dark: 'var(--lighten_2)'},
	{name: 'fg_3', light: 'var(--darken_3)', dark: 'var(--lighten_3)'},
	{name: 'fg_4', light: 'var(--darken_4)', dark: 'var(--lighten_4)'},
	{name: 'fg_5', light: 'var(--darken_5)', dark: 'var(--lighten_5)'},
	{name: 'fg_6', light: 'var(--darken_6)', dark: 'var(--lighten_6)'},
	{name: 'fg_7', light: 'var(--darken_7)', dark: 'var(--lighten_7)'},
	{name: 'fg_8', light: 'var(--darken_8)', dark: 'var(--lighten_8)'},
	{name: 'fg_9', light: 'var(--darken_9)', dark: 'var(--lighten_9)'},
	/* text colors don't use alpha because it affects performance too much */
	{name: 'text_color', light: 'var(--text_1)'},
	{
		name: 'text_1',
		light: 'hsl(var(--tint_hue), var(--tint_saturation), 16%)',
		dark: 'hsl(var(--tint_hue), var(--tint_saturation), 80%)',
	},
	{
		name: 'text_2',
		light: 'hsl(var(--tint_hue), var(--tint_saturation), 32%)',
		dark: 'hsl(var(--tint_hue), var(--tint_saturation), 65%)',
	},
	{
		name: 'text_3',
		light: 'hsl(var(--tint_hue), var(--tint_saturation), 48%)',
		dark: 'hsl(var(--tint_hue), var(--tint_saturation), 50%)',
	},
	{name: 'text_disabled', light: 'var(--text_3)'},
	{
		name: 'text_active',
		light: 'hsl(var(--hue_1), 55%, 40%);',
		dark: 'hsl(var(--hue_1), 65%, 65%);',
	},

	/* fonts */
	{name: 'line_height', light: 'var(--line_height_5)'},
	{name: 'line_height_1', light: '1'},
	{name: 'line_height_2', light: '1.1'},
	{name: 'line_height_3', light: '1.2'},
	{name: 'line_height_4', light: '1.35'},
	{name: 'line_height_5', light: '1.5'},
	{name: 'line_height_6', light: '1.75'},
	{name: 'line_height_7', light: '2'},
	{
		name: 'font_family',
		light:
			"system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
		summary:
			'@source https://kilianvalkhof.com/2022/css-html/your-css-reset-needs-text-size-adjust-probably/',
	},
	{name: 'font_family_mono', light: "ui-monospace, 'Fira Mono', monospace"},

	/* sizes like font-size */
	{name: 'size_xs', light: '1rem'},
	{name: 'size_sm', light: '1.3rem'},
	{name: 'size_md', light: '1.6rem'},
	{name: 'size_lg', light: '2.04rem'},
	{name: 'size_1', light: '2.59rem'},
	{name: 'size_2', light: '3.29rem'},
	{name: 'size_3', light: '4.19rem'},
	{name: 'size_4', light: '5.33rem'},
	{name: 'size_5', light: '6.78rem'},
	{name: 'size_6', light: '8.62rem'},
	{name: 'size_7', light: '10.97rem'},
	{name: 'size_8', light: '13.95rem'},
	{name: 'size_9', light: '17.74rem'},

	/* links */
	{
		name: 'link_color',
		light: 'hsl(var(--hue_1), 61%, 35%)',
		dark: 'hsl(var(--hue_1), 61%, 58%)',
	},
	{name: 'text_decoration', light: 'none'},
	{name: 'text_decoration_hover', light: 'underline'},
	{name: 'text_decoration_selected', light: 'underline'},
	{name: 'link_active', light: 'var(--text_color)'},

	/* spacings, rounded to pixels for the default 16px case */
	{name: 'spacing_xs5', light: '0.1rem'},
	{name: 'spacing_xs4', light: '0.2rem'},
	{name: 'spacing_xs3', light: '0.3rem'},
	{name: 'spacing_xs2', light: '0.4rem'},
	{name: 'spacing_xs', light: '0.6rem'},
	{name: 'spacing_sm', light: '0.8rem'},
	{name: 'spacing_md', light: '1rem'},
	{name: 'spacing_lg', light: '1.3rem'},
	{name: 'spacing_1', light: '1.6rem'},
	{name: 'spacing_2', light: '2.1rem'},
	{name: 'spacing_3', light: '2.6rem'},
	{name: 'spacing_4', light: '3.3rem'},
	{name: 'spacing_5', light: '4.2rem'},
	{name: 'spacing_6', light: '5.4rem'},
	{name: 'spacing_7', light: '6.9rem'},
	{name: 'spacing_8', light: '8.7rem'},
	{name: 'spacing_9', light: '11.1rem'},
	{name: 'width_md', light: '800px'},
	{name: 'width_sm', light: '320px'},

	/* borders and outlines */
	{name: 'border_color', light: 'var(--border_3)'},
	{
		name: 'border_1',
		light: 'hsl(var(--tint_hue), 60%, 20%, 15%)',
		dark: 'hsl(var(--tint_hue), 60%, 80%, 85%)',
	},
	{
		name: 'border_2',
		light: 'hsl(var(--tint_hue), 60%, 20%, 25%)',
		dark: 'hsl(var(--tint_hue), 60%, 80%, 70%)',
	},
	{
		name: 'border_3',
		light: 'hsl(var(--tint_hue), 60%, 20%, 35%)',
		dark: 'hsl(var(--tint_hue), 60%, 80%, 50%)',
	},
	{
		name: 'border_4',
		light: 'hsl(var(--tint_hue), 60%, 20%, 45%)',
		dark: 'hsl(var(--tint_hue), 60%, 80%, 40%)',
	},
	{
		name: 'border_5',
		light: 'hsl(var(--tint_hue), 60%, 20%, 60%)',
		dark: 'hsl(var(--tint_hue), 60%, 80%, 30%)',
	},
	{name: 'border_disabled', light: 'var(--border_3)'},
	{name: 'border_width', light: 'var(--border_width_1)'},
	{name: 'border_width_1', light: '1px'},
	{name: 'border_width_2', light: '2px'},
	{name: 'border_width_3', light: '3px'},
	{name: 'border_width_4', light: '4px'},
	{name: 'border_width_5', light: '6px'},
	{name: 'border_width_6', light: '8px'},
	{name: 'border_style', light: 'solid'},
	{name: 'outline_width', light: 'var(--outline_width_1)'},
	{name: 'outline_width_1', light: '0'},
	{name: 'outline_width_2', light: 'var(--border_width_2)'},
	{name: 'outline_width_3', light: 'var(--border_width_1)'},
	{name: 'outline_style', light: 'solid'},
	{name: 'outline_color', light: 'var(--color_1)'},

	/* button colors */
	{name: 'button_bg', light: 'var(--fg_1)'},
	{name: 'button_bg_hover', light: 'var(--fg_2)'},
	{name: 'button_bg_active', light: 'var(--bg_3)'},
	{name: 'button_bg_disabled', light: 'transparent'},

	/* inputs */
	{name: 'input_bg', light: 'var(--bg_5)'},
	{name: 'input_padding_y', light: '0'},
	{name: 'input_padding_x', light: 'var(--spacing_lg)'},
	{name: 'input_width_min', light: '100px'},
	{name: 'input_height', light: 'var(--spacing_5)'},
	{name: 'input_height_sm', light: 'var(--spacing_4)'},
	{
		name: 'input_height_inner',
		light: 'calc(var(--input_height) - 2 * var(--border_width) - 2 * var(--input_padding_y))',
	},

	/* shadows */
	{
		name: 'box_shadow',
		light:
			'2px 4px 9px hsla(var(--tint_hue), var(--tint_saturation), 7%, 0.28), 2px 14px 48px hsla(var(--tint_hue), var(--tint_saturation), 7%, 0.28)',
		dark: '2px 4px 9px hsla(var(--tint_hue), var(--tint_saturation), 82%, var(--faded_5)), 2px 14px 48px hsla(var(--tint_hue), var(--tint_saturation), 82%, var(--faded_5))',
	},
	{
		name: 'box_shadow_lg',
		light:
			'2px 6px 14px hsla(var(--tint_hue), var(--tint_saturation), 7%, 0.8), 2px 6px 48px hsla(var(--tint_hue), var(--tint_saturation), 7%, 0.8)',
		dark: '2px 6px 18px hsla(var(--tint_hue), var(--tint_saturation), 82%, var(--faded_5)), 2px 6px 48px hsla(var(--tint_hue), var(--tint_saturation), 82%, var(--faded_5))',
	},
	{name: 'drop_shadow', light: 'drop-shadow(var(--box_shadow))'},
	{name: 'drop_shadow_lg', light: 'drop-shadow(var(--box_shadow_lg))'},

	/* icons */
	/* these decrease by the golden ratio, rounded to the nearest pixel,
	and they're insensitive to font size (`px` not `rem`) */
	{name: 'icon_size', light: 'var(--icon_size_md)'},
	{name: 'icon_size_xs', light: '18px'},
	{name: 'icon_size_sm', light: '32px'},
	{name: 'icon_size_md', light: '48px'},
	{name: 'icon_size_lg', light: '80px'},
	{name: 'icon_size_1', light: '128px'},
	{name: 'icon_size_2', light: '196px'},
	{name: 'icon_size_3', light: '316px'},
	{name: 'icon_size_4', light: '512px'},

	/* durations */
	{name: 'duration_1', light: '0.08s'},
	{name: 'duration_2', light: '0.2s'},
	{name: 'duration_3', light: '0.5s'},
	{name: 'duration_4', light: '1s'},
	{name: 'duration_5', light: '1.5s'},
	{name: 'duration_6', light: '3s'},

	/* transparencies */
	/* TODO maybe delete these? they do help with standardizing/consistency */
	{name: 'faded_1', light: '86%'},
	{name: 'faded_2', light: '62%'},
	{name: 'faded_3', light: '38%'},
	{name: 'faded_4', light: '24%'},
	{name: 'faded_5', light: '15%'},
	{name: 'faded_6', light: '9%'},
	{name: 'disabled_opacity', light: 'var(--faded_1)'},

	/* border radii */
	{name: 'border_radius', light: 'var(--border_radius_md)'},
	{name: 'border_radius_md', light: 'calc(var(--input_height) / 2)'},
	{name: 'border_radius_sm', light: 'calc(var(--border_radius_md) / 1.618)'},
	{name: 'border_radius_xs', light: 'calc(var(--border_radius_sm) / 1.618)'},
	{name: 'border_radius_xs2', light: 'calc(var(--border_radius_xs) / 1.618)'},
];
