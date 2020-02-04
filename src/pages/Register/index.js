import React from 'react';
import { Feather, Entypo, FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import AppBar from '../../components/AppBar';

import {
  Container,
  Content,
  PhotoView,
  PhotoImage,
  InputWrapper,
  Input,
  LoginButton,
  LoginButtonText,
} from './styles';

export default function Register() {
  async function handleUploadPhoto() {
    const cameraRoll = await ImagePicker.requestCameraRollPermissionsAsync();
    if (cameraRoll.status === 'granted') {
      ImagePicker.launchImageLibraryAsync();
    }
  }
  return (
    <Container>
      <AppBar title="Preencha os dados para terminar seu cadastro" />
      <Content>
        <PhotoView onPress={handleUploadPhoto}>
          <PhotoImage />
        </PhotoView>
        <InputWrapper>
          <Feather
            style={{ marginRight: 5 }}
            name="user"
            size={15}
            color="#808080"
          />
          <Input placeholder="Nome" />
        </InputWrapper>

        <InputWrapper>
          <Entypo
            name="email"
            size={15}
            color="#808080"
            style={{ marginRight: 5 }}
          />
          <Input placeholder="Email" />
        </InputWrapper>

        <InputWrapper>
          <Feather
            name="lock"
            size={15}
            color="#808080"
            style={{ marginRight: 5 }}
          />
          <Input placeholder="Senha" />
        </InputWrapper>

        <InputWrapper>
          <FontAwesome
            name="intersex"
            size={15}
            color="#808080"
            style={{ marginRight: 5 }}
          />
          <Input placeholder="Sexo" />
        </InputWrapper>

        <InputWrapper>
          <Feather
            name="phone"
            size={15}
            color="#808080"
            style={{ marginRight: 5 }}
          />
          <Input placeholder="Telefone" />
        </InputWrapper>

        <LoginButton>
          <LoginButtonText>Cadastrar</LoginButtonText>
        </LoginButton>
      </Content>
    </Container>
  );
}
