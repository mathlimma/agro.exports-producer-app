import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as Facebook from 'expo-facebook';
// import { Container } from './styles';

export default function App() {
  useEffect(() => {
    async function logIn() {
      try {
        await Facebook.initializeAsync('2765038933518909');
        const login = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });
        if (login.type === 'success') {
          const response = await fetch(
            `https://graph.facebook.com/me?access_token=${login.token}`
          );
          console.log(await response.json());
        }
      } catch (err) {
        console.log(err.message);
      }
    }

    logIn();
  }, []);

  return <View />;
}
