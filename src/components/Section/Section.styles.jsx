import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px 50px;
  .about {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem 0;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
  .work {
    display: flex;
    flex-direction: column;
    margin: 2rem 0 6rem 0;
    :last-child {
      margin: 0;
    }
    .imageWrapper {
      width: 100%;
      height: 300px;
      position: relative;
      z-index: 1;
      img {
        height: 100%;
        width: 100%;
        padding: 0.5rem;
        border: 2px solid rgba(255, 255, 255, 0.24);
        object-fit: cover;
      }
      @media screen and (min-width: 768px) {
        width: 70vw;
      }
    }
    .projectDetail {
      width: 100%;
      display: flex;
      align-items: right;
      flex-direction: column;
      margin-top: 25px;
      padding: 0 10px;
      text-align: right;
      .projectTitle {
        color: var(--lightGrey);
        font-size: var(--fontBig);
      }
      .details {
        border-radius: 4px;
        z-index: 2;
        position: relative;
        background-color: var(--lightNavy);
        box-shadow: 0 8px 1rem rgba(0, 0, 0, 0.16);
        font-size: 14px;
        margin: 1rem 0;
        padding: 25px;
      }
      .tools {
        margin-top: 0.5rem;
        text-align: center;
        padding: 20px 20px;
        ul {
          list-style: none;
          display: grid;
          place-items: center;
          grid-template-columns: repeat(4, minmax(40px, 150px));
          gap: 10px 10px;
          font-size: var(--fontSmall);
          li {
            margin: 0 0.5rem;
          }
          @media screen and (min-width: 1028px) {
            grid-template-columns: repeat(6, minmax(20px, 250px));
          }
        }
      }
      .links {
        display: flex;
        justify-content: right;
        flex-direction: columns;
        margin: 0.5rem 0;
        a {
          margin: 10px;
        }
      }
    }
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
  .title {
    color: var(--lightGrey);
    font-weight: bolder;
    :after {
      content: "";
      display: block;
      position: relative;
      width: min(50vw, 400px);
      margin-left: 20px;
      height: 2px;
      top: -16px;
      right: -130px;
      background-color: var(--lightNavy);
      @media screen and (min-width: 600px) {
        width: min(60vw, 450px);
      }
      @media screen and (min-width: 768px) {
        width: min(50vw, 450px);
      }
    }
  }
  .detail {
    text-align: left;
    margin: 0 10px 0 0;
    @media screen and (min-width: 768px) {
      width: 70%;
    }
  }
  .imageWrapper {
    img {
      border-radius: 0.75rem;
      box-shadow: 12px 12px 30px rgba(0, 0, 0, 0.16),
        -12px -12px 30px rgba(0, 0, 0, 0.16);
    }
  }
  .profilePic {
    width: min(35vw, 400px);
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    padding: 50px 100px;
  }
`;
