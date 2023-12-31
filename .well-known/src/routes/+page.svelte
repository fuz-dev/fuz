<script lang="ts">
	import {base} from '$app/paths';
	import Library_Footer from '@fuz.dev/fuz_library/Library_Footer.svelte';
	import Card from '@fuz.dev/fuz_library/Card.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';

	import Page_Menu from '$routes/Page_Menu.svelte';
	import {package_json, src_json} from '$routes/package.js';

	// TODO set in context
	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
</script>

<main class="box width_full">
	<div class="box width_md">
		<div class="prose box">
			<h1>fuz</h1>
			<section>
				<blockquote>friendly user zystem</blockquote>
			</section>
		</div>
		<section>
			<Card href="{base}/library"
				>design<br />system<br /><svelte:fragment slot="icon">🧶</svelte:fragment></Card
			>
		</section>
		<section>
			<h2 class="spaced">packages</h2>
			<Page_Menu />
		</section>
		<section>
			<Library_Footer {pkg} />
		</section>
	</div>
</main>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: var(--spacing_5);
	}
</style>
