import styled from 'styled-components/native';
import background from '../../assets/background.png';
import logo from '../../assets/logo.png';

export const Container = styled.ImageBackground.attrs({
  source: background,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
`;

export const LogoView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.Image.attrs({
  source: logo,
})``;

export const AuthView = styled.View`
  flex: 1;
  background: red;
`;

export const AuthButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const AuthButtonText = styled.Text``;

export const AuthViewText = styled.Text``;
