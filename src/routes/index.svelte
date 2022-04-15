<script context="module">
	export async function load({ params }) {
		const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
		const response = await fetch(url);
		const data = await response.json();
		const loadedPokemon = data.results.map((pokemon, index) => {
			return {
				id: index + 1,
				name: pokemon.name,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
					index + 1
				}.png`
			};
		});
		return { props: { pokemonList: loadedPokemon } };
	}
</script>

<script>
	import PokemonCard from '../components/pokemonCard.svelte';
	export let pokemonList;
	// $: console.log($pokemonList);
	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			// search the pokemon
			filteredPokemon = pokemonList.filter(
				(pokemon) =>
					pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					pokemon.id.toString().includes(searchTerm)
			);
		} else {
			filteredPokemon = [...pokemonList];
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
