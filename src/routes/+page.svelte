<script lang="ts">
    import type { json } from '@sveltejs/kit';
	import SvelteMarkdown from 'svelte-markdown';

	let source = `  # This is a header

This is a paragraph.

* This is a *list*
* With two **items**
1. And a ~~sublist~~
2. That is \`ordered\`
   * With another
   * Sublist inside

> and also a quote  
> by unknown

| And this is | A table | And this is | A table | And this is | A table |
|-------------|---------|-------------|---------|-------------|---------|
| With two    | columns | With two    | columns | With two    | columns |
| With two    | columns | With two    | columns | With two    | columns |
| With two    | columns | With two    | columns | With two    | columns |
| With two    | columns | With two    | columns | With two    | columns |
| With two    | columns | With two    | columns | With two    | columns |
| With two    | columns | With two    | columns | With two    | columns |
| With two    | columns | With two    | columns | With two    | columns |
| With two    | columns | With two    | columns | With two    | columns |

and just  
some more   
text  
to   
make  
it  
overflow  
\`\`\`  
function testingCodeblock() {  
	console.log("testing to add a codeblock");  
}  
\`\`\`  
Thank you for coming to my Ted Talk`;
	
</script>

<svelte:head>
	<title>ShareDown</title>
	<meta name="description" content="Share your markdown, quick and easy" />
</svelte:head>

<main>
	<form>
		<div class="toolbar">
			<p>This is a markdown paster for easy and anonymous sharing. After hitting <strong>Share</strong> below you'll get an unique link for your text and <em>anyone</em> with the link will be able to access and share your text.</p>
		</div>
		<div class="textBoxWrapper">
			<p class="description">Input ✏️</p>
			<p class="description">Output 📋</p>
			<textarea class="textInput" placeholder="Type your markdown here plz" required spellcheck="true" bind:value={source}></textarea>
			<section class="textOutput"><SvelteMarkdown {source} /></section>
		</div>
		<button on:click={() => console.log("this is a placeholder function")}>Create link & share</button>
	</form>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	form {
		display: flex;
		flex-direction: column;
		/* align-items: stretch; */
		/* align-content: stretch; */
		/* justify-content: center;
		align-content: center; */
		align-items: center;
	}

	.toolbar {
		position: relative;
		text-align: center;
		border-radius: 0.25rem;
		/* border: 1px solid gray; */
		margin: 1rem 0;
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
		/* align-self: stretch; */
		width: 80vw;
		max-width: 100rem;
		/* display: flex;
		justify-content: center; */
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
	/* .textOutput * {
		margin: 0.25rem;
	} */

	button {
		text-align: center;
		border-radius: 0.25rem;
		padding: 0.5rem 1rem;
		margin: 0.5rem auto;
		font-weight: bolder;
		font-size: 1.15rem;

	}

</style>
