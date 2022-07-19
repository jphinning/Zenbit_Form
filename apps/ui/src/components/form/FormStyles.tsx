import styled from "styled-components";

export const Wrapper = styled.div`
  width: fit-content;
  /* border: 1px solid black; */
  padding: 30px;
  margin-left: 10vw;
  margin-top: 10vh;
`

export const FlexCollumn = styled.form`
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
  min-width: fit-content;
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

export const Textarea = styled.textarea.attrs(
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
  min-width: fit-content;
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
  width: fit-content;
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

export const SuccessBanner = styled.div`
  border: 1px solid #38a169;
  background-color: #c6f6d5;
  color: #2d3748;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  
`

export const ErrorBanner = styled.div`
  border: 1px solid #e53e3e;
  background-color: #fed7d7;
  color: #2d3748;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`

