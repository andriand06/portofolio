import styled from "styled-components";

export const Wrapper = styled.div`
  // max-width: var(--maxWidth);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .spinner {
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px var(--slate);
    background: conic-gradient(#0000 10%, #8f44fd);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 10px),
      #000 0
    );
    animation: spin 0.8s infinite linear;
    @keyframes spin {
      to {
        transform: rotate(1turn);
      }
    }
  }
`;
