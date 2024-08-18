import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

// export default defineConfig({
// 	plugins: [sveltekit()]
// });

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	return {
	  define: {
		'process.env.VITE_SUPABASE_URL': JSON.stringify(env.VITE_SUPABASE_URL),
		'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(env.VITE_SUPABASE_ANON_KEY),
	  },
	  plugins: [sveltekit()],
	}
  })