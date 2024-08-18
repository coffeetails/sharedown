<script lang="ts">
    import { supabase } from '$lib/supabaseClient.js';
	import SvelteMarkdown from 'svelte-markdown';
	import { redirect, text } from '@sveltejs/kit';
    import { goto } from '$app/navigation';

	let source = "";

	async function submitText(textSource: string) {
		
		if(textSource.length > 0) { 
			const { data, error } = await supabase
			.from('markdowntable')
			.insert([
				{ text: textSource },
			])
			.select();
			
			if(error) {
				console.error("supabase error", error);
			} else {
				console.log("supabase data", data[0].uuid);
				goto('/'+data[0].uuid);
			}
		}
	}
	
</script>

<svelte:head>
	<title>ShareDown</title>
	<meta name="description" content="Share your markdown, quick and easy" />
</svelte:head>

<form>
	<div class="textBoxWrapper">
		<p class="description">Input ✏️</p>
		<p class="description">Output 📋</p>
		<textarea class="textInput" placeholder="Type your markdown here plz" required spellcheck="true" bind:value={source}></textarea>
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
		height: 700px;
		border: 1px solid gray;
		resize: horizontal;
		background-color: #fafafabd;
		font-family: arial;
	}
	.textInput {
		border-radius: 0.25rem 0 0 0.25rem;
	}
	.textOutput {
		border-radius: 0 0.25rem 0.25rem 0;
		overflow: scroll;
	}

</style>
