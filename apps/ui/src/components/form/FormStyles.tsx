import styled from "styled-components";

export const Wrapper = styled.div`
  width: fit-content;
  /* border: 1px solid black; */
  padding: 30px;
  margin-left: 10vw;
  margin-top: 10vh;
`

export const FlexCollumn = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-around;
`

export const Title = styled.h1`
  font-family: 'Apercu Arabic Pro';
  color: #3E3E3E;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
`

export const Input = styled.input.attrs(
  ({ size }: { size: string | undefined }) => (
    {
      type: "text",
      size: size || '1em',
    }
  )
)`
  background: #FFFFFF;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  max-width: 557px;
  width: 42vw;
  padding-bottom: ${({ size }: { size: string | undefined }) => size};
  padding-top: 10px;
  padding-left: 15px;
  font-family: 'Apercu Arabic Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 180%;
  color: #2D2D2D;
  margin:5px;
`

export const Button = styled.button`
  background: #FAD34F;
  box-shadow: 2px; 
  border-radius: 500px;
  padding: 1.5em;
  padding-left: 2.5em;
  padding-right: 2.5em;
  margin: 2px;
  border: none;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover{ background: #dfd3ae }

  &:disabled {
    cursor: default;
    opacity: 0.7;
  }

  font-family: 'Apercu Arabic Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #FFFFFF;


`

