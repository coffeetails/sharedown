<script lang="ts">
    import { goto } from '$app/navigation';

</script>

<section class="text">
    About this site.
</section>
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
</style>