<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
    import { goto } from '$app/navigation';
    import { pile, url } from '$lib/APIdata';

	let source = "";
	
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
	
	let writeMode:boolean = true;
</script>


<svelte:head>
	<title>ShareDown</title>
	<meta name="description" content="Share your markdown, quick and easy" />
</svelte:head>


<form>
	<div class="textBoxWrapper">
		<button class="description" id="input" on:click={ () => {writeMode = true} }>Input ✏️</button>
		<button class="description" id="output" on:click={ () => {writeMode = false} }>Output 📋</button>
		<textarea class={writeMode ? "textInput writeMode" : "textInput"} placeholder="Type your markdown here plz" required spellcheck="true" bind:value={source}></textarea>
		<section class="textOutput"><SvelteMarkdown {source} /></section>
	</div>
	<button on:click={() => submitText(source)}>Create link & share</button>
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

		padding: 0.25rem 0.5rem;
		border: 1px solid gray;
		border-radius: 0.25rem;
		background-color: #fafafa;
		z-index: 10;
		font-size: 1.15rem;
		font-weight: normal;
		box-shadow: var(--shadow-small);
		border: var(--border-style);
		background-color: var(--color-accent);
		user-select: none;
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
	.description {
		align-self: start;
		margin-top: -1.5rem;

		background-color: var(--color-accent);
		user-select: none;
		cursor: pointer;
	}
	#input {
		justify-self: start;
		margin-left: 1rem;
	}
	#output {
		justify-self: end;
		margin-right: 1rem;
	}

	.textBoxWrapper {
		width: 80vw;
		max-width: 100rem;
		display: grid;
		grid-template-columns: none;
		place-items: center;
	}
	.textBoxWrapper > * {
		grid-column: 1 / -1;
		grid-row: 1 / -1;

	}
	.textInput, .textOutput {
		width: 80vw;
		background-color: #fafafa;
	}
	.writeMode {
		z-index: 8;
	}
}

</style>
