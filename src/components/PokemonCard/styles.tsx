import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface TypesProp {
  types: string[];
}
export const CardContainer = styled(Link)<TypesProp>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 250px;
  margin: 10px;
  background: ${({ types, theme }) => {
    if (types.length > 0 && theme.cardColors[types[0]]) {
      return theme.cardColors[types[0]];
    }
    return theme.cardColors.default;
  }};
  border-radius: 10px;
  padding: 5px 10px;
  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 1040px) and (max-width: 1280px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 650px) {
    width: 80%;
    height: 80%;
  }
`;

export const PokemonArtwork = styled.img`
  width: 185px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1040px) and (max-width: 1280px) {
    width: 145px;
  }

  @media (max-width: 650px) {
    width: 85%;
  }
`;

export const PokemonName = styled.h2`
  color: #434343;
  font-size: 1.75rem;
  font-weight: 700;
  text-transform: capitalize;
  margin: 0;

  span {
    color: rgba(82, 82, 82, 0.5);
    font-size: 1.4rem;
  }

  @media (min-width: 1040px) and (max-width: 1280px) {
    font-size: 1.4rem;
    span {
      font-size: 1rem;
    }
  }
`;
