import {useMutation, useQuery} from '@apollo/client';
import React, {useState, useContext} from 'react';
import {Alert} from 'react-native';
import {GlobalContext} from '../../../../../../App';
import BoardListUI from './boardList.presenter';
import {DELETE_BOARD, FETCH_BOARD, FETCH_BOARDS} from './boardList.queries';
import firestore from '@react-native-firebase/firestore';

const BoardList = (props: any) => {
  const [hasMore, setHasMore] = useState(true);
  const {userInfo} = useContext(GlobalContext);

  const [boardListId, setBoardListId] = useState('');

  const {data, fetchMore} = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const {data: boardData} = useQuery(FETCH_BOARD);

  // console.log('보드', data?.fetchBoards);

  const onPressDeleteBoard = async (boardId: string) => {
    try {
      await deleteBoard({
        variables: {
          boardId: boardId,
        },
        refetchQueries: [{query: FETCH_BOARDS}],
      });
      Alert.alert('삭제');
    } catch (error) {
      console.log(error.message);
    }
  };

  const onLoadMore = () => {
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoards.length / 10) + 1,
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        if (!fetchMoreResult.fetchBoards.length) {
          setHasMore(false);
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  const onPressChat = (data) => {
    console.log('아이디', data.user._id);
    firestore()
      .collection('THREADS')
      .add({
        title: data.writer,
        sellerName: data.writer,
        myName: userInfo.name,
        sellerId: data.user._id,
        myId: userInfo._id,
        latestMessage: {
          text: ' 채팅이 연결되었습니다.',
          createdAt: new Date().getTime(),
        },
      })
      .then((docRef) => {
        docRef.collection('MESSAGES').add({
          text: '채팅이 연결되었습니다.',
          createdAt: new Date().getTime(),
          system: true,
        });
        console.log(docRef);
        props.navigation.navigate('ChatList');
      });
  };

  return (
    <BoardListUI
      data={data}
      userInfo={userInfo}
      hasMore={hasMore}
      onLoadMore={onLoadMore}
      navigation={props.navigation}
      setBoardListId={setBoardListId}
      onPressDeleteBoard={onPressDeleteBoard}
      onPressChat={onPressChat}
    />
  );
};
export default BoardList;
