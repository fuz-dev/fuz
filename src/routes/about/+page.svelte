<script lang="ts">
	import Package_Detail from '@fuz.dev/fuz_library/Package_Detail.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';
	import Library_Footer from '@fuz.dev/fuz_library/Library_Footer.svelte';
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';

	import {package_json, src_json} from '$routes/package.js';

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);

	// TODO standardize
</script>

<main class="width_md">
	<div class="prose">
		<section>
			<header class="box">
				<h1>{pkg.repo_name}</h1>
			</header>
			<Breadcrumb>🧶</Breadcrumb>
		</section>
	</div>
	<section class="box width_full spaced">
		<div class="panel padded_md width_md">
			<Package_Detail {pkg} />
		</div>
	</section>
	<section class="box">
		<Library_Footer {pkg} />
		<Breadcrumb>🧶</Breadcrumb>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	h1 {
		display: flex;
		align-items: baseline;
		text-align: center;
	}
	section {
		margin-bottom: var(--spacing_5);
	}
</style>
