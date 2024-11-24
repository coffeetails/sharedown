<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
    import { goto } from '$app/navigation';
    import { pile, url } from '$lib/APIdata';
    import { page } from '$app/stores';

	async function submitText(textSource: string) {
		
		if(textSource.length > 0) {
			const blob = new Blob ([textSource], { type: "text/plain" });
			const formData = new FormData();
			formData.append("data", blob);
			
			fetch(url + pile, {
				method: "POST",
				body: formData,
			})
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				if(json.success) {
					goto('/' + json.entry);
				} else {
					console.log("something went wrong", json);
				}
				
			});
		}
	}

	let source = "";
	let writeMode:boolean = true;
	const smallDeviceWidth: number = 700;
	$: outerWidth = 0;
</script>


<svelte:head>
	<title>ShareDown</title>
	<meta name="description" content="Share your markdown, quick and easy" />
</svelte:head>

<svelte:window bind:outerWidth />


<form>
	<div class="textBoxWrapper">
		<button 
			class={writeMode ? "description buttonStyle disabled" : "description buttonStyle"} 
			id="input" 
			on:click={ () => {writeMode = true} } 
			disabled={writeMode && outerWidth <= smallDeviceWidth}
		>Input ✏️
		</button>

		<button 
			class={writeMode ? "description buttonStyle" : "description buttonStyle disabled"} 
			id="output" 
			on:click={ () => {writeMode = false} } 
			disabled={!writeMode && outerWidth <= smallDeviceWidth}
		>Output 📋
		</button>

		<textarea 
			class={writeMode ? "textInput" : "textInput hidden"} 
			placeholder="Type your markdown here plz" 
			spellcheck="true" 
			bind:value={source}
		></textarea>

		<section class={writeMode ? "textOutput hidden" : "textOutput"} ><SvelteMarkdown {source} /></section>
	</div>

	<button class="submit buttonStyle" on:click={() => submitText(source)}>Create link & share</button>
</form>


<style>

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.description {
		justify-self: start;
		align-self: end;
		margin-bottom: -1rem;
		margin-left: 1rem;

		position: relative;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		background-color: #fafafa;
		z-index: 10;
		font-size: 1.15rem;
		font-weight: normal;
		box-shadow: var(--shadow-small);
		border: var(--border-style);
		background-color: var(--color-accent);
		user-select: none;
		cursor: default;
	}

	.textBoxWrapper {
		width: 80vw;
		max-width: 100rem;
		display: grid;
		grid-template-columns: auto auto;
	}
	.textInput, .textOutput {
		position: relative;
		margin: 0;
		padding: 1.25rem 0.75rem;
		width: 40vw;
		max-width: 50rem;
		height: 60vh;
		border: 1px solid gray;
		resize: horizontal;
		background-color: #fafafabd;
		font-family: arial;
		box-shadow: var(--shadow);
	}
	.textInput {
		border-radius: 0.25rem 0 0 0.25rem;
	}
	.textOutput {
		border-radius: 0 0.25rem 0.25rem 0;
		overflow: scroll;
	}

	
@media only screen and (max-width: 700px) {
	
	:global(.app) {
		height: 100dvh;
		overflow: hidden;
	}
	:global(body) {
		height: 100dvh;
		overflow: hidden;
	}

	.description {
		align-self: start;
		margin-top: -1.5rem;

		background-color: var(--color-accent);
		user-select: none;
		cursor: pointer;
		position: sticky;
		top: 1rem;
	}
	.disabled {
		/* cursor: not-allowed; */
		cursor: default;
	}
	.disabled::after {
		content: "";
		position: absolute;
		top: -1px;
		bottom: -1px;
		left: -1px;
		right: -1px;
		background-color: #ffffff56;
		border-radius: 0.25rem;
	}
	#input {
		justify-self: start;
		margin-left: 1rem;
	}
	#output {
		justify-self: end;
		margin-right: 1rem;
	}

	.submit {
		flex-shrink: 1;
		position: absolute;
		bottom: 0;
		z-index: 9;
	}

	.textBoxWrapper {
		width: 95vw;
		max-width: 100rem;
		display: grid;
		grid-template-columns: none;
		/* place-items: center; */
		align-content: top;
	}
	.textBoxWrapper > * {
		grid-column: 1 / -1;
		grid-row: 1 / -1;

	}
	.textInput, .textOutput {
		width: 95vw;
		background-color: #fafafa;
		transition: 0.5s;
		/* height: 100%; */
		/* height: max-content; */
		/* height: 65dvh; */
	}
	.hidden {
		/* display: none; */
		z-index: -1;
		opacity: 0;
		/* height: 0; */
	}
}

</style>
