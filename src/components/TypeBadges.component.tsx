import styled from 'styled-components';

const badgeColors: { [key: string]: string } = {
  default: '#a8a878',
  normal: '#a8a878',
  grass: '#81d582',
  poison: '#B97FC9',
  fire: '#F3A46D',
  water: '#4592c4',
  flying: '#a890f0',
  bug: '#a8b820',
  electric: '#f8d030',
  ground: '#e0c068',
  fairy: '#ff9999',
  fighting: '#ff7c7c',
  psychic: '#ff6699',
  steel: '#b8b8d0',
  ice: '#98d8d8',
  ghost: '#663399',
  rock: '#b8a038',
  dragon: '#ab66ff',
};

const BadgeContainer = styled.div`
  display: flex;
`;

const TypeBadge = styled.div<{ type: string; large: boolean }>`
  color: #3a3a3a;
  font-size: ${({ large }) => (large ? '1.2rem' : '0.8rem')};
  text-transform: capitalize;
  margin: 0 2.5px;
  padding: 1.5px 10px;
  background: ${({ type }) => {
    if (badgeColors[type]) {
      return badgeColors[type];
    }
    return badgeColors.default;
  }};
  border-radius: 16px;

  @media (max-width: 675px) {
    font-size: ${({ large }) => (large ? '1rem' : '0.8rem')};
  }
`;

interface Props {
  types: string[];
  large?: boolean;
}

function TypeBadges({ types, large = false }: Props) {
  return (
    <BadgeContainer>
      {types.map(type => {
        return (
          <TypeBadge key={type} type={type} large={large}>
            {type}
          </TypeBadge>
        );
      })}
    </BadgeContainer>
  );
}

export default TypeBadges;
