<!-- use this page for any route that are like /pokemon/:id -->
<script context="module">
	// this will run before the component is rendered and before the regular script is run
	export async function load({ params }) {
		const id = params.id;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const response = await fetch(url);
		const pokemon = await response.json();
		return { props: { pokemon } };
	}
</script>

<script>
	export let pokemon;
	const type = pokemon.types[0].type.name;
</script>

<h1 class="text-4xl text-center my-8 uppercase">{pokemon.name}</h1>
<p>
	Type: <strong>{type}</strong> | Height:<strong>{pokemon.height}</strong> |Weight:<strong
		>{pokemon.weight}</strong
	>
</p>
<img class="card-image" src={pokemon.sprites.front_default} alt={pokemon.name} />
