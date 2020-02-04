import React from 'react';
import {
  Container,
  LogoView,
  LogoImage,
  AuthView,
  AuthButton,
  AuthButtonText,
  AuthViewText,
} from './styles';

export default function Auth() {
  return (
    <Container tintcolor="#005D22">
      <LogoView>
        <LogoImage />
      </LogoView>

      <AuthView>
        <AuthButton>
          <AuthButtonText>Login</AuthButtonText>
        </AuthButton>

        <AuthViewText>Ainda não possui conta?</AuthViewText>

        <AuthButton>
          <AuthButtonText>Cadastre-se</AuthButtonText>
        </AuthButton>
      </AuthView>
    </Container>
  );
}
