<script>
	import { pokemonList } from '../stores/pokestore';
	import PokemonCard from '../components/pokemonCard.svelte';
	// $: console.log($pokemonList);
</script>

<svelte:head><title>SvelteKit PokeDex</title></svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">SvelteKit PokeDex</h1>
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
	{#each $pokemonList as pokemon}
		<PokemonCard {pokemon} />
	{/each}
</div>
