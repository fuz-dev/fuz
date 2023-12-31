<script lang="ts">
	import {page} from '$app/stores';
	import Tree_Item_Page from '@ryanatkn/orc/Tree_Item_Page.svelte';
	import {get_deployments} from '@ryanatkn/orc/deployments.js';

	// TODO ideally there would be one `Packages_Tree` mounted by the layout

	const {deployment, deployments} = get_deployments();

	$: slug = $page.params.slug;
</script>

<svelte:head>
	<title>{slug} - tree {deployment.package_json.icon} {deployment.package_json.name}</title>
</svelte:head>

<Tree_Item_Page {deployment} {deployments} {slug} />
