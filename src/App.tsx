import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { getAllPokemonAPI } from './services/PokeAPI';
import { Pokemon } from './types';

import NavBar from './components/NavBar.component';
import ListScreen from './screens/List/List.screen';
import DetailsScreen from './screens/Details/Details.screen';

export const PokemonContext = createContext<Pokemon[]>([]);

const Loading = styled.h1`
  color: #fff;
  text-align: center;
  margin-top: 10vh;
`;

const PageNotFound = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  margin-top: 10vh;
`;

function App() {
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getAllPokemon = async () => {
    setLoading(true);
    try {
      const pokemonList: Pokemon[] = await getAllPokemonAPI();
      pokemonList.sort((a, b) => a.order - b.order);
      setAllPokemon(pokemonList);
    } catch (error) {
      setError(true);
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <Router>
      <NavBar />
      {loading && <Loading>Catching 'em all, please wait...</Loading>}
      {error && (
        <Loading>Oops, something went wrong. Please try again...</Loading>
      )}
      {!loading && !error && (
        <PokemonContext.Provider value={allPokemon}>
          <Switch>
            <Route path='/' exact>
              <ListScreen getAllPokemon={() => getAllPokemon()} />
            </Route>
            <Route path='/pokemon/:name' component={DetailsScreen} />
            <Route path='*'>
              <PageNotFound>404 - Page Not Found</PageNotFound>
            </Route>
          </Switch>
        </PokemonContext.Provider>
      )}
    </Router>
  );
}

export default App;
