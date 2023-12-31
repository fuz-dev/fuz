<script lang="ts">
	import {page} from '$app/stores';
	import Library_Menu from '@fuz.dev/fuz_library/Library_Menu.svelte';
	import Library_Panel from '@fuz.dev/fuz_library/Library_Panel.svelte';
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';
	import {set_tomes} from '@fuz.dev/fuz_library/tome.js';
	import Library_Footer from '@fuz.dev/fuz_library/Library_Footer.svelte';
	import Package_Summary from '@fuz.dev/fuz_library/Package_Summary.svelte';
	import Library_Nav from '@fuz.dev/fuz_library/Library_Nav.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';

	import {tomes} from '$routes/library/tomes.js';
	import {package_json, src_json} from '$routes/package.js';

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);

	const tomes_by_name = new Map(tomes.map((t) => [t.name, t]));
	set_tomes(tomes_by_name);

	$: selected_item = tomes.find((c) => c.pathname === $page.url.pathname);
	$: tomes_related_to_selected = selected_item?.related?.map((r) => tomes_by_name.get(r)!);
</script>

<main class="box width_full">
	<Library_Nav />
	<div class="layout width_md">
		<div class="menu_wrapper">
			<div class="menu width_sm">
				<Library_Menu {tomes} />
				{#if tomes_related_to_selected}
					<Library_Menu tomes={tomes_related_to_selected} let:category>
						<h6>related {category}</h6>
					</Library_Menu>
				{/if}
			</div>
		</div>
		<Library_Panel>
			<Package_Summary {pkg} />
		</Library_Panel>
		<slot />
		<section class="box">
			<Library_Footer {pkg} />
		</section>
		<section class="box">
			<Breadcrumb>🧶</Breadcrumb>
		</section>
	</div>
</main>

<style>
	.layout {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: var(--spacing_5);
	}
	.menu_wrapper {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		transform: translate3d(calc(-100% - var(--spacing_sm)), 0, 0);
	}
	.menu {
		position: sticky;
		top: 0;
	}
	@media (max-width: 1200px) {
		.menu_wrapper {
			position: relative;
			transform: none;
			margin-bottom: var(--spacing_3);
		}
	}
	section {
		padding: var(--spacing_2);
	}
	h6 {
		margin-bottom: var(--spacing_md);
		margin-top: var(--spacing_3);
	}
	h6:first-child {
		margin-top: 0;
	}
</style>
