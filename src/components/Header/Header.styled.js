import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  height: 60px;
  padding: 10px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  backdrop-filter: blur(10px);
  background-color: #00466e1a;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 5px,
    rgba(0, 0, 0, 0.1) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  @media (min-width: 768px) {
    width: 100%;
  }
`;
