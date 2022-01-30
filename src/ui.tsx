import styled from 'styled-components';

export const ScreenContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85vw;
  max-width: 1400px;
  height: fit-content;
  min-height: calc(100vh - 85px - 40px);
  margin: 20px auto;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 650px) {
    width: 100vw;
    min-height: calc(100vh - 85px);
    margin: 0;
    border-radius: 0px;
  }
`;
