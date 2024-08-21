<script>
	import githubImg from '$lib/images/github.svg'
	import '../app.css';

	export const prerender = true;
</script>

<div class="app">
	<a href="https://github.com/coffeetails"><img src={githubImg} alt="github logo" /></a>

	<header>
		<p>This is a markdown paster for easy and anonymous sharing. <strong>Anyone</strong> with the link will be able to access and share your text.</p>
		<p>The text will automagicly be removed after about a week.</p>
	</header>

	<main>
		<slot />
	</main>

</div>

<style>
	img {
		position: absolute;
		bottom: 0.25rem;
		right: 0.5rem;
		height: 2rem;
	}

	.app {
		display: flex;
		flex-direction: column;
		/* min-height: 100vh; */
		height: 100vh;
		overflow: scroll;
	}

	main {
		/* flex: 1; */
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 1rem auto;
		
		display: flex;
		flex-direction: column;
	}

	header {
		position: relative;
		background-color: #fafafa;
		padding: 0.5rem;
		margin: 0 auto;
		font-size: 0.8rem;
		text-align: center;
		box-shadow: var(--shadow-small);
	}
	header::before {
		content: " ";
		position: absolute;
		left: -1rem;
		top: 0;
		height: 100%;
		width: 1rem;
		border-bottom-left-radius: 100%;
		background-color: #fafafa;
	}
	header::after {
		content: " ";
		position: absolute;
		right: -1rem;
		top: 0;
		height: 100%;
		width: 1rem;
		border-bottom-right-radius: 100%;
		background-color: #fafafa;
	}

</style>
