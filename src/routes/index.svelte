<script>
	import { pokemonList } from '../stores/pokestore';
	import PokemonCard from '../components/pokemonCard.svelte';
	// $: console.log($pokemonList);
</script>

<svelte:head><title>SvelteKit PokeDex</title></svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">SvelteKit PokeDex</h1>

{#each $pokemonList as pokemon}
	<PokemonCard {pokemon} />
{/each}
