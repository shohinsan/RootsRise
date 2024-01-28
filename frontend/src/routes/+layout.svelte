<script>
	import '$styles/app.css';
	import { onNavigate } from '$app/navigation';
	import { Metadata } from '$components';
	import { Logo, Loading } from '$assets';

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
		<button>English</button>
		<button disabled>Русский</button>
	</div>
</nav>

<slot />

<style>
	nav {
		justify-content: space-between;
		display: flex;
		align-items: center;
		padding: 10px 20px;
		background-color: #333;
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
