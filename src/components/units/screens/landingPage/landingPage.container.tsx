import React from 'react';
import LandingUI from './landingPage.presenter';
import { ILandingPage } from './landingPage.types';
const Landing = (props:ILandingPage) => {
  return <LandingUI setIsLoading={props.setIsLoading} />;
};
export default Landing;
