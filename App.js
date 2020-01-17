import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import axios from 'axios';
// import { Container } from './styles';

export default function App() {
  const [url, setUrl] = useState('');
  useEffect(() => {
    async function logInFacebook() {
      try {
        await Facebook.initializeAsync('2765038933518909');
        const login = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });

        if (login.type === 'success') {
          const response = await axios.get(
            `https://graph.facebook.com/me?fields=id,name,email,birthday,picture.height(150).width(150)&access_token=${login.token}`
          );
          setUrl(response.data.picture.data.url);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    async function logInGoogle() {
      try {
        const result = await Google.logInAsync({
          androidClientId:
            '712948781640-qldk9c8q363166n7be3k30mvkde80k51.apps.googleusercontent.com',
          iosClientId:
            '712948781640-uqted76nu8vftokc063p31bbkfle3v84.apps.googleusercontent.com',
          scopes: ['profile', 'email'],
        });

        if (result.type === 'success') {
          console.log(result);
        }

        return { cancelled: true };
      } catch (e) {
        return { error: true };
      }
    }
    // logInFacebook();
    // logInGoogle();
  }, []);

  return <View />;
}
