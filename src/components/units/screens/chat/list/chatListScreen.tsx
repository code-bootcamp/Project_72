import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Title, List, Divider} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import Loading from '../../../../commons/loading/loading';
import {GlobalContext} from '../../../../../../App';

export default function ChatListScreen({navigation, route}) {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  const {userInfo} = useContext(GlobalContext);

  const chatData = threads.filter(function (data) {
    return data.sellerId === userInfo._id || data.myId === userInfo._id;
  });
  // console.log('쓰레드', threads);
  // console.log('데이타', chatData);
  // console.log('인포', userInfo.name);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('THREADS')
      .orderBy('latestMessage.createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const threads = querySnapshot.docs.map((documentSnapshot) => {
          return {
            _id: documentSnapshot.id,
            name: '',
            latestMessage: {
              text: '',
            },
            ...documentSnapshot.data(),
          };
        });

        setThreads(threads);
        if (loading) {
          setLoading(false);
        }
      });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Room', {thread: item})}>
            <List.Item
              title={
                userInfo.name !== item.sellerName
                  ? item.sellerName
                  : item.myName
              }
              titleNumberOfLines={1}
              titleStyle={styles.listTitle}
              descriptionStyle={styles.listDescription}
              descriptionNumberOfLines={1}
              description={item.latestMessage.text}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  listTitle: {
    fontSize: 22,
  },
  listDescription: {
    fontSize: 16,
  },
});
