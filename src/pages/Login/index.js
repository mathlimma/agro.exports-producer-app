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

export default function Login({ navigation }) {
  function handleLogin() {
    navigation.navigate('App');
  }

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
        <LoginButton onPress={handleLogin}>
          <LoginButtonText>Entrar</LoginButtonText>
        </LoginButton>
      </Content>
    </Container>
  );
}
