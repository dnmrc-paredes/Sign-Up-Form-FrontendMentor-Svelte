import sveltePreprocess from 'svelte-preprocess'
import sass from 'sass'

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    sass: {
      implementation: sass,
      renderSync: true
    }
  })
}
