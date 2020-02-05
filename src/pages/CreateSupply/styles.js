import styled from 'styled-components/native';
import { KeyboardAvoidingView } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled(KeyboardAvoidingView).attrs({
  behavior: 'height',
})`
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  width: 290px;
  border-bottom-width: 1px;
  border-bottom-color: #808080;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#808080',
})`
  width: 290px;
`;

export const CreateSupplyButtonText = styled.Text``;

export const TextContent = styled.Text``;

export const CreateSupplyButton = styled.TouchableOpacity`
  margin-top: 50px;
  background: #01a643;
  justify-content: center;
  align-items: center;
  width: 290px;
  height: 55px;
  border-radius: 5px;
`;
