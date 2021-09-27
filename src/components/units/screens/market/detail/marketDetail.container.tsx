import {useMutation, useQuery} from '@apollo/client';
import React, {useContext, useState} from 'react';
import {Alert} from 'react-native';
import {FETCH_USED_ITEMS} from '../list/marketList.queries';
import MarketDetailUI from './marketDetail.presenter';
import firestore from '@react-native-firebase/firestore';
import {
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from './marketDetail.queries';
import {GlobalContext} from '../../../../../../App';

const MarketDetail = (props:any) => {
  const {userInfo}:any = useContext(GlobalContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const {data} = useQuery(FETCH_USED_ITEM, {
    variables: {useditemId: props.item},
  });

  const onPressToggle = () => {
    toggleUseditemPick({
      variables: {
        useditemId: props.item,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: {useditemId: props.item},
        },
      ],
    });
  };
  const onPressOpenModal = () => {
    setModalVisible(true);
  };
  const onPressCloseModal = () => {
    setModalVisible(false);
  };
  const onPressDelete = async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: props.item,
        },
        refetchQueries: [{query: FETCH_USED_ITEMS}],
      });
      Alert.alert('상품이 정상적으로 삭제되었습니다');
      props.navigation.navigate('List');
    } catch (error:any) {
      Alert.alert(error.message);
    }
  };

  const onPressChat = () => {
    firestore()
      .collection('THREADS')
      .add({
        title: data.fetchUseditem.seller.name,
        sellerName: data.fetchUseditem.seller.name,
        myName: userInfo.name,
        sellerId: data.fetchUseditem.seller._id,
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
    <MarketDetailUI
      data={data}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      onPressToggle={onPressToggle}
      onPressDelete={onPressDelete}
      onPressOpenModal={onPressOpenModal}
      onPressCloseModal={onPressCloseModal}
      onPressChat={onPressChat}
    />
  );
};

export default MarketDetail;
