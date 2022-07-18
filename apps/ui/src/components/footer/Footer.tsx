import React from 'react'
import { Box, Img, SocialMedia } from './FooterStyles';

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = ({ }) => {
  return (
    <Box>
      <Img src='./src/assets/red_cartoon6.svg' topValue='0' leftValue='0%' />
      <Img src='./src/assets/green_cartoon.svg' topValue='0%' leftValue='90%' />
      <Img src='./src/assets/red_cartoon4.svg' topValue='30%' leftValue='95%' />
      <SocialMedia src='./src/assets/linkedn.svg' topValue='35%' leftValue='20%' />
      <SocialMedia src='./src/assets/twitter.svg' topValue='35%' leftValue='22%' />
      <SocialMedia src='./src/assets/facebook.svg' topValue='35%' leftValue='24%' />
      <SocialMedia src='./src/assets/pinterest.svg' topValue='35%' leftValue='26%' />
    </Box>
  );
}