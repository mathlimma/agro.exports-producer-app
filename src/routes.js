import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Auth from './pages/Auth';
import Login from './pages/Login';

const auth = createSwitchNavigator(
  {
    Auth,
    Login,
  },
  { initialRouteName: 'Auth' }
);

export default createAppContainer(auth);
