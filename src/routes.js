import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Auth from './pages/Auth';
import Main from './pages/Main';
import Login from './pages/Login';

const auth = createSwitchNavigator(
  {
    Auth,
    Login,
    Main,
  },
  { initialRouteName: 'Login' }
);

export default createAppContainer(auth);
