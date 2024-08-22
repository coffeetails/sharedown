<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
	//@ts-ignore
	import SvelteCopyUrlButton from 'svelte-copy-url-button';
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
<div class="buttonWrapper">
	<button class="buttonStyle" on:click={() => goto('/')}>Create new markdown</button>
	<SvelteCopyUrlButton class="buttonStyle" defaultText="Copy link" copiedText="Copied!" icon={false} url={$page.url.href} />
</div>
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

    .buttonWrapper {
        margin: 0 auto;
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        /* gap: 1rem; */
        justify-content: center;
        align-items: center;
    }
	.buttonWrapper > * {
		margin: 0 1rem;
	}
</style>