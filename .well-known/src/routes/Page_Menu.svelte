<script lang="ts">
	import {base} from '$app/paths';

	// TODO upstream
</script>

<menu>
	<a class="chip" href="{base}/table">table</a>
	<a class="chip" href="{base}/modules">modules</a>
	<a class="chip" href="{base}/tree">tree</a>
	<a class="chip" href="{base}/about">about</a>
</menu>

<style>
	menu {
		width: 100%;
		display: flex;
		gap: var(--spacing_lg);
		flex-direction: column;
		align-items: center;
		font-size: var(--size_lg);
	}
</style>
