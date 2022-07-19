import styled from "styled-components";

interface SizingProps {
  topValue: string;
  leftValue: string;
}

export const Box = styled.div`
  background-color: #FAFAFA;
  width: 100%;
  height: 21vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border: 1px solid #D8D8D8;
  overflow: hidden;
`

export const FirstImg = styled.img<SizingProps>`
  position: relative;
  top: ${({ topValue }) => topValue};
  left: ${({ leftValue }) => leftValue};
  z-index: 1;
`


export const Img = styled.img<SizingProps>`
  position: absolute;
  top: ${({ topValue }) => topValue};
  left: ${({ leftValue }) => leftValue};

`

export const SocialMedia = styled.img`
  display: inline-block;
  position: relative;
  padding: 7px;
  z-index: 2;
`

export const PositionA = styled.a`
  margin-left: 20%;
`