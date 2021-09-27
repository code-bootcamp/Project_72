import {useQuery} from '@apollo/client';
import React, {useState} from 'react';
import MarketListUI from './marketList.presenter';
import {FETCH_USED_ITEMS} from './marketList.queries';

const MarketList = (props:any) => {
  const {data, fetchMore} = useQuery(FETCH_USED_ITEMS);
  const [hasMore, setHasMore] = useState(true);
  const onLoadMore = () => {
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        if (!fetchMoreResult.fetchUseditems.length) setHasMore(false);
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  return (
    <MarketListUI
      navigation={props.navigation}
      data={data}
      onLoadMore={onLoadMore}
      hasMore={hasMore}
    />
  );
};
export default MarketList;
