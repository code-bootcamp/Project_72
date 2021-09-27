// import {useMutation} from '@apollo/client';
import {useMutation} from '@apollo/client';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Alert} from 'react-native';
import MarketWriteUI from './marketWrite.presenter';
import {CREATE_USED_ITEM} from './marketWrite.queries';
import {schema} from './marketWrite.validation';
import {FETCH_USED_ITEMS} from '../list/marketList.queries';
import {IMarketWriteProps} from './marketWrite.types';

const MarketWrite = (props: {
  navigation: {navigate: (arg0: string) => void};
}) => {
  const [image, setImage] = useState('');
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const {control, handleSubmit, formState} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      price: '',
      contents: '',
    },
  });
  const onSubmit = async (data: IMarketWriteProps) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            price: data.price,
            contents: data.contents,
            images: image,
            remarks: 'UsedItmes',
            useditemAddress: {
              address: data.address,
              addressDetail: data.addressDetail,
            },
          },
        },

        refetchQueries: [{query: FETCH_USED_ITEMS}],
      });
      console.log('성공');
      console.log(result);
      props.navigation.navigate('List');
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <MarketWriteUI
      control={control}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={formState.errors}
      setImage={setImage}
    />
  );
};
export default MarketWrite;
