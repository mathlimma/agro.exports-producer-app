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
    <Container>
      <LogoView>
        <LogoImage />
      </LogoView>

      <AuthView>
        <AuthButton>
          <AuthButtonText>Login</AuthButtonText>
        </AuthButton>

        <AuthViewText>---- Não possui conta? ----</AuthViewText>

        <AuthButton>
          <AuthButtonText>Cadastre-se</AuthButtonText>
        </AuthButton>
      </AuthView>
    </Container>
  );
}
