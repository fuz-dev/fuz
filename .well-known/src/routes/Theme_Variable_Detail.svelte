<script lang="ts">
	import type {Theme_Variable} from '$lib/theme.js';

	export let variable: Theme_Variable;
</script>

<div class="variable">
	<div class="name"><code>--{variable.name}</code></div>
	{#if variable.summary}<blockquote class="spaced">{variable.summary}</blockquote>{/if}
	<label>
		<small class="title">light</small>
		<input disabled={true} value={variable.light ?? ''} />
	</label>
	<br />
	<label>
		<small class="title">dark</small>
		<input disabled={true} value={variable.dark ?? ''} />
	</label>
</div>

<style>
	.variable {
		align-items: flex-start;
		/* ... */
		padding: var(--spacing_xs) 0;
	}
	.name {
		font-size: var(--size_1);
		text-align: center;
		margin-bottom: var(--spacing_1);
	}
</style>
