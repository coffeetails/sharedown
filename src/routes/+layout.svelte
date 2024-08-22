<script>
	import githubImg from '$lib/images/github.svg'
	import '../app.css';

	export const prerender = true;
</script>

<div class="app">
	
	<header>
		<p><strong>Anyone</strong> with the link will be able to access and share your text. <a href="/about">Read more.</a></p>
	</header>
	
	<main>
		<slot />
	</main>
	
	<a href="https://github.com/coffeetails"><img src={githubImg} alt="github logo" /></a>
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
		height: 100dvh;
		overflow: scroll;
	}

	main {
		/* flex: 1; */
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		margin-top: 1rem;
		
		display: flex;
		flex-direction: column;
	}

	header {
		position: relative;
		background-color: #fafafa;
		padding: 0.5rem;
		margin: 0 auto;
		max-width: 90vw;
		font-size: 0.8rem;
		text-align: center;
		box-shadow: var(--shadow-small);
		border-bottom: var(--border-style);
	}
	header::before {
		content: " ";
		position: absolute;
		left: -2vw;
		top: 0;
		height: 100%;
		width: 2vw;
		border-bottom-left-radius: 100%;
		border-left: var(--border-style);
		background-color: #fafafa;
	}
	header::after {
		content: " ";
		position: absolute;
		right: -2vw;
		top: 0;
		height: 100%;
		width: 2vw;
		border-bottom-right-radius: 100%;
		border-right: var(--border-style);
		background-color: #fafafa;
	}
	@media only screen and (max-width: 700px) {
		.app {
			height: 100dvh;
			overflow: hidden;
		}
		:global(body) {
			height: 100dvh;
			overflow: hidden;
		}
	}
</style>
