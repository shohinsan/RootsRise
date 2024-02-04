<script>
	import '$styles/app.css';
	import { onNavigate } from '$app/navigation';
	import { Metadata } from '$components';
	import { Logo } from '$assets';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Metadata />

<nav>
	<div>
		<a href="/">
			<Logo /> <span>Genealogy Tree</span>
		</a>
	</div>
	<div>
		<button>EN</button>
		<button disabled>RU</button>
	</div>
</nav>

<slot />

<style>
	nav {
		justify-content: space-between;
		display: flex;
		align-items: center;
		padding: 10px 20px;
		background-color: var(--color-nav-bg);
		color: var(--color-nav-text);
		position: sticky;
		top: 0;
		z-index: 1;
	}

	nav a {
		text-decoration: none;
		color: inherit;
		display: flex;
		align-items: center;
		font-size: 2em;
	}

	/* Media query for screens with a maximum width of 768 pixels */
	@media only screen and (max-width: 768px) {
		nav a {
			font-size: 1.5em;
		}
	}

	/* Media query for screens with a maximum width of 480 pixels */
	@media only screen and (max-width: 480px) {
		nav a {
			font-size: 1.2em;
		}
	}

	@media (prefers-color-scheme: light) {
		nav {
			--color-nav-bg: #f1f5f9;
			--color-nav-text: #333;
		}
	}

	span {
		margin-left: 1rem;
		user-select: none;
	}

	button {
		user-select: none;
		font-size: 1em;
		cursor: pointer;
	}
</style>
