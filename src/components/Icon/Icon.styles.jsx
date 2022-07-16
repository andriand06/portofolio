import styled from "styled-components";

export const Wrapper = styled.a`
  :hover .feather {
    stroke: var(--green);
  }
  .feather {
    width: 18px;
    height: 18px;
    stroke: var(--lightSlate);
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
`;
