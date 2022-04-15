<script>
	import { pokemonList } from '../stores/pokestore';
	import PokemonCard from '../components/pokemonCard.svelte';
	// $: console.log($pokemonList);
	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			// search the pokemon
			filteredPokemon = $pokemonList.filter(
				(pokemon) =>
					pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					pokemon.id.toString().includes(searchTerm)
			);
		} else {
			filteredPokemon = [...$pokemonList];
		}
	}
</script>

<svelte:head><title>SvelteKit PokeDex</title></svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">SvelteKit PokeDex</h1>
<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	bind:value={searchTerm}
	placeholder="Search Pokemon"
/>
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
	{#each filteredPokemon as pokemon}
		<PokemonCard {pokemon} />
	{/each}
</div>
