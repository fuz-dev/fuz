<script lang="ts">
	import {fly} from 'svelte/transition';
	import Alert from '@fuz.dev/fuz_library/Alert.svelte';
	import Tome_Detail from '@fuz.dev/fuz_library/Tome_Detail.svelte';
	import {get_tome} from '@fuz.dev/fuz_library/tome.js';
	import 'prismjs'; // TODO why are these needed? `Code` imports these already - vite config?
	import 'prism-svelte';
	import Code from '@fuz.dev/fuz_code/Code.svelte';

	const LIBRARY_ITEM_NAME = 'forms';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	// TODO extract this to where? (where is it used in the css? check all @keyframe)
	const ANIMATION_DURATION_FAST = 91; // ms

	let created_account = false;
	let selected_button = 1;
	let selected_deselectable_button = true;

	const faces = ['😊', '😑', '🤔', '😉'];

	let username = '';
	let password = '';
	let lifestory = '';

	const radio_items = ['a radio input', 'another radio input'];
	let selected_radio_item = radio_items[0];

	let checked1 = false;
	let checked2 = true;
</script>

<Tome_Detail {tome}>
	<div class="prose box">
		<Code
			content={`<form>
	<fieldset>
		<legend>
			a <code>legend</code>
			in a <code>fieldset</code>
		</legend>
		<label>
			<div class="title">
				username
			</div>
			<input
				bind:value={username}
				placeholder=">"
			/>
		</label>
		...
	</fieldset>
	...
</form>`}
		/>
		<br />
		<div class="width_sm">
			<form>
				<fieldset>
					<legend
						>a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend"
							><code>legend</code></a
						>
						in a
						<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset"
							><code>fieldset</code></a
						></legend
					>
					<label>
						<div class="title">username</div>
						<input bind:value={username} disabled={created_account} placeholder=">" />
					</label>
					<label>
						<div class="title">password</div>
						<input
							type="password"
							bind:value={password}
							disabled={created_account}
							placeholder=">"
						/>
					</label>
					<p>
						More info can be included in <code>{'<'}p></code> tags like this one. Here we could include
						info about passwords.
					</p>
					<label>
						<div class="title">lifestory</div>
						<textarea bind:value={lifestory} disabled={created_account} placeholder="👀" /></label
					>
					<label>
						<div class="title">select</div>
						<select
							class="text_align_center"
							style="font-size: var(--size_5)"
							disabled={created_account}
						>
							{#each faces as face (face)}
								<option value={face}>{face}</option>
							{/each}
						</select>
					</label>
					<button
						type="button"
						disabled={created_account}
						on:click={() => (created_account = true)}
					>
						create account
					</button>
				</fieldset>
			</form>
			{#if created_account}
				<form
					in:fly={{y: -100, duration: ANIMATION_DURATION_FAST}}
					out:fly={{y: 100, duration: ANIMATION_DURATION_FAST}}
				>
					<Alert status="error">cannot create account because this library is fake</Alert>
					<button type="button" on:click={() => (created_account = false)}> undo undo! </button>
				</form>
			{/if}
		</div>
	</div>

	<hr />

	<div class="box prose">
		<h3>
			<code>form</code> with range input
		</h3>
		<form>
			<fieldset>
				<Code content={`<input type="range" />`} />
				<input type="range" step={1} min={0} max={100} />
			</fieldset>
			<fieldset>
				<Code content={`<input type="range" disabled />`} />
				<input type="range" step={1} min={0} max={100} disabled />
			</fieldset>
		</form>
	</div>

	<hr />

	<div class="box prose">
		<h3>
			<code>form</code> with checkboxes
		</h3>
		<!-- TODO make this a form, but figure out the checkbox problem -- maybe a last-child exception? -->
		<form>
			<fieldset>
				<label class="row">
					<input type="checkbox" bind:checked={checked1} style:margin-right="var(--spacing_lg)" />
					<Code content={`<input type="checkbox" ${checked1 ? 'checked ' : ''}/>`} />
				</label>
				<label class="row">
					<input type="checkbox" bind:checked={checked2} style:margin-right="var(--spacing_lg)" />
					<Code content={`<input type="checkbox" ${checked2 ? 'checked ' : ''}/>`} />
				</label>
				<label class="row disabled">
					<input type="checkbox" disabled style:margin-right="var(--spacing_lg)" />
					<Code content={`<input type="checkbox" disabled />`} /> (disabled)
				</label>
				<label class="row disabled">
					<input type="checkbox" checked disabled />
					<Code content={`<input type="checkbox" checked disabled />`} /> (disabled)
				</label>
			</fieldset>
		</form>
		<aside>
			The above are wrapped with: <Code content={`<label class="row">`} />
			with the <code>.disabled</code> class as needed: <Code
				content={`<label class="row disabled">`}
			/>
		</aside>
	</div>
	<hr />

	<div class="box prose">
		<h3>
			<code>form</code> with radio buttons
		</h3>
		<form>
			<fieldset>
				{#each radio_items as radioItem}
					{@const selected = radioItem === selected_radio_item}
					<label class="row" class:selected
						><input type="radio" bind:group={selected_radio_item} value={radioItem} />
						<Code
							content={`<label class="row${selected ? ' selected' : ''}">\n\t<input type="radio" ${
								selected ? 'checked' : ''
							}/>\n</label>`}
						/></label
					>
				{/each}
				<label class="row disabled">
					<input type="radio" disabled />
					<Code content={`<label class="row">\n\t<input type="radio" disabled />\n</label>`} />
				</label>
				<label class="row disabled selected">
					<input type="radio" checked disabled />
					<Code
						content={`<label class="row">\n\t<input type="radio" checked disabled />\n</label>`}
					/>
				</label>
			</fieldset>
		</form>
	</div>

	<hr />

	<div class="box prose">
		<h3>disabled button</h3>
		<Code content={`<button disabled>\n\t:|\n</button>`} />
		<button disabled>:|</button>
		<Code content={`<button disabled>\n\ta bigger disabled button\n</button>`} />
		<button disabled>a bigger disabled button</button>
	</div>

	<hr />

	<div class="box">
		<div class="prose">
			<h3>
				<code>button</code> with CSS class <code>.selected</code>
			</h3>
		</div>
		<section style:margin-bottom="var(--spacing_4)">
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
		</section>
		<div class="prose">
			<section>
				<Code content={`<button class="selected">...</button>`} />
				<button class="width_full selected">a button with the <code>.selected</code> class</button>
			</section>
			<section>
				<p class="width_sm">
					<code>.selected</code> buttons with the <code>.deselectable</code> class continue to be clickable
					when selected:
				</p>
				<Code content={`<button class="selected deselectable">\n\t...\n</button>`} />
			</section>
			<section>
				<button
					class="width_full deselectable"
					class:selected={selected_deselectable_button}
					on:click={() => (selected_deselectable_button = !selected_deselectable_button)}
					>a <code>.deselectable</code>
					{#if selected_deselectable_button}<code>.selected</code>{:else}unselected{/if} button</button
				>
				<button class="width_full selected deselectable" disabled={true}
					>disabled <code>.deselectable</code> <code>.selected</code></button
				>
			</section>
		</div>
	</div>

	<hr />

	<section class="prose box">
		<h3><code>.plain</code> and <code>.icon_button</code></h3>
	</section>
	<br />
	<section class="box">
		<Code
			content={`<button class="plain">
	+
</button>`}
		/>
		<button class="plain">+</button>
		<br />
		<Code
			content={`<button class="icon_button">
	+
</button>`}
		/>
		<button class="icon_button">+</button>
		<br />
		<Code
			content={`<button class="plain icon_button">
	+
</button>`}
		/>
		<button class="plain icon_button">+</button>
		<br />
		<div class="prose box">
			<h4><code>disabled</code> variants</h4>
		</div>
		<br />
		<Code
			content={`<button class="plain" disabled>
	+
</button>`}
		/>
		<button class="plain" disabled>+</button>
		<br />
		<Code
			content={`<button class="icon_button" disabled>
	+
</button>`}
		/>
		<button class="icon_button" disabled>+</button>
		<br />
		<Code
			content={`<button class="plain icon_button" disabled>
	+
</button>`}
		/>
		<button class="plain icon_button" disabled>+</button>
		<br />
		<div class="prose box">
			<h4><code>.selected</code> variants</h4>
		</div>
		<br />
		<Code
			content={`<button class="plain selected">
	+
</button>`}
		/>
		<button class="plain selected">+</button>
		<br />
		<Code
			content={`<button class="icon_button selected">
	+
</button>`}
		/>
		<button class="icon_button selected">+</button>
		<br />
		<Code
			content={`<button class="plain icon_button selected">
	+
</button>`}
		/>
		<button class="plain icon_button selected">+</button>
		<br />
		<div class="prose box">
			<h4><code>.selected</code> and <code>.deselectable</code> variants</h4>
		</div>
		<br />
		<Code
			content={`<button class="plain selected deselectable">
	+
</button>`}
		/>
		<button class="plain selected deselectable">+</button>
		<br />
		<Code
			content={`<button class="icon_button selected deselectable">
	+
</button>`}
		/>
		<button class="icon_button selected deselectable">+</button>
		<br />
		<Code
			content={`<button class="plain icon_button selected deselectable">
	+
</button>`}
		/>
		<button class="plain icon_button selected deselectable">+</button>
		<br />
	</section>

	<hr />

	<div class="box prose">
		<section>
			<h3>
				<code>.buttonlike</code> CSS class
			</h3>
			<p class="width_sm">
				the <code>.buttonlike</code> class is useful when you want interactive builtin elements to be
				wrapped in a larger clickable area:
			</p>
		</section>
		<section class="padded_md panel">
			<Code content={`<label class="buttonlike">\n\t<input type="checkbox" />...\n</label>`} />
			<label class="buttonlike padded_md row box">
				<input type="checkbox" />
				<div class="padded_sm">this entire thing is buttonlike, not just the checkbox</div>
			</label>
		</section>
		<section class="padded_md panel">
			<Code content={`<label class="buttonlike disabled">...</label>`} />
			<label class="buttonlike padded_md row box disabled">
				<input type="checkbox" disabled />
				<div class="padded_sm">this is a <code>.disabled</code> buttonlike</div>
			</label>
		</section>
		<section class="padded_md panel">
			<Code content={`<div class="buttonlike selected padded_md">...</div>`} />
			<div class="buttonlike selected padded_md">
				<code>.buttonlike</code> with <code>.selected</code>
			</div>
		</section>
		<section class="padded_md panel">
			<Code content={`<div class="buttonlike deselectable selected padded_md">...</div>`} />
			<div class="buttonlike deselectable selected padded_md">
				<code>.buttonlike</code> with <code>.selected</code> and <code>.deselectable</code>
			</div>
		</section>
		<blockquote>TODO: add more <code>deselectable</code> signifiers?</blockquote>
	</div>
</Tome_Detail>
