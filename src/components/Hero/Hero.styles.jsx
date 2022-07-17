import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  max-width: var(--maxWidth);
  padding: 20px 50px;
  .head {
    font-size: var(--fontMedium);
    color: var(--green);
    @media screen and (min-width: 768px) {
      font-size: var(--fontSuperBig);
    }
  }
  .heroTitle {
    margin: 0;
    font-size: var(--fontBig);
    font-weight: bold;
    @media screen and (min-width: 768px) {
      font-size: var(--fontSuperBig);
    }
  }
  .myName {
    color: var(--lightGrey);
  }
  .description {
    margin: 0;
    @media screen and (min-width: 768px) {
      font-size: var(--fontBig);
    }
  }
  @media screen and (min-width: 768px) {
    padding: 30px 100px;
  }
`;
