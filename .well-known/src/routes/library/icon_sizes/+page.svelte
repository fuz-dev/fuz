<script lang="ts">
	import Tome_Detail from '@fuz.dev/fuz_library/Tome_Detail.svelte';
	import {get_tome} from '@fuz.dev/fuz_library/tome.js';

	const LIBRARY_ITEM_NAME = 'icon sizes';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	// TODO move to a single source of truth (JSON or ts), generate CSS and use to render here
	const sizes = {
		icon_size_4: '512px',
		icon_size_3: '316px',
		icon_size_2: '196px',
		icon_size_1: '128px',
		icon_size_lg: '80px',
		icon_size_md: '48px',
		icon_size_sm: '32px',
		icon_size_xs: '18px',
	};
</script>

<Tome_Detail {tome}>
	<section class="prose box">
		<div class="width_sm text_align_center">
			<h3>the <code>--icon_size</code> variable's variants</h3>
			<blockquote>
				unlike <code>--size_</code> variables, <code>--icon_</code> variables are in
				<code>px</code>
				not <code>rem</code>, so they're insensitive to browser font size
			</blockquote>
		</div>
	</section>
	<div class="icon_sizes">
		<!-- TODO make this data driven -->
		<!-- TODO read these vars from the typescript and display their runtime values -->
		<figure>
			<figcaption><code>--icon_size_xs: {sizes.icon_size_xs}</code></figcaption>
			<div
				style="font-size: var(--icon_size_xs); --size: var(--icon_size_xs);"
				title="--icon_size_xs is {sizes.icon_size_xs}"
			>
				🐢
			</div>
		</figure>
		<figure>
			<figcaption><code>--icon_size_sm: {sizes.icon_size_sm}</code></figcaption>
			<div
				style="font-size: var(--icon_size_sm); --size: var(--icon_size_sm);"
				title="--icon_size_sm is {sizes.icon_size_sm}"
			>
				🐢
			</div>
		</figure>
		<figure>
			<figcaption><code>--icon_size_md: {sizes.icon_size_md}</code></figcaption>
			<div
				style="font-size: var(--icon_size_md); --size: var(--icon_size_md);"
				title="--icon_size_md is {sizes.icon_size_md}"
			>
				🐢
			</div>
		</figure>
		<figure>
			<figcaption><code>--icon_size_lg: {sizes.icon_size_lg}</code></figcaption>
			<div
				style="font-size: var(--icon_size_lg); --size: var(--icon_size_lg);"
				title="--icon_size_lg is {sizes.icon_size_lg}"
			>
				🐢
			</div>
		</figure>
		<figure>
			<figcaption><code>--icon_size_1: {sizes.icon_size_1}</code></figcaption>
			<div
				style="font-size: var(--icon_size_1); --size: var(--icon_size_1);"
				title="--icon_size_1 is {sizes.icon_size_1}"
			>
				🐢
			</div>
		</figure>
		<figure>
			<figcaption><code>--icon_size_2: {sizes.icon_size_2}</code></figcaption>
			<div
				style="font-size: var(--icon_size_2); --size: var(--icon_size_2);"
				title="--icon_size_2 is {sizes.icon_size_2}"
			>
				🐢
			</div>
		</figure>
		<figure>
			<figcaption><code>--icon_size_3: {sizes.icon_size_3}</code></figcaption>
			<div
				style="font-size: var(--icon_size_3); --size: var(--icon_size_3);"
				title="--icon_size_3 is {sizes.icon_size_3}"
			>
				🐢
			</div>
		</figure>
		<figure>
			<figcaption><code>--icon_size_4: {sizes.icon_size_4}</code></figcaption>
			<div
				style="font-size: var(--icon_size_4); --size: var(--icon_size_4);"
				title="--icon_size_4 is {sizes.icon_size_4}"
			>
				🐢
			</div>
		</figure>
	</div>
</Tome_Detail>

<style>
	.icon_sizes {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		align-items: center;
		overflow-x: auto;
		overflow-y: hidden;
	}
	.icon_sizes figure {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		padding: var(--spacing_1) 0;
	}
	/* TODO layout with CSS grid */
	.icon_sizes figcaption {
		display: flex;
	}
	.icon_sizes figure > div {
		width: var(--size);
		height: var(--size);
		border: var(--border_width) var(--border_style) var(--border_color);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	code {
		white-space: nowrap;
	}
</style>
