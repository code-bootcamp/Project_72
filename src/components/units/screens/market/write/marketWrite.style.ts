import styled from 'styled-components/native';
export const Container = styled.SafeAreaView``;
export const Wrapper = styled.ScrollView``;
export const TitleWrapper = styled.View`
  padding: 30px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #eaeaea;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const AddImageWrapper = styled.View`
  padding: 30px;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;
export const AddImage = styled.View`
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: gray;
  border-radius: 10px;
`;
export const AddImageText = styled.Text`
  font-size: 14px;
  color: #4f4f4f;
`;
export const InputWrapper = styled.View`
  padding: 30px;
`;
export const ErrorText = styled.Text`
  font-size: 10px;
  color: red;
`;
export const TitleInput = styled.TextInput`
  border-bottom-width: 1.5px;
  border-bottom-color: #e0e0e0;
`;
export const PriceInput = styled.TextInput`
  border-bottom-width: 1.5px;
  border-bottom-color: #e0e0e0;
`;
export const AddressInput = styled.TextInput`
  padding: 15px 3px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1.5px;
  border-bottom-color: #e0e0e0;
`;
export const AddressLabel = styled.Text`
  color: #8f8f8f;
`;
export const AddressWrapper = styled.View`
  border-bottom-width: 1.5px;
  border-bottom-color: #e0e0e0;
`;
export const Address = styled.Picker`
  color: #9f9f9f;
`;
export const ContentsInput = styled.TextInput``;
export const SubmitButton = styled.TouchableOpacity`
  margin: 30px;
  height: 55px;
  background-color: #26eba6;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
