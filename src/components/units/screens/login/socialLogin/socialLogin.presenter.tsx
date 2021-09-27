import * as React from 'react';
import {Wrapper} from './socialLogin.style';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

const SocialLoginUi = (props: any) => {
  return (
    <Wrapper>
      <GoogleSigninButton
        style={{width: '100%'}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={props.onGoogleLogin}
      />
    </Wrapper>
  );
};
export default SocialLoginUi;
