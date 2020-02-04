import React from 'react';

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
  Icon,
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
          <Icon name="user" size={15} color="#808080" />
          <Input placeholder="Nome" />
        </InputWrapper>
        <InputWrapper>
          <Icon name="lock" size={15} color="#808080" />
          <Input placeholder="Senha" />
        </InputWrapper>
        <LoginButton>
          <LoginButtonText>Entre agora!</LoginButtonText>
        </LoginButton>
      </Content>
    </Container>
  );
}
