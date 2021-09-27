import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  flex: 1;
  align-content: center;
  padding: 55px;
`;
export const LogoWrapper = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0 50px 65px 50px;
`;
export const LogoImg = styled.Image`
  width: 150px;
  height: 150px;
`;

export const UserInput = styled.TextInput`
  height: 45px;
  padding: 10px;
  border-bottom-color: #bdbdbd;
  border-bottom-width: 1px;
  font-size: 12px;
`;

export const ButtonWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const LoginButtonWrapper = styled.TouchableOpacity`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 45px;
  background-color: #26eba6;
  height: 45px;
  border-radius: 10px;
`;
export const LoginButton = styled.Text`
  color: white;
  line-height: 45px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
export const SignUpWrapper = styled.TouchableOpacity`
  margin: auto;
`;

export const SignUp = styled.Text``;
