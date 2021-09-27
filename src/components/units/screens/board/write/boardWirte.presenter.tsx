import React from 'react';
import {Switch} from 'react-native';
import {
  AddImageButton,
  AddImageText,
  AddImageWrapper,
  BoardContents,
  ButtonText,
  ButtonTitle,
  ButtonWrapper,
  Container,
  SubmitButton,
  Title,
  TitleWrapper,
  Wrapper,
} from './boardWrite.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {Controller} from 'react-hook-form';
import Uploads01 from '../../../../commons/uploads/01/uploads01.container';
const BoardWriteUI = (props: any) => {
  return (
    <>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>게시글 작성</Title>
          </TitleWrapper>
          <ButtonWrapper>
            <ButtonTitle>산책친구 찾기</ButtonTitle>
            <Controller
              control={props.control}
              name="title"
              render={({field: {onChange, value}}) => (
                <Switch
                  trackColor={{false: '#767577', true: '#26eba6'}}
                  onValueChange={(el) => onChange(el)}
                  value={value}
                />
              )}
            />
          </ButtonWrapper>
          <Controller
            control={props.control}
            name="contents"
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <BoardContents
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                multiline
                placeholder="내용을 입력하세요"
              />
            )}
          />
          <AddImageWrapper>
            <AddImageText>사진 첨부하기</AddImageText>
            <Uploads01 setImage={props.setImage} />
          </AddImageWrapper>
          <SubmitButton onPress={props.handleSubmit(props.onBoardSubmit)}>
            <Icon color={'#fff'} size={20} name="brush" />
            <ButtonText>글 등록하기</ButtonText>
          </SubmitButton>
        </Wrapper>
      </Container>
    </>
  );
};
export default BoardWriteUI;
