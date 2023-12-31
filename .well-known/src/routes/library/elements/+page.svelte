<script lang="ts">
	import Tome_Detail from '@fuz.dev/fuz_library/Tome_Detail.svelte';
	import {get_tome} from '@fuz.dev/fuz_library/tome.js';
	import 'prismjs'; // TODO why are these needed? `Code` imports these already - vite config?
	import 'prism-svelte';
	import Code from '@fuz.dev/fuz_code/Code.svelte';

	const LIBRARY_ITEM_NAME = 'elements';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<div class="prose box">
		<blockquote>
			styles for <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
				>HTML elements</a
			>
		</blockquote>
		<h3>
			<span style="font-size: var(--size_3)">👆</span>
			<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote"
				><code>blockquote</code></a
			>
		</h3>
		<h3>
			<span style="font-size: var(--size_3)">👇</span>
			<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr"><code>hr</code></a>
			<span style="font-size: var(--size_3)">👈</span>
			<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code"><code>code</code></a>
		</h3>
	</div>
	<hr />
	<div class="prose">
		<div class="box">
			<h3>
				<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details"
					><code>details</code></a
				>
				and
				<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary"
					><code>summary</code></a
				>
			</h3>
		</div>
		<details>
			<summary
				>Click me, a <code>summary</code>, to see the rest of the <code>details</code></summary
			>
			<p>so many details</p>
			<Code
				content={`<details>
	<summary>
		Click me, a <code>summary</code>,
		to see the rest of the <code>details</code>
	</summary>
	<Code code={'...'} />
</details>`}
			/>
		</details>
	</div>
	<hr />
	<div class="prose box">
		<div class="box">
			<h3>
				<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
					><code>table</code></a
				>
			</h3>
			<blockquote>this is unfinished and will change</blockquote>
		</div>
		<div class="box">
			<Code
				content={`<table>
	<thead>
		<th>th</th>
		<th>th</th>
		<th>th</th>
	</thead>
	<tbody>
		<tr><td>td</td><td>td</td><td>td</td></tr>
		<tr><td>td</td><td>td</td><td>td</td></tr>
		<tr><td>td</td><td>td</td><td>td</td></tr>
	</tbody>
</table>`}
			/>
		</div>
		<table>
			<thead>
				<th>th</th>
				<th>th</th>
				<th>th</th>
			</thead>
			<tbody>
				<tr><td>td</td><td>td</td><td>td</td></tr>
				<tr><td>td</td><td>td</td><td>td</td></tr>
				<tr><td>td</td><td>td</td><td>td</td></tr>
			</tbody>
		</table>
		<Code content={`<table class="width_full">\n\t...\n</table>`} />
		<table class="width_full">
			<thead>
				<th>th</th>
				<th>th</th>
				<th>th</th>
			</thead>
			<tbody>
				<tr><td>td</td><td>td</td><td>td</td></tr>
				<tr><td>td</td><td>td</td><td>td</td></tr>
				<tr><td>td</td><td>td</td><td>td</td></tr>
			</tbody>
		</table>
	</div>
	<hr />
	<div class="prose">
		<div class="box">
			<h3>
				<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside"
					><code>aside</code></a
				>
			</h3>
		</div>
		<aside>
			the <code>aside</code> looks like this
		</aside>
		<aside class="box">
			<Code
				content={`<aside>
	<aside>
		<aside>nested asides</aside>
	</aside>
</aside>`}
			/>
			<aside>
				<aside>
					<aside>nested asides</aside>
				</aside>
			</aside>
		</aside>
	</div>
</Tome_Detail>
