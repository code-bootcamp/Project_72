import React from 'react';
import {
  CommentsContents,
  CommentsCreactedAt,
  CommentsInput,
  CommentsLeftWrapper,
  CommentsRightWrapper,
  CommentsSubmit,
  CommentsUserName,
  CommentsWrapper,
  Container,
  SubmitText,
  Title,
  TitleWrapper,
  UserImage,
  Wrapper,
  WriteCommentWrapper,
  WriteUserImage,
} from './comments.style';
import {Controller} from 'react-hook-form';
import {v4 as uuidv4} from 'uuid';
import {FlatList} from 'react-native';
import {getDate} from '../../../commons/utils';

const CommentsUI = (props: any) => {
  const state = {commentDate: props.data?.fetchBoardComments};
  const renderItem = ({item}: any) => (
    <CommentsWrapper key={uuidv4()}>
      <UserImage
        imageStyle={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
        source={{uri: `${item.user?.picture}`}}
      />
      <CommentsLeftWrapper>
        <CommentsUserName>{item.writer}</CommentsUserName>
        <CommentsCreactedAt>{getDate(item.createdAt)}</CommentsCreactedAt>
      </CommentsLeftWrapper>
      <CommentsRightWrapper>
        <CommentsContents numberOfLines={10}>{item.contents}</CommentsContents>
      </CommentsRightWrapper>
    </CommentsWrapper>
  );
  return (
    <>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>댓글</Title>
          </TitleWrapper>

          <FlatList
            data={state.commentDate}
            renderItem={renderItem}
            onEndReached={props.hasMore && props.onLoadMore}
            inverted
          />
        </Wrapper>
        <WriteCommentWrapper>
          <WriteUserImage
            imageStyle={{
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
            source={{uri: `${props.userInfo.picture}`}}
          />
          <Controller
            control={props.control}
            name="contents"
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <CommentsInput
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                multiline
                placeholder="댓글을 입력하세요"
              />
            )}
          />

          <CommentsSubmit onPress={props.handleSubmit(props.onCommentSubmit)}>
            <SubmitText>게시</SubmitText>
          </CommentsSubmit>
        </WriteCommentWrapper>
      </Container>
    </>
  );
};
export default CommentsUI;
