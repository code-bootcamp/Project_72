import {useMutation} from '@apollo/client';
import React from 'react';
import {useForm} from 'react-hook-form';
import SignUpPageUI from './SignUp.presenter';
import {CREATE_USER} from './SignUp.queries';

const SignUpPage = (props: any) => {
  const [createUser] = useMutation(CREATE_USER);
  const {handleSubmit, control} = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const JoinUser = async (data: any) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            name: data.name,
            email: data.email,
            password: data.password,
          },
        },
      });
      console.log('회원가입 완료!!');
      props.navigation.navigate('Login');
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <SignUpPageUI
      navigation={props.navigation}
      handleSubmit={handleSubmit}
      control={control}
      JoinUser={JoinUser}
    />
  );
};
export default SignUpPage;
