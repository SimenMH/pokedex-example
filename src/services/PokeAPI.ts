import axios, { AxiosResponse } from 'axios';
import { PokemonResponse, Pokemon } from '../types';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

const filterPokemonDetails = (pokemon: PokemonResponse) => {
  return {
    id: pokemon.id,
    order: pokemon.order,
    name: pokemon.name,
    flavor_text: '',
    abilities: pokemon.abilities.map(ability => ability.ability.name),
    types: pokemon.types.map(type => type.type.name),
    stats: pokemon.stats.map(stat => ({
      value: stat.base_stat,
      name: stat.stat.name,
    })),
    height: pokemon.height,
    weight: pokemon.weight,
    sprites: {
      back_default: pokemon.sprites.back_default,
      front_default: pokemon.sprites.front_default,
      artwork: pokemon.sprites.other['official-artwork'].front_default,
    },
  };
};

// Fetch and return an array with the details of all pokemon of the first generation
const getAllPokemonAPI = async () => {
  const pokemonNames = await axios.get<{ pokemon_species: { name: string }[] }>(
    `/generation/1`
  );

  const requests: Promise<AxiosResponse<PokemonResponse>>[] =
    pokemonNames.data.pokemon_species.map(pokemon => {
      return axios.get(`/pokemon/${pokemon.name}`);
    });

  const response = await axios.all(requests);

  const pokemonDetails = response.map(res => {
    const pokemon = res.data;
    return filterPokemonDetails(pokemon);
  });

  return pokemonDetails;
};

// Fetch and return the flavor text of a specific pokemon
const getPokemonFlavorTextAPI = async (name: string) => {
  return axios
    .get<PokemonResponse>(`/pokemon-species/${name}`)
    .then(res => res.data.flavor_text_entries[0].flavor_text);
};

// Fetch and return the details of a specific pokemon
const getPokemonDetailsAPI = async (name: string) => {
  const response = await axios.get<PokemonResponse>(`/pokemon/${name}`);

  const pokemon: Pokemon = filterPokemonDetails(response.data);
  pokemon.flavor_text = await getPokemonFlavorTextAPI(name);

  return pokemon;
};

export { getAllPokemonAPI, getPokemonFlavorTextAPI, getPokemonDetailsAPI };
