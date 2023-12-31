<script lang="ts">
	import {swallow} from '$lib/swallow.js';
	import Tome_Detail from '@fuz.dev/fuz_library/Tome_Detail.svelte';
	import Library_Vocab from '@fuz.dev/fuz_library/Library_Vocab.svelte';
	import Dialog from '@fuz.dev/fuz_dialog/Dialog.svelte';
	import {get_tome} from '@fuz.dev/fuz_library/tome.js';
	import 'prismjs'; // TODO why are these needed? `Code` imports these already - vite config?
	import 'prism-svelte';
	import Code from '@fuz.dev/fuz_code/Code.svelte';
	import Alert from '@fuz.dev/fuz_library/Alert.svelte';

	import {default_variables} from '$lib/variables.js';
	import type {Theme_Variable} from '$lib/theme.js';
	import Theme_Variable_Detail from '$routes/Theme_Variable_Detail.svelte';

	const LIBRARY_ITEM_NAME = 'variables';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	export let variables = default_variables.slice().sort((a, b) => a.name.localeCompare(b.name));

	let selected_variable: Theme_Variable | null = null;

	const click = (e: MouseEvent, variable: Theme_Variable): void => {
		swallow(e);
		selected_variable = variable;
	};
</script>

<Tome_Detail {tome}>
	<section class="prose box width_sm">
		<blockquote>
			{variables.length} theme variables
		</blockquote>
		<aside>
			Variables are <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*"
				>CSS custom properties</a
			>
			that can be grouped into a <Library_Vocab name="theme" />. Each variable can have values for
			light and/or dark color schemes.
		</aside>
		<Code
			lang="ts"
			content={`export interface Theme {
	// TODO probably need an \`id\`
	// id: string;
	name: string;
	items: Theme_Variable[];
}

export interface Theme_Variable {
	name: string;
	light?: string;
	dark?: string;
	summary?: string;
}`}
		/>
	</section>
	<section class="box">
		<!-- TODO add info through the contextmenu or dialog -->
		<div class="variables">
			{#each variables as variable (variable.name)}
				<button class="variable menu_item" on:click={(e) => click(e, variable)}
					>--{variable.name}</button
				>
			{/each}
		</div>
	</section>
	<section>
		<Alert icon="🕸">
			<p class="prose">
				variables are <code>snake_case</code> so they're also valid js identifiers
			</p>
		</Alert>
	</section>
</Tome_Detail>
{#if selected_variable}
	<Dialog on:close={() => (selected_variable = null)} let:close>
		<div class="pane">
			<div class="panel padded_lg box">
				<Theme_Variable_Detail variable={selected_variable} />
				<br />
				<aside>this is unfinished</aside>
				<br />
				<button on:click={close}>ok</button>
			</div>
		</div>
	</Dialog>
{/if}

<style>
	section {
		margin-bottom: var(--spacing_5);
	}
	.variables {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		font-family: var(--font_family_mono);
		white-space: nowrap;
	}
	.variable {
		width: 256px;
		min-height: var(--icon_size_sm);
	}
</style>
