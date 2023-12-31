<script lang="ts">
	import '$lib/style.css';
	import '$lib/theme.css';
	import '@fuz.dev/fuz_code/prism.css';

	import {set_devmode} from '@fuz.dev/fuz_library/devmode.js';
	import Devmode_Controls from '@fuz.dev/fuz_library/Devmode_Controls.svelte';

	import Themed from '$lib/Themed.svelte';

	const devmode = set_devmode(false);
</script>

<Themed>
	<slot />
</Themed>
<Devmode_Controls {devmode} />
