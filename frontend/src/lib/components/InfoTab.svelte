<script lang="ts">
	import { Footer } from '$components';
	import type { Base } from '$customTypes';

	export let id: string = '';
	export let name: string = '';
	export let image: string = '';
	export let birth: string = '';
	export let death: string = '';
	export let place: string = '';
	export let details: string | string[] = '';

	const bio = ({ details }: Base = {}): string[] =>
		typeof details === 'string' ? details.split('\n') : details ?? [];

	const format = ({ birth, death, place }: Base = {}): string =>
		`${birth || ''}${place ? ` (${place})` : ''}${death ? ` - ${death}` : ''}`;
</script>

{#key id}
	<div class="sticky">
		{#if image}
			<img src={image} alt={name} />
		{/if}
		<h1>{name}</h1>
		<h2>
			{format({ birth, death, place })}
		</h2>
	</div>
{/key}

<div>
	{#each bio({ details }) as paragraph}
		<p>{paragraph}</p>
	{/each}
</div>

<Footer />

<style>
	div {
		margin: 2em auto;
		max-width: min(calc(100vw - 8em), 100ch);
		padding: 2em;
		border-radius: 0.6em;
		background-color: color-mix(in oklab, var(--color-bg), var(--color-text) 5%);
	}

	.sticky {
		position: sticky;
		bottom: 2em;
		padding-block: 0.6em;
		box-shadow: color-mix(in oklab, black, transparent 50%) 0px 7px 20px 2px;
	}

	.sticky > * {
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
