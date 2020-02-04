import React from 'react';
import { Feather } from '@expo/vector-icons';
import AppBar from '../../components/AppBar';
import {
  Container,
  Content,
  Input,
  Logo,
  LoginButton,
  LoginButtonText,
  InputWrapper,
  LogoView,
} from './styles';

export default function Login() {
  return (
    <Container>
      <AppBar title="Faça o login" />
      <Content>
        <LogoView>
          <Logo />
        </LogoView>
        <InputWrapper>
          <Feather name="lock" size={10} color="black" />
          <Input placeholder="Nome" />
        </InputWrapper>
        <Input placeholder="Senha" />
        <LoginButton>
          <LoginButtonText>Entre agora!</LoginButtonText>
        </LoginButton>
      </Content>
    </Container>
  );
}
