import React from 'react';
import MarketDetail from '../../../../src/components/units/screens/market/detail/marketDetail.container';
const MarketDetailPage = (props) => {
  return (
    <MarketDetail
      navigation={props.navigation}
      item={props.route.params.item._id}
    />
  );
};
export default MarketDetailPage;
