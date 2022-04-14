<script>
	import { pokemonList } from '../stores/pokestore';
	// $: console.log($pokemonList);
</script>

<svelte:head><title>SvelteKit PokeDex</title></svelte:head>
<h1>SvelteKit PokeDex</h1>

{#each $pokemonList as pokemon}
	<p>{pokemon.name}</p>
{/each}
