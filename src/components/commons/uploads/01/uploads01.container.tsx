import {useMutation} from '@apollo/client';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {ReactNativeFile} from 'apollo-upload-client';
import Uploads01UI from './uploads01.presenter';
import {UPLOAD_FILE} from './uploads01.queries';
import {Alert} from 'react-native';

const Uploads01 = (props) => {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imageUri, setImageUri] = useState({uri: ''});
  const onPressOpenAlbum = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
      },
      async ({assets}) => {
        const file = new ReactNativeFile({
          uri: assets?.[0].uri,
          type: assets?.[0].type,
          name: assets?.[0].fileName,
        });
        const source = {uri: 'data:image/jpeg;base64,' + assets?.[0].base64};
        setImageUri(source);
        try {
          const result = await uploadFile({
            variables: {
              file: file,
            },
          });
          console.log(result.data?.uploadFile.url);
          props.setImage(result.data?.uploadFile.url)
        } catch (error) {
          Alert.alert(error.message);
        }
      },
    );
  };
  return (
    <Uploads01UI imageUri={imageUri} onPressOpenAlbum={onPressOpenAlbum} />
  );
};
export default Uploads01;
