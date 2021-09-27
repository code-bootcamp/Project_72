import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, Alert, Button} from 'react-native';
import {IconButton, Title} from 'react-native-paper';
import FormButton from '../../../../commons/formButton/formButton';
import FormInput from '../../../../commons/formInput/formInput';
import firestore from '@react-native-firebase/firestore';
import {GlobalContext} from '../../../../../../App';

export default function AddRoomScreen({navigation}) {
  const [roomName, setRoomName] = useState('');

  const {userInfo} = useContext(GlobalContext);

  function handleButtonPress() {
    if (roomName.length > 0) {
      firestore()
        .collection('THREADS')
        .add({
          title: roomName,
          name: userInfo.name,
          latestMessage: {
            text: ` ${userInfo.name} 님과 연결되었습니다.`,
            createdAt: new Date().getTime(),
          },
        })
        .then((docRef) => {
          docRef.collection('MESSAGES').add({
            text: ` ${userInfo.name} 님과 연결되었습니다.`,
            createdAt: new Date().getTime(),
            system: true,
          });
          navigation.navigate('채팅리스트');
        });
    }
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.closeButtonContainer}>
        <IconButton
          icon="close-circle"
          size={36}
          color="#6646ee"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.innerContainer}>
        <Title style={styles.title}>Create a new chat room</Title>
        <FormInput
          labelName="Room Name"
          value={roomName}
          onChangeText={(text) => setRoomName(text)}
          clearButtonMode="while-editing"
        />
        <FormButton
          title="Create"
          modeValue="contained"
          labelStyle={styles.buttonLabel}
          onPress={() => handleButtonPress()}
          disabled={roomName.length === 0}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 30,
    right: 0,
    zIndex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  buttonLabel: {
    fontSize: 22,
  },
});
