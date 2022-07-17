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

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  height: 98vh;
  justify-content: space-between;
  background-image: url(/Cloud.svg), url(/red_cartoon4.svg);
  background-repeat: no-repeat, no-repeat;
  background-position: center, left top;
`
