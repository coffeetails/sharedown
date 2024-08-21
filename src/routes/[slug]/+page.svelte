<script lang="ts">
    import { goto } from '$app/navigation';
    import SvelteMarkdown from 'svelte-markdown';

	export let data;
	const markdownData = data.markdownData;
	console.log(data.markdownData);
	
	function prepareDate() {
		if(!markdownData.date) {
			return "Error: unable to fetch date";
		}
		let date = new Date(markdownData.date);
		let weekdayNames = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];
		let weekday = weekdayNames[date.getDay()]

		return `${weekday}, ${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
	}
	
	const displayDate = prepareDate();
	const source = markdownData.text? markdownData.text : "Error: unable to fetch markdown";
</script>

<p class="description">📋 {displayDate}</p>
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
		box-shadow: var(--shadow);
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
		box-shadow: var(--shadow-small);
		background-color: var(--color-accent);
		user-select: none;
	}
</style>