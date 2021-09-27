import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {
  BoardComments,
  BoardContentsText,
  BoardTitleText,
  BoardContentsWrapper,
  CommentsText,
  CommentsUserImage,
  CommentsWrapper,
  Container,
  CreatedAt,
  ImageWrapper,
  ImageDefault,
  MoreButton,
  NewCommentsText,
  NewCommentsWrapper,
  UserImage,
  UserInfoLeftContents,
  UserInfoRightContents,
  UserInfoWrapper,
  UserName,
  UserWrapper,
  Wrapper,
  WriteButton,
  ButtonWrapper,
} from './boardList.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {v4 as uuidv4} from 'uuid';
import {getDate} from '../../../../commons/utils';

const BoardListUI = (props: any) => {
  const state = {
    data: props.data?.fetchBoards,
  };
  const renderItem = ({item}: any) => (
    <Wrapper key={uuidv4()}>
      <UserWrapper>
        <UserImage
          imageStyle={{
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
            borderBottomLeftRadius: 60,
            borderBottomRightRadius: 60,
          }}
          source={{uri: `${item.user?.picture}`}}
        />
        <UserInfoWrapper>
          <UserInfoLeftContents>
            <UserName>{item.writer}</UserName>
            <CreatedAt>{getDate(item.createdAt)}</CreatedAt>
          </UserInfoLeftContents>
          <UserInfoRightContents>
            {props.userInfo._id === item.user?._id ? (
              <MoreButton
                onPress={() => {
                  props.onPressDeleteBoard(item._id);
                }}>
                <Icon size={30} color={'#C4C4C4'} name="ellipsis-horizontal" />
              </MoreButton>
            ) : (
              <MoreButton>
                <Icon
                  size={30}
                  color={'#26eba6'}
                  name="ios-chatbubbles"
                  onPress={() => {
                    props.onPressChat(item);
                  }}
                />
              </MoreButton>
            )}
          </UserInfoRightContents>
        </UserInfoWrapper>
      </UserWrapper>
      {item.images?.[0] ? (
        <ImageWrapper
          source={{uri: `https://storage.googleapis.com/${item.images?.[0]}`}}
        />
      ) : (
        <ImageDefault>
          <Icon size={40} color={'#fff'} name="close-outline" />
        </ImageDefault>
      )}
      <BoardContentsWrapper>
        <BoardContentsText>{item.contents}</BoardContentsText>
        <BoardTitleText>{item.title}</BoardTitleText>
      </BoardContentsWrapper>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Comments', {
            item,
          });
        }}>
        <CommentsWrapper>
          <BoardComments>
            <CommentsText>
              댓글 {item.boardCommentsCount}개 모두보기
            </CommentsText>
          </BoardComments>
          <NewCommentsWrapper>
            <CommentsUserImage
              imageStyle={{
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
              }}
              source={{uri: `${props.userInfo.picture}`}}
            />
            <NewCommentsText>댓글 달기 ...</NewCommentsText>
          </NewCommentsWrapper>
        </CommentsWrapper>
      </TouchableOpacity>
    </Wrapper>
  );
  return (
    <>
      <Container>
        <FlatList
          data={state.data}
          renderItem={renderItem}
          onEndReached={props.hasMore && props.onLoadMore}
          onEndReachedThreshold={1}
        />
      </Container>
      <ButtonWrapper>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Write');
          }}>
          <WriteButton>
            <Icon size={30} color={'#fff'} name="brush" />
          </WriteButton>
        </TouchableOpacity>
      </ButtonWrapper>
    </>
  );
};
export default BoardListUI;
