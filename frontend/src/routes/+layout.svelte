<script>
	import '$styles/app.css';
	import { onNavigate } from '$app/navigation';
	import { Metadata } from '$components';
	import { Logo, Disabled } from '$assets';

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
		<button disabled>
			<span class="dis-icon"><Disabled /></span>
			RU
		</button>
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

	@media only screen and (max-width: 768px) {
		nav a {
			font-size: 1.5em;
		}
	}

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
		position: relative;
	}

	.dis-icon {
		display: none;
		position: absolute;
		top: 200%;
		left: 0%;
		transform: translate(-50%, -50%);
		color: #999;
		font-size: 1.5em;
	}

	button:hover .dis-icon {
		display: inline;
	}
</style>
