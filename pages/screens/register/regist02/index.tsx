import React from 'react';
import Regist02 from '../../../../src/components/units/screens/registPage/regist02/registPage02.container';

const Regist02Page = (props: any) => {
  return (
    <Regist02
      navigation={props.navigation}
      petName={props.route.params.petName}
    />
  );
};
export default Regist02Page;
