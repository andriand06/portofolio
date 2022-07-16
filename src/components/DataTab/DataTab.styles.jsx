import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px 50px;
  .tabs {
    margin-top: 20px;
    padding: 20px 0;
  }
  .title {
    color: var(--lightGrey);
    font-weight: bold;
    :after {
      content: "";
      display: block;
      position: relative;
      width: min(35vw, 250px);
      margin-left: 35px;
      height: 2px;
      top: -15px;
      right: -190px;
      background-color: var(--lightNavy);
      @media screen and (min-width: 600px) {
        width: min(50vw, 450px);
      }
      @media screen and (min-width: 768px) {
        width: min(40vw, 450px);
      }
    }
  }
  .jobList {
    margin: 1rem 0;
    list-style: none;
    font-size: var(--fontSmall);
    li {
      position: relative;
      padding: 5px 20px;
      :before {
        content: "▹";
        position: absolute;
        left: 0px;
        color: var(--green);
      }
    }
  }
  @media screen and (min-width: 768px) {
    padding: 30px 100px;
  }
`;
