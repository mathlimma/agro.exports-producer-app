import React from 'react';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import AppBar from '../../components/AppBar';

import {
  Container,
  Content,
  PhotoView,
  PhotoImage,
  InputWrapper,
  Input,
  LogoutButton,
  LogoutButtonText,
  TextPhoto,
  ProfileView,
} from './styles';

export default function Profile() {
  async function handleUploadPhoto() {
    const cameraRoll = await ImagePicker.requestCameraRollPermissionsAsync();
    if (cameraRoll.status === 'granted') {
      ImagePicker.launchImageLibraryAsync();
    }
  }
  return (
    <Container>
      <AppBar title="Perfil" />
      <Content>
        <ProfileView>
          <PhotoView onPress={handleUploadPhoto}>
            <PhotoImage />
            <TextPhoto>Mudar foto</TextPhoto>
          </PhotoView>
          <InputWrapper>
            <Feather
              style={{ marginRight: 5 }}
              name="user"
              size={15}
              color="#808080"
            />
            <Input value="Marcelo Nunes" />
            <MaterialIcons name="edit" size={15} color="#808080" />
          </InputWrapper>
          <InputWrapper>
            <MaterialIcons
              name="description"
              size={15}
              color="#808080"
              style={{ marginRight: 5 }}
            />
            <Input value="sou produtor de melão" />
            <MaterialIcons name="edit" size={15} color="#808080" />
          </InputWrapper>
          <InputWrapper>
            <Feather
              name="phone"
              size={15}
              color="#808080"
              style={{ marginRight: 5 }}
            />
            <Input value="81989341719" />
            <MaterialIcons name="edit" size={15} color="#808080" />
          </InputWrapper>
        </ProfileView>

        <LogoutButton>
          <LogoutButtonText>Sair</LogoutButtonText>
        </LogoutButton>
      </Content>
    </Container>
  );
}
