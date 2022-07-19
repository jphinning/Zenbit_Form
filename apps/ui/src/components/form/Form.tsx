import React, { useState } from 'react'
import { CgSpinnerTwo } from 'react-icons/cg'

import { AiFillExclamationCircle } from 'react-icons/ai'
import { Button, ErrorBanner, FlexCollumn, Input, SuccessBanner, Textarea, Title, Wrapper } from './FormStyles';
import axiosHttp from '../../services/httpService';

interface FormProps {
}

interface Inputs {
  name: string,
  email: string,
  message: string
}

type LoadingStates = 'loading' | 'success' | 'waiting' | 'error';
type InputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type FormEvent = React.SyntheticEvent<HTMLFormElement>;

export const Form: React.FC<FormProps> = () => {

  const [loadingState, setLoadingState] = useState<LoadingStates>('waiting');
  const [inputs, setInputs] = useState<Inputs>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: InputEvent) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoadingState('loading');

    try {
      const res = await axiosHttp.post('/forms', inputs);
      setLoadingState('success');
      console.log(res);

    } catch (error) {
      setLoadingState('error');
    }

  }

  return (
    <Wrapper>
      {loadingState === 'success' ? <SuccessBanner> <AiFillExclamationCircle />Sucess!</SuccessBanner> : ''}
      {loadingState === 'error' ? <ErrorBanner><AiFillExclamationCircle />Error!</ErrorBanner> : ''}
      <Title>
        Reach out to us!
      </Title>
      <FlexCollumn onSubmit={handleSubmit}>
        <Input placeholder='Your name*' size='2em' name='name' value={inputs.name} onChange={handleChange}
          type='text' required
        />
        <Input placeholder='Your e-mail*' size='2em' name='email' value={inputs.email} onChange={handleChange}
          type='email' required
        />
        <Textarea placeholder='Your message*' size='6em' name='message' value={inputs.message} onChange={handleChange}
          wrap="soft" required
        />
        <Button type='submit'> {loadingState === 'loading' ? <CgSpinnerTwo /> : 'Send message'}</Button>
      </FlexCollumn>
    </Wrapper>
  );
}