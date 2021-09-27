import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Wrapper = styled.ScrollView`
  padding: 30px;
`;

export const TitleWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
`;

export const InputWrapper = styled.View`
  padding: 0 30px;
`;

export const InputLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding-top: 40px;
  padding-bottom: 10px;
`;

export const GenderWrapper = styled.View`
  padding-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MaleButton = styled.TouchableOpacity`
  width: 140px;
  height: 100px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid #808080;
  background-color: ${(props: {petGender: string}) =>
    props.petGender === 'male' ? '#bdbdbd' : '#ffffff'};
`;

export const FemaleButton = styled.TouchableOpacity`
  width: 140px;
  height: 100px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid #808080;
  background-color: ${(props: {petGender: string}) =>
    props.petGender === 'female' ? '#bdbdbd' : '#ffffff'};
`;
export const Kinds = styled.Picker`
  height: 50px;
`;

export const ButtonWrapper = styled.View`
  padding-top: 20px;
  position: relative;
  bottom: 10px;
`;

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
