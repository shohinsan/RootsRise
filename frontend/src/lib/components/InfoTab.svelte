<script lang="ts">
	import type { Base } from '$customTypes';
	import { Footer } from '$components';

	export let id: string = '';
	export let name: string = '';
	export let image: string = '';
	export let description: string | string[] = '';
	export let birth: string = '';
	export let death: string = '';

	const bio = ({ description }: Base = {}): string[] =>
		Array.isArray(description) ? description : [description || ''];

	const format = ({ birth, death }: Base = {}): string => {
		if (birth && death) {
			return `${birth} - ${death}`;
		}
		if (birth) {
			return `Born ${birth}`;
		}
		if (death) {
			return `Died ${death}`;
		}
		return '';
	};
</script>

{#key id}
	<div class="sticky">
		{#if image}
			<img src={image} alt={name} />
		{/if}
		<h1>{name}</h1>
		<h2>
			{format({ birth, death })}
		</h2>
	</div>
{/key}

<div>
	{#each bio({ description }) as paragraph}
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

    @media only screen and (max-width: 768px) {
        div {
            font-size: 0.75em; 
        }

        .sticky {
            bottom: 1.5em; 
            padding-block: 0.4em;
        }
    }
</style>