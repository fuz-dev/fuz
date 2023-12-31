<script lang="ts">
	import Tome_Detail from '@fuz.dev/fuz_library/Tome_Detail.svelte';

	import {default_variables} from '$lib/variables.js';
	import {get_tome} from '@fuz.dev/fuz_library/tome.js';

	const LIBRARY_ITEM_NAME = 'typography';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	// TODO refactor
	const font_weights = [100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

	// TODO how to improve this?
	const font_size_names = new Set([
		'size_xs',
		'size_sm',
		'size_md',
		'size_lg',
		'size_1',
		'size_2',
		'size_3',
		'size_4',
		'size_5',
		'size_6',
		'size_7',
		'size_8',
		'size_9',
	]);
	const font_sizes = default_variables.filter((p) => font_size_names.has(p.name));
</script>

<Tome_Detail {tome}>
	<section class="typography prose box">
		<h1 title="--size_3">h1</h1>
		<h2 title="--size_2">h2</h2>
		<h3 title="--size_1">h3</h3>
		<h4 title="--size_lg">h4</h4>
		<h5 title="--size_md">h5</h5>
		<h6 title="--size_sm">h6</h6>
		<p>p</p>
		<small>small</small>
		<p>p <sub>sub</sub> p <sup>sup</sup> p</p>
		{#each font_sizes as font_size (font_size.name)}
			<p style:font-size="var(--{font_size.name})" title={font_size.light}>--{font_size.name}</p>
		{/each}
	</section>
	<section class="box font-weights">
		<h2>
			<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight"
				><code>font-weight</code></a
			>
		</h2>
		{#each font_weights as fontWeight (fontWeight)}
			<div style:font-weight={fontWeight}>
				{fontWeight}
			</div>
		{/each}
		{#each font_sizes as font_size (font_size)}
			{#each font_weights as fontWeight (fontWeight)}
				<div
					class="box nowrap"
					style:font-weight={fontWeight}
					style:--font_weight={fontWeight}
					style:font-size={font_size.light}
				>
					<div title="{font_size.light} at {fontWeight} font-weight">
						--{font_size.name}
					</div>
				</div>
			{/each}
		{/each}
	</section>
</Tome_Detail>

<style>
	.typography {
		display: flex;
	}
	p {
		white-space: nowrap;
	}
	section {
		margin-bottom: var(--spacing_5);
	}
</style>
