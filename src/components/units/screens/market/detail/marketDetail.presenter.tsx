import React, {useContext} from 'react';
import {
  ButtonText,
  ChatButton,
  Container,
  ItemContents,
  ItemCreatedAt,
  ItemImage,
  ItemInfoWrapper,
  ItemTitle,
  UserAddress,
  UserImage,
  UserInfoLeftContents,
  UserInfoRightContents,
  UserInfoWrapper,
  UserLikeCount,
  UserLikeLogo,
  UserName,
  UserWrapper,
  Wrapper,
  DeleteButton,
  EtcButtonWrapper,
  ModalWrapper,
  ModalView,
  ModalText,
  ModalButtonWrapper,
  ModalButton,
  ModalButtonText,
} from './marketDetail.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {GlobalContext} from '../../../../../../App';
import { Alert, Modal } from 'react-native';
import { IMarketDetailUIProps } from './marketDetail.types';
const MarketDetailUI = (props:IMarketDetailUIProps) => {
  const {userInfo}:any = useContext(GlobalContext);
  return (
    <>
        <Modal
        animationType="fade"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={()=>{
          Alert.alert('상품이 정상적으로 삭제되었습니다')
          props.setModalVisible(!props.modalVisible)
        }}
        >
          <ModalWrapper>
            <ModalView>
              <ModalText>상품을 삭제하시겠습니까?</ModalText>
              <ModalButtonWrapper>
                <ModalButton onPress={props.onPressDelete}><ModalButtonText>예</ModalButtonText></ModalButton>
                <ModalButton onPress={props.onPressCloseModal}><ModalButtonText>아니오</ModalButtonText></ModalButton>
              </ModalButtonWrapper>
            </ModalView>
          </ModalWrapper>
        </Modal>

      <Container>
        
        <ItemImage source={{uri:`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}}/>
        
        <Wrapper>
          <UserWrapper>
          <UserImage
                imageStyle={{
                  borderTopLeftRadius: 60,
                  borderTopRightRadius: 60,
                  borderBottomLeftRadius: 60,
                  borderBottomRightRadius: 60,
                }}
                source={{uri: `${props.data?.fetchUseditem.seller.picture}`}}
              />
            <UserInfoWrapper>
              <UserInfoLeftContents>
                <UserName>{props.data?.fetchUseditem.seller.name}</UserName>
                <UserAddress style={{fontWeight: 'bold'}}>
                  {props.data?.fetchUseditem.useditemAddress?.address}
                </UserAddress>
                <UserAddress numberOfLines={2} ellipsizeMode="tail">
                  {props.data?.fetchUseditem.useditemAddress?.addressDetail}
                </UserAddress>
              </UserInfoLeftContents>
              <UserInfoRightContents>
                <UserLikeCount>
                  {props.data?.fetchUseditem.pickedCount}
                </UserLikeCount>
                <UserLikeLogo onPress={props.onPressToggle}>
                  <Icon size={40} color={'#26EBA6'} name="md-paw" />
                </UserLikeLogo>
              </UserInfoRightContents>
            </UserInfoWrapper>
          </UserWrapper>
          <ItemInfoWrapper>
            <ItemTitle>{props.data?.fetchUseditem.name}</ItemTitle>
            <ItemCreatedAt>
              {props.data?.fetchUseditem.createdAt.split('T')[0]}
            </ItemCreatedAt>
            <ItemContents>{props.data?.fetchUseditem.contents}</ItemContents>
          </ItemInfoWrapper>
          {props.data?.fetchUseditem.seller.name ===
          userInfo.name ? (
            <EtcButtonWrapper>
              <DeleteButton onPress={props.onPressOpenModal}>
                <>
                  <Icon size={20} color={'#fff'} name="md-close" />
                  <ButtonText>삭제</ButtonText>
                </>
              </DeleteButton>
            </EtcButtonWrapper>
          ) : (
            <ChatButton onPress={props.onPressChat}>
              <>
                <Icon size={30} color={'#fff'} name="md-chatbubble-ellipses" />
                <ButtonText >채팅으로 거래신청</ButtonText>
              </>
            </ChatButton>
          )}
        </Wrapper>
      </Container>
    </>
  );
};
export default MarketDetailUI;
