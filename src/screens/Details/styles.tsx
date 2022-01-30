import styled from 'styled-components';

interface TypesProp {
  types: string[];
}

export const PokemonName = styled.h1`
  color: #434343;
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 5px;

  span {
    color: #6c6c6c;
  }
  @media (max-width: 675px) {
    font-size: 1.7rem;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 100px;
  border: none;
  background: none;
  cursor: pointer;

  img {
    transition: 0.2s;
    height: 55%;
  }

  &:hover {
    img {
      height: 65%;
    }
  }

  @media (max-width: 675px) {
    width: 75px;
    height: 75px;
  }

  @media (max-width: 375px) {
    width: 60px;
    height: 60px;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 22px;
  max-width: 675px;
  margin: 15px;
  margin-top: 30px;

  @media (max-width: 675px) {
    flex-direction: column;
    align-items: center;
    max-width: 80%;
  }
`;

export const DetailsLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px;

  min-width: 300px;

  img {
    border: 1px solid #a6a6a6;
    box-sizing: border-box;
  }

  @media (max-width: 675px) {
    width: 100%;
    min-width: 0;
    max-width: 300px;
    margin-right: 0;
  }
`;

export const PokemonArtwork = styled.img<TypesProp>`
  width: 100%;
  background: ${({ types, theme }) => {
    if (types.length > 0 && theme.cardColors[types[0]]) {
      return theme.cardColors[types[0]];
    }
    return theme.cardColors.default;
  }};
`;

export const PokemonSprite = styled.img<TypesProp>`
  width: 50%;
  background: ${({ types, theme }) => {
    const opacity = '30';
    if (types.length > 0 && theme.cardColors[types[0]]) {
      return theme.cardColors[types[0]] + opacity;
    }
    return theme.cardColors.default + opacity;
  }};
`;

export const DetailsRightContainer = styled.div`
  width: 100%;
  max-width: 350px;
`;

export const PokemonDescription = styled.div`
  margin-top: 5px;
`;

export const LineSeperator = styled.div`
  width: 100%;
  height: 1px;
  margin: 15px 0;
  background: #000;
`;

export const StatsContainer = styled.div`
  margin: 0 5px;
`;

export const StatsList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 102px;
  padding: 0;

  @media (min-width: 675px) and (max-width: 830px) {
    max-height: 100%;
  }
  @media (max-width: 465px) {
    max-height: 100%;
  }
`;

export const StatItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin-bottom: 8px;
  box-sizing: border-box;
  list-style: none;

  @media (min-width: 675px) and (max-width: 830px) {
    width: 150px;
  }
  @media (max-width: 465px) {
    width: 150px;
  }
`;

export const Abilities = styled.p`
  text-transform: capitalize;
`;
