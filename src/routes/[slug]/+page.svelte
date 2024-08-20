<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import SvelteMarkdown from 'svelte-markdown';

	export let data;
	// let markdowntable = data.data[0];
	// let date = new Date(markdowntable.created_at);
	
	console.log(data.markdownData);
	

	let source = "ohai";
</script>

<p class="description">📋 {data.markdownData.status + " " + data.markdownData.statusText}</p>
<section class="text"><SvelteMarkdown {source} /></section>
<button on:click={() => goto('/')}>Create new markdown</button>

<style>
	.text {
		position: relative;
		margin: 0;
		padding: 1.25rem 0.75rem;
		max-width: 100rem;
		border: 1px solid gray;
		border-radius: 0.25rem;
		resize: horizontal;
		background-color: #fafafabd;
		font-family: arial;
	}

	.description {
		align-self: flex-end;
		margin-bottom: -1rem;
		margin-right: 1rem;

		padding: 0.25rem 0.5rem;
		border: 1px solid gray;
		border-radius: 0.25rem;
		background-color: #fafafa;
		z-index: 10;
		font-size: 1.15rem;
	}
</style>