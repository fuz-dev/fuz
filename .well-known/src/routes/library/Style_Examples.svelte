<script lang="ts">
	import {get_theme} from '$lib/theme.js';

	const theme = get_theme();

	let selected_button = 1;

	const faces = ['😊', '😑', '🤔', '😉'];

	let username = '';
	let password = '';
	let lifestory = '';

	const radio_items = ['a radio input', 'another radio input'];
	let selected_radio_item = radio_items[0];

	let checked1 = false;
	let checked2 = true;
</script>

<div class="style_examples">
	<h1>theme: {$theme.name}</h1>
	<div class="prose">
		<h2>this is an <code>h2</code> inside <code>.prose</code></h2>
		<blockquote>blockquote</blockquote>
		<aside>aside</aside>
		<ul>
			<li>a</li>
			<li>b</li>
			<li>c</li>
		</ul>
		<p>
			p and <code>code</code> with
			<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">links</a>
		</p>
		{#each {length: 3} as _}
			<p class="width_sm">
				another p with <code>.width_sm</code> so it will wrap any moment now and there we have multiple
				lines of text
			</p>
		{/each}
		<details>
			<summary>summary and details</summary>
			details content
		</details>
	</div>
	<hr />
	<h2><code>form</code></h2>
	<form>
		<fieldset>
			<legend>a <code>legend</code> in a <code>fieldset</code></legend>
			<label>
				<div class="title">input</div>
				<input bind:value={username} placeholder=">" />
			</label>
			<label>
				<div class="title">disabled input</div>
				<input type="password" bind:value={password} disabled={true} placeholder=">" />
			</label>
			<label>
				<div class="title">textarea</div>
				<textarea bind:value={lifestory} placeholder="👀" /></label
			>
			<label>
				<div class="title">disabled textarea</div>
				<textarea disabled={true} placeholder=">" /></label
			>
			<select class="text_align_center" style="font-size: var(--size_5)">
				{#each faces as face (face)}
					<option value={face}>{face}</option>
				{/each}
			</select>
			<select class="text_align_center" style="font-size: var(--size_5)" disabled={true}>
				{#each faces as face (face)}
					<option value={face}>{face}</option>
				{/each}
			</select>
		</fieldset>
		<fieldset>
			<input type="range" step={1} min={0} max={100} />
		</fieldset>
		<fieldset>
			<input type="range" step={1} min={0} max={100} disabled />
		</fieldset>
		<fieldset class="row wrap box">
			<label class="row">
				<input type="checkbox" bind:checked={checked1} style:margin-right="var(--spacing_lg)" />
			</label>
			<label class="row">
				<input type="checkbox" bind:checked={checked2} style:margin-right="var(--spacing_lg)" />
			</label>
			<label class="row disabled">
				<input type="checkbox" disabled style:margin-right="var(--spacing_lg)" />
			</label>
			<label class="row disabled">
				<input type="checkbox" checked disabled />
			</label>
			{#each radio_items as radioItem}
				{@const selected = radioItem === selected_radio_item}
				<label class="row" class:selected
					><input type="radio" bind:group={selected_radio_item} value={radioItem} />
				</label>
			{/each}
			<label class="row disabled">
				<input type="radio" disabled />
			</label>
			<label class="row disabled selected" style:margin-bottom="var(--spacing_lg)">
				<input type="radio" checked disabled />
			</label>
		</fieldset>
	</form>
	<div class="row box">
		<button disabled>:|</button>
		<button disabled>a bigger disabled button</button>
	</div>
	<nav>
		<button class:selected={selected_button === 0} on:click={() => (selected_button = 0)}>
			button 0
		</button>
		<button class:selected={selected_button === 1} on:click={() => (selected_button = 1)}>
			button 1
		</button>
		<button class:selected={selected_button === 2} on:click={() => (selected_button = 2)}>
			button 2
		</button>
	</nav>
	<button class="selected">a button with the <code>.selected</code> class</button>
	<button class="selected deselectable"
		>a <code>.deselectable</code> <code>.selected</code> button</button
	><button class="selected deselectable" disabled={true}
		>disabled <code>.deselectable</code> <code>.selected</code></button
	>
	<div class="row wrap box">
		<button class="plain">+</button>
		<button class="icon_button">+</button>
		<button class="plain icon_button">+</button>
		<button class="plain" disabled>+</button>
		<button class="icon_button" disabled>+</button>
		<button class="plain icon_button" disabled>+</button>
		<button class="plain selected">+</button>
		<button class="icon_button selected">+</button>
		<button class="plain icon_button selected">+</button>
		<button class="plain selected deselectable">+</button>
		<button class="icon_button selected deselectable">+</button>
		<button class="plain icon_button selected deselectable">+</button>
	</div>
	<label class="buttonlike padded_md row box">
		<input type="checkbox" />
		<div class="padded_sm">this entire thing is buttonlike, not just the checkbox</div>
	</label>
	<label class="buttonlike padded_md row box disabled">
		<input type="checkbox" disabled />
		<div class="padded_sm">this is a <code>.disabled</code> buttonlike</div>
	</label>
	<div class="buttonlike selected padded_md">
		<code>.buttonlike</code> with <code>.selected</code>
	</div>
	<div class="buttonlike deselectable selected padded_md">
		<code>.buttonlike</code> with <code>.selected</code> and <code>.deselectable</code>
	</div>
</div>

<style>
	.style_examples {
		display: flex;
		flex-direction: column;
	}
	/* TODO fix this generically, but how without a gnarly selector? */
	nav {
		margin-bottom: var(--spacing_lg);
	}
	nav button {
		margin-bottom: 0;
	}
</style>
