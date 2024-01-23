<script lang="ts">
	import type { Base } from '$customTypes';
	export let members: Base[] = [];
	export const child: boolean = false;
</script>

<ul class={$$props.class}>
	{#each members as member}
		<li>
			<slot {member} />
			{#if member.children}
				<svelte:self members={member.children} let:member>
					<slot {member} />
				</svelte:self>
			{/if}
		</li>
	{/each}
</ul>

<style>
	:root {
		--connectorOffset: 2rem;
	}

	li {
		position: relative;
		padding-inline: 0.1rem;
		padding-top: var(--connectorOffset);
		display: inline-block;
	}

	li::before,
	li::after {
		content: '';
		position: absolute;
		top: 0;
		right: 50%;
		border-top: 1px solid #ccc;
		width: 50%;
		height: var(--connectorOffset);
	}

	li::after {
		right: auto;
		left: 50%;
		border-left: 1px solid #ccc;
	}

	li:only-child::after,
	li:only-child::before {
		display: none;
	}

	li:only-child {
		padding-top: 0;
	}

	li:first-child::before,
	li:last-child::after {
		border: 0 none;
	}

	li:last-child::before {
		border-right: 1px solid #ccc;
		border-radius: 0 5px 0 0;
		-webkit-border-radius: 0 5px 0 0;
		-moz-border-radius: 0 5px 0 0;
	}

	li:first-child::after {
		border-radius: 5px 0 0 0;
		-webkit-border-radius: 5px 0 0 0;
		-moz-border-radius: 5px 0 0 0;
	}

	ul:not(.treeRoot):has(> *):before {
		content: '';
		border-left: 1px solid #ccc;
		position: absolute;
		bottom: 100%;
		left: 50%;
		width: 0;
		height: var(--connectorOffset);
	}

	ul:not(.treeRoot) {
		margin-top: var(--connectorOffset);
		padding: 0 0 0 1px;
		display: flex;
		position: relative;
	}
</style>
