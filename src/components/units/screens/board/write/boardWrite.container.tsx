import React from 'react';
import {useState} from 'react';
import {createContext} from 'react';
import {useForm} from 'react-hook-form';
import BoardWriteUI from './boardWirte.presenter';
import {useMutation} from '@apollo/client';
import {CREATE_BOARD} from './boardWrite.queries';
import {useContext} from 'react';
import {GlobalContext} from '../../../../../../App';
import {Alert} from 'react-native';
import {FETCH_BOARDS} from '../list/boardList.queries';

export const BoardContext = createContext({});

const BoardWrite = (props: any) => {
  const [image, setImage] = useState('');
  const [createBoard] = useMutation(CREATE_BOARD);

  const {handleSubmit, control} = useForm({defaultValues: {contents: ''}});

  const {userInfo} = useContext(GlobalContext);

  const onBoardSubmit = async (data: any) => {
    try {
      await createBoard({
        variables: {
          createBoardInput: {
            writer: userInfo.name,
            password: userInfo._id,
            title: String(data.title) === 'true' ? '#같이 산책해요~!!' : '', // 리스트에서 보일때는 1줄 만 보이고 다음줄은 ... 으로 생략되게 변경 예정
            contents: data.contents,
            images: image,
          },
        },
        refetchQueries: [{query: FETCH_BOARDS}],
      });
      Alert.alert('게시물이 등록되었습니다.');
      props.navigation.navigate('List');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <BoardWriteUI
      onBoardSubmit={onBoardSubmit}
      handleSubmit={handleSubmit}
      control={control}
      setImage={setImage}
    />
  );
};
export default BoardWrite;
