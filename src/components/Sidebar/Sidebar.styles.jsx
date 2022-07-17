import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0px auto;
  justify-content: center;
  padding: 80px 0 0 0;
  width: 100%;
  bottom: 0px;
  z-index: 10;
  color: var(--lightSlate);
  @media screen and (min-width: 767px) {
    position: fixed;
    margin: 0 0 0 40px;
    justify-content: left;
    width: 30%;
  }
  .lists {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    -webkit-box-align: center;
    margin: 0;
    list-style: none;
    @media screen and (max-width: 767px) {
      width: 35%;
      flex-direction: row;
    }
    @media screen and (min-width: 768px) {
      :after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0 auto;
        background-color: var(--lightSlate);
      }
    }
    li {
      padding: 1rem 0;
    }
  }
`;
