import React, {useState, useContext, useEffect, createContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  GiftedChat,
  Bubble,
  Send,
  SystemMessage,
} from 'react-native-gifted-chat';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {GlobalContext} from '../../../../../../App';
import firestore from '@react-native-firebase/firestore';

export default function RoomScreen({route}: any) {
  const {userInfo}: any = useContext(GlobalContext);

  const [user, setUser] = useState('');

  const {thread} = route.params;

  const [messages, setMessages] = useState();

  async function handleSend(messages: any) {
    const text = messages[0].text;

    firestore()
      .collection('THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .add({
        text,
        createdAt: new Date().getTime(),
        user: {
          _id: userInfo._id,
          email: userInfo.email,
          name: userInfo.name,
        },
      });

    await firestore()
      .collection('THREADS')
      .doc(thread._id)
      .set(
        {
          latestMessage: {
            text,
            createdAt: new Date().getTime(),
          },
        },
        {merge: true},
      );
  }

  useEffect(() => {
    const messagesListener = firestore()
      .collection('THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        if (querySnapshot.empty) {
          return;
        }

        const messages = querySnapshot.docs.map((doc) => {
          const firebaseData = doc.data();

          const data = {
            _id: doc.id,
            text: '',
            createdAt: new Date().getTime(),
            ...firebaseData,
            user: firebaseData.name,
          };

          if (!firebaseData.system) {
            data.user = {
              ...firebaseData.user,
              name: firebaseData.user.name,
            };

            if (firebaseData.user.name !== userInfo.name) {
              setUser(firebaseData.user.name);
            }
          }

          return data;
        });

        setMessages(messages);
      });

    return () => messagesListener();
  }, []);

  function renderBubble(props: any) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#26EBA6',
          },
        }}
        textStyle={{
          right: {
            color: 'black',
          },
        }}
      />
    );
  }

  function renderSend(props: any) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <Icon name="send" size={38} color="#26EBA6" />
        </View>
      </Send>
    );
  }

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6646ee" />
      </View>
    );
  }

  function renderSystemMessage(props: any) {
    return (
      <SystemMessage
        {...props}
        wrapperStyle={styles.systemMessageWrapper}
        textStyle={styles.systemMessageText}
      />
    );
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={{_id: userInfo._id}}
      renderBubble={renderBubble}
      placeholder="메세지를 입력해주세요."
      showUserAvatar
      alwaysShowSend
      renderSend={renderSend}
      renderLoading={renderLoading}
      renderSystemMessage={renderSystemMessage}
    />
  );
}

const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  systemMessageWrapper: {
    backgroundColor: 'lightgray',
    borderRadius: 4,
    padding: 5,
  },
  systemMessageText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
});
