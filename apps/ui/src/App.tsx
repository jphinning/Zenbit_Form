import React from 'react'
import styled from 'styled-components';

import './fonts.css'

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


const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  height: 100vh;
  width: 100vw;
  justify-content: space-between;
  background-image: url(/Cloud.svg), url(/red_cartoon4.svg), url(/goodie1.svg), url(/red_cartoon3.svg), url(/ellipse.svg), url(/map.svg);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;
  background-position: center, left top, 75% 50%, 83% 65%, center top, right top;
  background-size: auto, auto, auto, auto, auto, 27.5%;
`
