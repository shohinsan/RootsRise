<script>
	export let width = 20;
	export let height = 20;
	export let fill = 'var(--color-loading-bg, white)';
</script>

<svg
	{fill}
	{width}
	{height}
	version="1.1"
	class="disabled"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	viewBox="0 0 167.751 167.751"
	xml:space="preserve"
>
	<path
		d="M0,83.875c0,46.249,37.626,83.875,83.875,83.875s83.875-37.626,83.875-83.875S130.125,0,83.875,0S0,37.626,0,83.875z
	 M83.875,152.751C45.897,152.751,15,121.854,15,83.875c0-16.292,5.698-31.272,15.191-43.078l96.762,96.762
	C115.147,147.052,100.168,152.751,83.875,152.751z M152.75,83.875c0,16.292-5.698,31.272-15.19,43.078L40.797,30.191
	C52.603,20.698,67.583,15,83.875,15C121.853,15,152.75,45.897,152.75,83.875z"
	/>
</svg>

<style>
	@media (prefers-color-scheme: light) {
		.disabled {
			--color-loading-bg: black;
		}
	}
</style>
