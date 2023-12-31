<script lang="ts">
	import Modules_Page from '@ryanatkn/orc/Modules_Page.svelte';
	import {get_deployments} from '@ryanatkn/orc/deployments.js';

	const {deployment, deployments} = get_deployments();
</script>

<Modules_Page {deployment} {deployments} />
