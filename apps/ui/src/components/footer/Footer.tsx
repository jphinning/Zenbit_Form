import React from 'react'
import { Box, FirstImg, Img, PositionA, SocialMedia } from './FooterStyles';

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = ({ }) => {
  return (
    <Box>
      <PositionA href='https://www.linkedin.com/'>
        <SocialMedia src='../linkedn.svg' />
      </PositionA>
      <a href='https://www.facebook.com/'>
        <SocialMedia src='../facebook.svg' />
      </a>
      <a href='https://www.pinterest.com/'>
        <SocialMedia src='../pinterest.svg' />
      </a>
      <a href='https://www.twitter.com/'>
        <SocialMedia src='../twitter.svg' />
      </a>
      <FirstImg src='../red_cartoon6.svg' topValue='5% ' leftValue='-25%' />
      <Img src='../green_cartoon.svg' topValue='0%' leftValue='90%' />
      <Img src='../red_cartoon4.svg' topValue='30%' leftValue='95%' />
    </Box>
  );
}