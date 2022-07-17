import React from 'react'
import { Button, FlexCollumn, Input, Title, Wrapper } from './FormStyles';

interface FormProps {
}

export const Form: React.FC<FormProps> = () => {
  return (
    <Wrapper>
      <Title>
        Reach out to us!
      </Title>
      <FlexCollumn>
        <Input placeholder='Your name*' size='2em' />
        <Input placeholder='Your e-mail*' size='2em' />
        <Input placeholder='Your message*' size='6em' />
      </FlexCollumn>
      <Button>Send message</Button>
    </Wrapper>
  );
}