<script lang="ts">
	import type { Base } from '$customTypes';

	export let id: string = '';
	export let name: string = '';
	export let image: string = '';

	export let information: Base['information'] = {};
	export let description: Base['description'] = {};

	const bio = ({ details }: Base['description'] = {}): string[] =>
		Array.isArray(details) ? details : [details || ''];

	const format = ({ birth, death, place }: Base['information'] = {}): string =>
		`${birth || ''}${place ? ` (${place})` : ''}${death ? ` - ${death}` : ''}`;
</script>

{#key id}
	<div class="sticky">
		{#if image}
			<img src={image} alt={name} />
		{/if}
		<h1>{name}</h1>
		<h2>
			{format(information)}
		</h2>
	</div>
{/key}

<div>
	{#each bio(description) as paragraph}
		<p>{paragraph}</p>
	{/each}
</div>

<footer>
	<p>Проект создан для оцифровки и систематизации информации о родственниках.</p>

	<a
		class="issues"
		href="https://github.com/shohinsan/RootsRise/issues/new?assignees=&labels=issue&projects=&template=issue-temp.yaml"
		>Сообщить о проблеме 🚀</a
	>
	<a
		class="issues"
		href="https://github.com/shohinsan/RootsRise/issues/new?assignees=&labels=feedback&projects=&template=feedback-temp.yaml"
		>Оставить отзыв 🌟</a
	>
</footer>

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

	.issues {
		padding: 0.5rem;
		text-decoration: none;
	}

	.sticky > * {
		overflow: hidden;
		text-overflow: ellipsis;
	}


	footer {
		border-top: 1px solid var(--color-text);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		font-size: 1em;
		color: var(--color-text);
	}
</style>
