import React from 'react';
import {Picker} from 'react-native';

import {
  ButtonText,
  ButtonWrapper,
  Container,
  FemaleButton,
  GenderWrapper,
  InputLabel,
  InputWrapper,
  MaleButton,
  SubmitButton,
  Title,
  TitleWrapper,
  Wrapper,
  Kinds,
} from './registPage02.style';
import Icon from 'react-native-vector-icons/Ionicons';
const Regist02UI = (props: any) => {
  return (
    <>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>{props.petName}에 대해서 더 알려주세요</Title>
          </TitleWrapper>
          <InputWrapper>
            <InputLabel>성별</InputLabel>
            <GenderWrapper>
              <MaleButton onPress={props.onPreessSelectMale}>
                <Icon size={60} color={'#26eba6'} name="male" />
              </MaleButton>
              <FemaleButton onPress={props.onPreessSelectFemale}>
                <Icon size={60} color={'#26eba6'} name="female" />
              </FemaleButton>
            </GenderWrapper>
            <InputLabel>견종</InputLabel>
            <Kinds
              selectedValue={props.petKinds}
              onValueChange={(value) => props.setPetKinds(value)}>
              <Picker.Item label="리트리버" value="리트리버" />
              <Picker.Item label="웰시코기" value="웰시코기" />
              <Picker.Item label="치와와" value="치와와" />
            </Kinds>
          </InputWrapper>
          <ButtonWrapper>
            <SubmitButton
              onPress={() => {
                props.navigation.navigate('Regist03', props);
              }}>
              <ButtonText>다 음</ButtonText>
            </SubmitButton>
          </ButtonWrapper>
        </Wrapper>
      </Container>
    </>
  );
};
export default Regist02UI;
