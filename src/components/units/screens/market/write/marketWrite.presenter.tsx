import React from 'react';
import {
  AddImageText,
  AddImageWrapper,
  AddressInput,
  ButtonText,
  Container,
  ContentsInput,
  InputWrapper,
  ErrorText,
  PriceInput,
  SubmitButton,
  AddressWrapper,
  Address,
  AddressLabel,
  Title,
  TitleInput,
  TitleWrapper,
  Wrapper,
} from './marketWrite.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {Controller} from 'react-hook-form';
import {Picker} from 'react-native';
import Uploads01 from '../../../../commons/uploads/01/uploads01.container';
import { IMarketWriteUIProps } from './marketWrite.types';
const MarketWriteUI = (props:IMarketWriteUIProps) => {
  return (
    <>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>상품 등록</Title>
          </TitleWrapper>
          <AddImageWrapper>
            <Uploads01 setImage={props.setImage} />
            <AddImageText>상품 사진을 첨부해주세요</AddImageText>
          </AddImageWrapper>
          <InputWrapper>
            <Controller
              name="name"
              control={props.control}
              render={({field: {onChange, value}}) => (
                <>
                  <TitleInput
                    placeholder="상품명을 입력해주세요"
                    value={value}
                    onChangeText={(value) => onChange(value)}
                  />
                  <ErrorText>{props.errors?.name?.message}</ErrorText>
                </>
              )}
            />
            <Controller
              name="price"
              control={props.control}
              render={({field: {onChange, value}}) => (
                <>
                  <PriceInput
                    placeholder="상품 가격을 입력해주세요"
                    value={value}
                    onChangeText={(value) => onChange(value)}
                  />

                  <ErrorText>{props.errors?.price?.message}</ErrorText>
                </>
              )}
            />
            <Controller
              name="address"
              control={props.control}
              render={({field: {onChange, value}}) => (
                <AddressWrapper>
                  <Address
                    selectedValue={value}
                    onValueChange={(value) => onChange(value)}>
                    <Picker.Item label="지역을 선택해주세요" />
                    <Picker.Item label="서울" value="서울" />
                    <Picker.Item label="경기" value="경기" />
                    <Picker.Item label="인천" value="인천" />
                    <Picker.Item label="강원" value="강원" />
                    <Picker.Item label="충남" value="충남" />
                    <Picker.Item label="충북" value="충북" />
                    <Picker.Item label="전남" value="전남" />
                    <Picker.Item label="전북" value="전북" />
                    <Picker.Item label="경남" value="경남" />
                    <Picker.Item label="경북" value="경북" />
                    <Picker.Item label="제주" value="제주" />
                  </Address>
                </AddressWrapper>
              )}
            />
            <Controller
              name="addressDetail"
              control={props.control}
              render={({field: {onChange, value}}) => (
                <>
                  <AddressInput
                    placeholder="상제주소를 입력해주세요"
                    value={value}
                    onChangeText={(value) => onChange(value)}
                  />
                  <ErrorText>{props.errors?.addressDetail?.message}</ErrorText>
                </>
              )}
            />

            <Controller
              name="contents"
              control={props.control}
              render={({field: {onChange, value}}) => (
                <>
                  <ContentsInput
                    multiline
                    placeholder="내용을 입력해주세요"
                    value={value}
                    onChangeText={(value) => onChange(value)}
                  />

                  <ErrorText>{props.errors?.contents?.message}</ErrorText>
                </>
              )}
            />
          </InputWrapper>
          <SubmitButton onPress={props.handleSubmit(props.onSubmit)}>
            <Icon size={30} color={'#fff'} name="md-brush-sharp" />
            <ButtonText>등록하기</ButtonText>
          </SubmitButton>
        </Wrapper>
      </Container>
    </>
  );
};
export default MarketWriteUI;
