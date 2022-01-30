import { Pokemon } from '../../types';
import { CardContainer, PokemonArtwork, PokemonName } from './styles';

import TypeBadges from '../TypeBadges.component';

interface Props {
  pokemon: Pokemon;
}

function PokemonCard({ pokemon }: Props) {
  return (
    <CardContainer
      to={`/pokemon/${pokemon.name}`}
      key={pokemon.name}
      types={pokemon.types}
    >
      <PokemonArtwork src={pokemon.sprites.artwork} alt={pokemon.name} />
      <PokemonName>
        {pokemon.name}
        <span> #{('00' + pokemon.id).slice(-3)}</span>
      </PokemonName>
      <TypeBadges types={pokemon.types} />
    </CardContainer>
  );
}

export default PokemonCard;
