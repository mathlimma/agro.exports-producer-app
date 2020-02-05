import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import AppBar from '../../components/AppBar';
import * as AuthActison from '../../store/modules/auth/actions';
import api from '../../services/api';
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
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const dispatch = useDispatch();
  async function handleLogin() {
    if (email && password) {
      // dispatch(AuthActison.signInRequest(email, password));
      const response = await api.post('producer/signin', { email, password });
      console.log(response);
      navigation.navigate('App');
    }
  }

  return (
    <Container>
      <AppBar title="Faça o login" />
      <Content>
        <LogoView>
          <Logo />
        </LogoView>
        <InputWrapper>
          <Entypo
            name="email"
            size={15}
            color="#808080"
            style={{ marginRight: 5 }}
          />
          <Input
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
          />
        </InputWrapper>
        <InputWrapper>
          <Icon name="lock" size={15} color="#808080" />
          <Input
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={setpassword}
          />
        </InputWrapper>
        <LoginButton onPress={handleLogin}>
          <LoginButtonText>Entrar</LoginButtonText>
        </LoginButton>
      </Content>
    </Container>
  );
}
