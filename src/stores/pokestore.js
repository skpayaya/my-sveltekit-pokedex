import { writable } from 'svelte/store';

export const pokemonList = writable([]);

const fetchPokemon = async () => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
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
	pokemonList.set(loadedPokemon);
};
fetchPokemon();
