import styled from "styled-components";

interface SizingProps {
  topValue: string;
  leftValue: string;
}

export const Box = styled.div`
  background-color: #FAFAFA;
  width: 100%;
  height: 21vh;
  position: relative;
  border: 1px solid #D8D8D8;
  overflow: hidden;
`

export const Img = styled.img<SizingProps>`
  position: absolute;
  top: ${({ topValue }) => topValue};
  left: ${({ leftValue }) => leftValue}

`

export const SocialMedia = styled.img<SizingProps>`
  position: absolute;
  top: ${({ topValue }) => topValue};
  left: ${({ leftValue }) => leftValue}
  /* top: 35%;
  left: 20%; */
`