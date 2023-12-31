<script lang="ts">
	import Table_Page from '@ryanatkn/orc/Table_Page.svelte';
	import {get_deployments} from '@ryanatkn/orc/deployments.js';

	const {deployment, deployments} = get_deployments();
</script>

<Table_Page {deployment} {deployments} />
