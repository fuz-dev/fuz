<script lang="ts">
	import Tome_Detail from '@fuz.dev/fuz_library/Tome_Detail.svelte';
	import {get_tome} from '@fuz.dev/fuz_library/tome.js';

	const LIBRARY_ITEM_NAME = 'prose';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<section class="width_sm text_align_center">
		<blockquote>
			the <code>.prose</code> CSS class styles HTML elements for document-like presentation
		</blockquote>
	</section>
	<div class="prose">
		<section class="text_align_center">
			<h3><code>ul</code> inside <code>.prose</code></h3>
		</section>
	</div>
	<section class="prose">
		<ul>
			<li>a</li>
			<li>b</li>
			<li>see</li>
		</ul>
	</section>
	<div class="prose">
		<section class="text_align_center">
			<h3><code>ul</code> without a <code>.prose</code> ancestor</h3>
		</section>
	</div>
	<section>
		<ul>
			<li>a</li>
			<li>b</li>
			<li>see</li>
		</ul>
	</section>
	<div class="prose">
		<section class="text_align_center">
			<h3><code>a</code> links are inline inside <code>.prose</code></h3>
		</section>
	</div>
	<section class="prose">
		<p>
			this <a title="a demo link" href="https://www.fuz.dev/.well-known/package.json">link</a> is inline
		</p>
	</section>
	<div class="prose">
		<section class="text_align_center">
			<h3><code>a</code> without a <code>.prose</code> ancestor</h3>
		</section>
	</div>
	<section>
		<p>
			outside of <code>.prose</code>
			<a title="a demo link" href="https://www.fuz.dev/.well-known/package.json">links</a> are normally
			blocks
		</p>
	</section>
	<div class="prose">
		<section class="text_align_center">
			<h3>headings and other elements have no margin by default:</h3>
		</section>
	</div>
	<section class="text_align_center box">
		<h1>h1</h1>
		<h2>h2</h2>
		<h3>h3</h3>
		<h4>h4</h4>
		<h5>h5</h5>
		<h6>h6</h6>
		<p>p</p>
		<small>small</small>
		<p>p <sub>sub</sub> p <sup>sup</sup> p</p>
		<blockquote>blockquote</blockquote>
		<aside>aside</aside>
		<button>button</button>
		<footer>footer</footer>
	</section>
	<div class="prose">
		<section class="text_align_center">
			<h3>but they do inside <code>.prose</code>:</h3>
		</section>
	</div>
	<section class="prose text_align_center box">
		<h1>h1</h1>
		<h2>h2</h2>
		<h3>h3</h3>
		<h4>h4</h4>
		<h5>h5</h5>
		<h6>h6</h6>
		<p>p</p>
		<small>small</small>
		<p>p <sub>sub</sub> p <sup>sup</sup> p</p>
		<blockquote>blockquote</blockquote>
		<aside>aside</aside>
		<button>button</button>
		<footer>footer</footer>
	</section>
</Tome_Detail>

<style>
	section {
		margin-bottom: var(--spacing_3);
	}
</style>
