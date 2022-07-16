import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --darkSlate: #495670;
        --lightSlate: #a8b2d1;
        --slate: #8892b0;
        --darkNavy: #020c1b;
        --lightNavy: #112240;
        --navy: #0a192f;
        --green: #64ffda;
        --greenTint: rgba(100,255,218,0.1);
        --blue: #57cbff;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
        --fontSuperSmall: 14px;
        --transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    }
    * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body {
        max-width:var(--maxWidth);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: var(--navy);
        color: var(--slate);
        font-size: var(--fontMed);
        line-height: 1.3;
        -webkit-font-smoothing: antialiased;

    }
    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 6rem;
      height: 2.5rem;
      border: 1px solid var(--green);
      border-radius: 4px;
      font-size: var(--fontSmall);
      text-decoration: none;
      transition: var(--transition);
      color: var(--green);
      background-color: inherit;
      :hover {
        opacity: 0.8;
        background-color: var(--lightNavy);
      }
    }
    .link {
        color: var(--lightSlate);
        font-size: var(--fontSmall);
        text-decoration: none;
        transition: var(--transition);
        padding: 0 1.5rem;
        :hover {
          opacity: 0.8;
          color: var(--green);
        }
      }
      .greenText{
        color:var(--green);
      }
      .animatedLink {
        color: var(--green);
        text-decoration: none;
        position: relative;
        :hover {
          text-decoration: underline;
          opacity: 0.8;
        }
      }
      .skillList {
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 200px));
        gap: 0 10px;
        overflow: hidden;
        padding: 1rem 0;
        list-style: none;
        font-size: var(--fontSuperSmall);
        li {
          :before {
            content: "▹";
            color: var(--green);
            margin-right: 10px;
          }
        }
      }
      .hiddenLink {
        display:flex;
        -webkit-box-pack:center;
        justify-content:space-between;
        -webkit-box-align:center;
        align-items:center;
        position: fixed;
        top:0px;
        bottom:0px;
        padding:100px 0;
        width: min(85vw,1000px);
        height: 100vh;
        background-color: var(--lightNavy);
        box-shadow: -10px 0 30px -15px var(--navy);
        z-index: 9;
        opacity: 0;
        visibility: hidden;
        flex-direction: column;
        transition: all 0.35s;
        @media screen and (min-width: 768px){
          transform: scale(0);
        }
      }
      .loadMore{
        display:flex;
        align-items:center;
        justify-content:center;
      }
     
`;
