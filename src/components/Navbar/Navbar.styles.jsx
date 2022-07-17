import styled from "styled-components";

export const Wrapper = styled.nav`
  max-width: var(--maxWidth);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2rem;
  padding: 50px 20px;
  .logo {
    :hover {
      opacity: 0.7;
      transition: var(--transition);
    }
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    @media screen and (max-width: 767px) {
      opacity: 0;
      position: absolute;
    }
  }
  .hamBox {
    opacity: 0;
    position: absolute;
    @media screen and (max-width: 767px) {
      opacity: 1;
      position: relative;
    }
  }
`;
