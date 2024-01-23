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

	<a class="issues" href="https://github.com/shohinsan/RootsRise/issues/new?assignees=&labels=issue&projects=&template=issue-temp.yaml">Сообщить о проблеме</a>
	<a class="issues" href="https://github.com/shohinsan/RootsRise/issues/new?assignees=&labels=feedback&projects=&template=feedback-temp.yaml">Оставить отзыв</a>
</footer>

<style>
	div {
		z-index: 99;
		margin: 2em auto;
		max-width: min(calc(100vw - 8em), 100ch);
		padding: 2em;
		border-radius: 0.6em;
		background-color: color-mix(in oklab, var(--color-bg), var(--color-text) 5%);
		font-family: 'SFProFont', sans-serif;
	}

	.issues {
		padding: 0.5rem;
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

	p {
		margin: 0;
		padding: 0.5em 0;
		font-size: 1.2em;
		text-align: start;
	}

	h1 {
		margin: 0;
		font-size: 2em;
	}

	h2 {
		margin: 0;
		padding: 0;
		font-size: 1.5em;
		opacity: 0.7;
	}

	img {
		width: 10em;
		height: 10em;
		border-radius: 1rem;
	}

	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		font-size: 1em;
		color: var(--color-text);
		font-family: 'SFProFont', sans-serif;
	}
</style>
