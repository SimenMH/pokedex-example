import styled from 'styled-components';

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: rgba(39, 39, 39, 0.95);
`;

export const SearchInput = styled.input`
  color: #ddd;
  font-size: 1.75rem;
  width: 400px;
  margin: 0 30px;
  background: none;
  border: 0;
  border-bottom: 2px solid #888;
  transition: 0.3s;

  &:focus {
    outline: none;
    border-color: #ccc;
  }
  &:placeholder-shown {
    width: 250px;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const PokemonList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px 0;
  max-width: 1080px;
`;
