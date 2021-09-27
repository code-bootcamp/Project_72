import * as React from 'react';
import {Controller} from 'react-hook-form';
import {TouchableOpacity, View} from 'react-native';
import {
  Wrapper,
  LogoWrapper,
  LogoImg,
  UserInput,
  LoginButtonWrapper,
  LoginButton,
  SignUpWrapper,
  SignUp,
} from './MainLogin.style';
import SocialLogin from './socialLogin/socialLogin.container'; // 소셜 로그아웃시 문제 생겨서 잠시 주석

const MainLoginUi = (props: any) => {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoImg source={require('../../../../imgs/logo.png')} />
      </LogoWrapper>
      <Controller
        control={props.control}
        name="email"
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <UserInput
            onBlur={onBlur}
            onChangeText={(data: string) => onChange(data)}
            value={value}
            placeholder="이메일을 입력해주세요"
          />
        )}
      />
      <Controller
        control={props.control}
        name="password"
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <UserInput
            onBlur={onBlur}
            onChangeText={(el: any) => onChange(el)}
            value={value}
            placeholder="비밀번호를 입력해주세요"
            secureTextEntry={true} // 비밀번호 입력
          />
        )}
      />
      <View style={{padding: 'auto'}}>
        <LoginButtonWrapper onPress={props.handleSubmit(props.onAppLogin)}>
          <LoginButton>{'로그인'}</LoginButton>
        </LoginButtonWrapper>
        <SocialLogin />
      </View>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('SignUp');
        }}>
        <SignUpWrapper>
          <SignUp>{'이메일로 회원가입'}</SignUp>
        </SignUpWrapper>
      </TouchableOpacity>
    </Wrapper>
  );
};
export default MainLoginUi;
