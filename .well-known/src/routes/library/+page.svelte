<script lang="ts">
	import Library from '@fuz.dev/fuz_library/Library.svelte';
	import {get_tomes} from '@fuz.dev/fuz_library/tome.js';

	const tomes_by_name = get_tomes();

	const tomes = Array.from(tomes_by_name.values());
</script>

<Library {tomes} />
