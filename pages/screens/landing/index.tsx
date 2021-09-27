import React from 'react';
import Landing from '../../../src/components/units/screens/landingPage/landingPage.container';
const LandingPage = (props) => {
  return <Landing setIsLoading={props.setIsLoading} />;
};
export default LandingPage;
