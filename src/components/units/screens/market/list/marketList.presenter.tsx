import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {
  Container,
  ContentsWrapper,
  ImageWrapper,
  ItemAddress,
  ItemLike,
  ItemPrice,
  ItemTitle,
  Wrapper,
  WriteButton,
  ButtonWrapper,
  ImageDefault,
} from './marketList.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {priceToString} from '../../../../commons/utils';
import { IMarketListUIProps } from './marketList.types';

const MarketListUI = (props:IMarketListUIProps) => {
  const state = {
    data: props.data?.fetchUseditems,
  };
  console.log(props.data?.fetchUseditems);
  const renderItem = ({item}:any) => (
    <TouchableOpacity
      key={item._id}
      onPress={() => {
        props.navigation.navigate('Detail', {item});
      }}>
      <Wrapper>
        {item.images?.[0] ? (
          <ImageWrapper
            source={{uri: `https://storage.googleapis.com/${item.images?.[0]}`}}
          />
        ) : (
          <ImageDefault><Icon size={40} color={'#fff'} name="close-outline" /></ImageDefault>
        )}

        <ContentsWrapper>
          <ItemTitle numberOfLines={2} ellipsizeMode="tail">
            {item.name}
          </ItemTitle>
          <ItemAddress numberOfLines={1} ellipsizeMode="tail">
            {item.useditemAddress?.address}&nbsp;
            {item.useditemAddress?.addressDetail}
          </ItemAddress>
          <ItemPrice>{`${priceToString(item.price)}원`}</ItemPrice>
          <ItemLike>
            <Icon size={15} color={'#26EBA6'} name="md-paw" />
            &nbsp; {item.pickedCount}
          </ItemLike>
        </ContentsWrapper>
      </Wrapper>
    </TouchableOpacity>
  );

  return (
    <>
      <Container>
        <FlatList
          data={state.data}
          renderItem={renderItem}
          onEndReached={props.hasMore && props.onLoadMore}
          onEndReachedThreshold={1}
        />
      </Container>

      <ButtonWrapper>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Write');
          }}>
          <WriteButton>
            <Icon size={30} color={'#fff'} name="brush" />
          </WriteButton>
        </TouchableOpacity>
      </ButtonWrapper>
    </>
  );
};
export default MarketListUI;
