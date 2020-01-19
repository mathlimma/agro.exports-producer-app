import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import axios from 'axios';
// import { Container } from './styles';

export default function App() {
  useEffect(() => {
    async function logInFacebook() {
      try {
        await Facebook.initializeAsync('2765038933518909');
        const login = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });

        if (login.type === 'success') {
          const user = await axios.get(
            `https://graph.facebook.com/me?fields=id,name,email,birthday,picture.height(150).width(150)&access_token=${login.token}`
          );

          const { name, id, picture, email } = user.data;
          const response = await axios.post('http://10.21.23.123:3000/auth', {
            fullname: name,
            facebook_id: id,
            photo_url: picture.data.url,
            email,
          });
          console.log(response.data);
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
          const { email, name, photoUrl, id } = result.user;
          const response = await axios.post('http://10.21.23.123:3000/auth', {
            fullname: name,
            google_id: id,
            photo_url: photoUrl,
            email,
          });
          console.log(response.data);
        }
      } catch (error) {
        return console.log(error.message);
      }
    }
    logInFacebook();
    // logInGoogle();
  }, []);

  return <View />;
}
