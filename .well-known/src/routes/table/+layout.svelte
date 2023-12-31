<script lang="ts">
	import {parse_deployments, set_deployments} from '@ryanatkn/orc/deployments.js';

	import deployments from '$lib/deployments.json';

	// this is duplicated in each Orc page to code split the deployments data

	set_deployments(parse_deployments(deployments, 'https://www.fuz.dev/'));
</script>

<slot />
