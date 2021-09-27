import React from 'react';
import Regist03 from '../../../../src/components/units/screens/registPage/regist03/registPage03.container';
const Regist03Page = (props: any) => {
  return (
    <Regist03 navigation={props.navigation} petInfo={props.route.params} />
  );
};
export default Regist03Page;
