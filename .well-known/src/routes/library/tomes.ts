import {init_tome, type Tome} from '@fuz.dev/fuz_library/tome.js';

import elements from '$routes/library/elements/+page.svelte';
import forms from '$routes/library/forms/+page.svelte';
import typography from '$routes/library/typography/+page.svelte';
import theme from '$routes/library/theme/+page.svelte';
import variables from '$routes/library/variables/+page.svelte';
import prose from '$routes/library/prose/+page.svelte';
import icon_sizes from '$routes/library/icon_sizes/+page.svelte';

export const tomes: Tome[] = [
	{
		name: 'theme',
		slug: 'theme',
		pathname: '',
		category: 'styles',
		component: theme,
		related: ['icon sizes', 'typography', 'variables'],
	},
	{
		name: 'elements',
		slug: 'elements',
		pathname: '',
		category: 'styles',
		component: elements,
		related: ['forms', 'prose'],
	},
	{
		name: 'forms',
		slug: 'forms',
		pathname: '',
		category: 'styles',
		component: forms,
		related: ['elements', 'prose'],
	},
	{
		name: 'icon sizes',
		slug: 'icon_sizes',
		pathname: '',
		category: 'styles',
		component: icon_sizes,
		related: ['theme', 'typography', 'variables'],
	},
	{
		name: 'prose',
		slug: 'prose',
		pathname: '',
		category: 'styles',
		component: prose,
		related: ['elements', 'forms', 'typography'],
	},
	{
		name: 'typography',
		slug: 'typography',
		pathname: '',
		category: 'styles',
		component: typography,
		related: ['theme', 'icon sizes', 'prose', 'variables'],
	},
	{
		name: 'variables',
		slug: 'variables',
		pathname: '',
		category: 'styles',
		component: variables,
		related: ['theme', 'icon sizes', 'typography'],
	},
];

for (const t of tomes) init_tome(t);
