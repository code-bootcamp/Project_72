import {useMutation, useQuery} from '@apollo/client';

import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {Alert} from 'react-native';

import {GlobalContext} from '../../../../../App';
import CommentsUI from './comments.presenter';
import {CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS} from './comments.queries';

const Comments = (props: any) => {
  const {userInfo} = useContext(GlobalContext);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const {data: commentsData} = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {boardId: props.BoardId},
  });

  const {handleSubmit, control, reset} = useForm({
    defaultValues: {contents: ''},
  });

  const onCommentSubmit = async (data: any) => {
    try {
      await createBoardComment({
        variables: {
          boardId: props.BoardId,
          createBoardCommentInput: {
            writer: userInfo.name,
            password: userInfo._id,
            contents: data.contents,
            rating: 1,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: props.BoardId,
            },
          },
        ],
      });
      Alert.alert('댓글이 등록 되었습니다.');
      reset({contents: ''});
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <CommentsUI
      data={commentsData}
      userInfo={userInfo}
      commentsData={props.commentsData}
      onCommentSubmit={onCommentSubmit}
      handleSubmit={handleSubmit}
      control={control}
    />
  );
};
export default Comments;
