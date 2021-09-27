import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Image, Center, NativeBaseProvider, Input} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function FinshScreen(props: any) {
  const userName = props.route.params;

  const [isLike, setIsLike] = useState(false);
  const [isDisLike, setIsDisLike] = useState(false);

  function FinishMap() {
    return (
      <View style={styles.imageWrapper}>
        <Image
          width={300}
          height={200}
          // resizeMode={'contain'}
          borderRadius={15}
          source={require('../../../../../imgs/course.png')}
          alt="Alternate Text"
        />
      </View>
    );
  }

  function onClickLikeButton() {
    setIsLike(true);
    setIsDisLike(false);
  }

  function onClickDislikeButton() {
    setIsDisLike(true);
    setIsLike(false);
  }

  function onClickFinish() {
    if (isLike || isDisLike) {
      props.navigation.navigate('채팅리스트');
    } else return;
  }

  return (
    <KeyboardAwareScrollView>
      <NativeBaseProvider>
        <View style={styles.topWrapper}>
          <Text style={styles.titleStyle}>산책이 종료되었습니다.</Text>
        </View>
        <Center>
          <FinishMap />
        </Center>
        <View style={styles.bodyWrapper}>
          <View style={styles.contentsWrapper}>
            <Text style={styles.highlightText}>{userName}</Text>
            <Text style={styles.textStyle}> 님 과</Text>
            <Text style={styles.highlightText}>1,029</Text>
            <Text style={styles.textStyle}> m 를 산책하셨군요!</Text>
          </View>
          <View style={styles.contentsWrapper}>
            <Text style={styles.highlightText}>100</Text>
            <Text style={styles.textStyle}> Point가 적립되었습니다!</Text>
          </View>
          <View style={styles.contentsWrapper}>
            <Text style={styles.highlightText}>{userName}</Text>
            <Text style={styles.textStyle}> 님을 평가해주세요!</Text>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={onClickLikeButton}>
            <Text style={isLike ? styles.likeButtonTrue : styles.likeButton}>
              좋았어요 <Icon name="thumbs-up-outline" size={20} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClickDislikeButton}>
            <Text
              style={
                isDisLike ? styles.dislikeButtonTrue : styles.dislikeButton
              }>
              싫었어요 <Icon name="ios-thumbs-down-outline" size={20} />
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputBox}
            placeholder="한줄평을 남겨주세요!"
          />
        </View>

        <TouchableOpacity
          style={styles.finishButtonWrapper}
          onPress={onClickFinish}>
          <Text style={styles.finishButton}>확인</Text>
        </TouchableOpacity>
      </NativeBaseProvider>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  topWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#26EBA6',
    color: 'white',
    width: 250,
    height: 40,
    paddingTop: 6,
    textAlign: 'center',
    borderWidth: 0.5,
    borderRadius: 15,
  },
  imageWrapper: {
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 20,
    borderColor: '#26EBA6',
  },
  bodyWrapper: {
    // paddingTop: 10,
  },
  contentsWrapper: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'center',
  },
  highlightText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#26EBA6',
  },
  textStyle: {
    paddingTop: 5,
    fontSize: 15,
    justifyContent: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  likeButton: {
    fontSize: 20,
    marginRight: 10,
    borderWidth: 1.5,
    borderRadius: 15,
    width: 120,
    textAlign: 'center',
  },
  likeButtonTrue: {
    fontSize: 20,
    marginRight: 10,
    borderWidth: 1.5,
    borderRadius: 15,
    width: 120,
    textAlign: 'center',
    backgroundColor: '#26EBA6',
  },
  dislikeButton: {
    fontSize: 20,
    marginLeft: 10,
    borderWidth: 1.5,
    borderRadius: 15,
    width: 120,
    textAlign: 'center',
  },
  dislikeButtonTrue: {
    fontSize: 20,
    marginLeft: 10,
    borderWidth: 1.5,
    borderRadius: 15,
    width: 120,
    textAlign: 'center',
    backgroundColor: '#26EBA6',
  },
  inputWrapper: {
    alignItems: 'center',
  },
  inputBox: {
    marginTop: 20,
    borderWidth: 0,
    borderBottomWidth: 1.5,
    borderColor: 'gray',
    width: 300,
    fontSize: 15,
    fontWeight: '700',
  },
  finishButtonWrapper: {
    paddingTop: 30,
    alignItems: 'center',
  },
  finishButton: {
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 1.5,
    width: 120,
    textAlign: 'center',
    height: 35,
    paddingTop: 3,
    borderRadius: 15,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
