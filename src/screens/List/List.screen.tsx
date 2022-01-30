import { useContext, useEffect, useState } from 'react';
import { PokemonContext } from '../../App';
import { ScreenContainer } from '../../ui';
import { SearchBar, SearchInput, PokemonList } from './styles';

import PokemonCard from '../../components/PokemonCard/PokemonCard.component';
import { Pokemon } from '../../types';

interface Props {
  getAllPokemon: () => void;
}

function ListScreen({ getAllPokemon }: Props) {
  const allPokemon = useContext(PokemonContext);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>(allPokemon);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (!searchInput) return setFilteredPokemon(allPokemon);
    const searchDebounce: NodeJS.Timeout = setTimeout(() => {
      const newFilter = allPokemon.filter(pokemon =>
        pokemon.name.includes(searchInput.toLowerCase().trim())
      );
      setFilteredPokemon(newFilter);
    }, 300);

    return () => {
      // Cleanup function
      clearTimeout(searchDebounce);
    };
  }, [allPokemon, searchInput]);

  useEffect(() => {
    if (allPokemon.length <= 0) {
      getAllPokemon();
    }
  }, [allPokemon, getAllPokemon]);

  return (
    <ScreenContainer>
      <SearchBar>
        <SearchInput
          type='text'
          name='search'
          placeholder='Search...'
          value={searchInput || ''}
          onChange={e => setSearchInput(e.target.value)}
        />
      </SearchBar>
      <PokemonList>
        {filteredPokemon.map(pokemon => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </PokemonList>
    </ScreenContainer>
  );
}

export default ListScreen;
