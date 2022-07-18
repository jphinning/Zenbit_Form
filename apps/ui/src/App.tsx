import React from 'react'
import styled from 'styled-components';

import './assets/css/fonts.css'

import { Footer } from './components/footer/Footer';
import { Form } from './components/form/Form';



export const App: React.FC = () => {
  return (
    <StyledApp>
      <Form />
      <Footer />
    </StyledApp>
  );
}

// interface BackgroudDivsProps {
//   bgImg: string,
//   topValue: string,
//   bottomValue: string,
//   show: boolean
// }

// const BackgroundDivs = styled.div<BackgroudDivsProps>`
//   background-image: ${({ bgImg }) => bgImg};
//   top: ${({ topValue }) => topValue};
//   bottom: ${({ bottomValue }) => bottomValue};
//   display: ${({ show }) => show ? 'block' : 'none'};
//   position: absolute;
//   width:100%;
//   height:100%;
// `

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  height: 100vh;
  width: 100vw;
  justify-content: space-between;
  background-image: url(/Cloud.svg), url(/red_cartoon4.svg), url(/goodie1.svg), url(/red_cartoon3.svg), url(/ellipse.svg), url(/map.svg);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;
  background-position: center, left top, 75% 50%, 83% 65%, center top, top right;
  background-size: auto, auto, auto, auto, auto, 27.5%;
`
