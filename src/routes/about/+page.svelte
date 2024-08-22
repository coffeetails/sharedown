<script lang="ts">
    import { goto } from '$app/navigation';

</script>

<section class="text">
    <h1>About this site.</h1>
    <p>So, you might have some markdown you want to share? This is the right place!</p>
    <ol>
        <li>Hit the "Create new markdown"-button below.</li>
        <li>Paste (or write) someting in the input✏️ field.</li>
        <li>Check how it looks in the output📋 field. Or skip it. If you dare.</li>
        <li>Hit the "Create link & share"-button.</li>
    </ol>
    <strong>Anyone</strong> with the link will be able to access and share your text.
    
    <h2>Made by, and with</h2>
    <p>The frontend is made with SvelteKit by <a href="https://github.com/coffeetails">me</a>.</p>
    <p>The backend, <a href="https://github.com/DemmyDemon/boltpile">Boltpile</a> is made in Go by <a href="https://github.com/DemmyDemon/">Demmy</a>.</p>
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