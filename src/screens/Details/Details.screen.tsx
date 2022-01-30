import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { History } from 'history';
import { PokemonContext } from '../../App';
import { Pokemon } from '../../types';
import { ScreenContainer } from '../../ui';
import {
  BackButton,
  PokemonName,
  DetailsContainer,
  DetailsLeftContainer,
  PokemonArtwork,
  PokemonSprite,
  DetailsRightContainer,
  PokemonDescription,
  LineSeperator,
  StatsList,
  StatItem,
  StatsContainer,
  Abilities,
} from './styles';
import {
  getPokemonDetailsAPI,
  getPokemonFlavorTextAPI,
} from '../../services/PokeAPI';

import TypeBadges from '../../components/TypeBadges.component';

import BackArrow from '../../assets/back-arrow.svg';

interface Props {
  history: History;
}

function DetailsScreen({ history }: Props) {
  const [displayedPokemon, setDisplayedPokemon] = useState<
    Pokemon | undefined
  >();
  const [loading, setLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const allPokemon = useContext(PokemonContext);
  const { name } = useParams<{ name: string }>();

  const getStatName = (statName: string) => {
    switch (statName) {
      case 'hp':
        return 'HP';
      case 'attack':
        return 'Attack';
      case 'defense':
        return 'Defense';
      case 'special-attack':
        return 'Sp Atk';
      case 'special-defense':
        return 'Sp Def';
      case 'speed':
        return 'Speed';
      default:
        return statName;
    }
  };

  useEffect(() => {
    const findPokemonDetails = async () => {
      setLoading(true);
      try {
        const pokemon = allPokemon.find(pokemon => pokemon.name === name);

        if (pokemon) {
          if (!pokemon.flavor_text) {
            pokemon.flavor_text = await getPokemonFlavorTextAPI(pokemon.name);
          }
          setDisplayedPokemon(pokemon);
        } else {
          const foundPokemon = await getPokemonDetailsAPI(name);
          if (foundPokemon) {
            setDisplayedPokemon(foundPokemon);
          } else {
            setNotFound(true);
          }
        }
      } catch (err) {
        setNotFound(true);
      }
      setLoading(false);
    };
    findPokemonDetails();
  }, [allPokemon, name]);

  return (
    <ScreenContainer>
      <BackButton onClick={history.goBack}>
        <img src={BackArrow} alt={'back-button'} />
      </BackButton>
      {loading && <h1>Catching Pokemon, please wait...</h1>}
      {notFound && <h1>Could not find Pokemon!</h1>}
      {displayedPokemon && (
        <>
          <PokemonName>
            {displayedPokemon.name}
            <span> #{('00' + displayedPokemon.id).slice(-3)}</span>
          </PokemonName>
          <TypeBadges types={displayedPokemon.types} large={true} />
          <DetailsContainer>
            <DetailsLeftContainer>
              <PokemonArtwork
                src={displayedPokemon.sprites.artwork}
                types={displayedPokemon.types}
              />
              <div>
                <PokemonSprite
                  src={displayedPokemon.sprites.front_default}
                  types={displayedPokemon.types}
                />
                <PokemonSprite
                  src={displayedPokemon.sprites.back_default}
                  types={displayedPokemon.types}
                />
              </div>
            </DetailsLeftContainer>
            <DetailsRightContainer>
              <PokemonDescription>
                {displayedPokemon.flavor_text.replace('\f', ' ')}
              </PokemonDescription>
              <LineSeperator />
              <StatsContainer>
                <StatsList>
                  {displayedPokemon.stats.map(stat => {
                    const statName = getStatName(stat.name);
                    return (
                      <StatItem key={statName}>
                        <strong>{statName}:</strong>
                        {stat.value}
                      </StatItem>
                    );
                  })}
                </StatsList>
                <Abilities>
                  <strong>Abilities: </strong>
                  {displayedPokemon.abilities
                    .map(ability => {
                      return ability.split('-').join(' ');
                    })
                    .join(', ')}
                </Abilities>
              </StatsContainer>
            </DetailsRightContainer>
          </DetailsContainer>
        </>
      )}
    </ScreenContainer>
  );
}

export default DetailsScreen;
