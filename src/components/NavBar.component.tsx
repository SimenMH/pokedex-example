import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 85px;
  background: rgba(39, 39, 39, 0.9);
`;

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  text-decoration: none;
  margin: 0 25px;

  @media (max-width: 650px) {
    font-size: 2rem;
  }
`;

function NavBarComponent() {
  return (
    <NavBar>
      <StyledLink to='/'>Pokedex Example</StyledLink>
    </NavBar>
  );
}

export default NavBarComponent;
