import styled from 'styled-components/native';
export const ModalWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const ModalView = styled.View`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 50px;
  border-radius: 20px;
  align-items: center;
`;
export const ModalText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
export const ModalButtonWrapper = styled.View`
  flex-direction: row;
  padding-top: 20px;
`;
export const ModalButton = styled.TouchableOpacity`
  width: 80px;
  margin: 10px;
  border-radius: 5px;
  background-color: #26eba6;
  justify-content: center;
  align-items: center;
`;
export const ModalButtonText = styled.Text`
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const Container = styled.ScrollView``;
export const ItemImage = styled.Image`
  height: 280px;
`;
export const Wrapper = styled.View``;
export const UserWrapper = styled.View`
  flex-direction: row;
  padding: 15px 30px;
  border-bottom-width: 1px;
  border-bottom-color: #eaeaea;
`;
export const UserImage = styled.ImageBackground`
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 60px;
`;
export const UserInfoWrapper = styled.View`
  margin-left: 10px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
export const UserInfoLeftContents = styled.View`
  justify-content: space-evenly;
`;
export const UserName = styled.Text`
  font-size: 18px;
`;
export const UserAddress = styled.Text`
  width: 200px;
  font-size: 14px;
  color: #4f4f4f;
`;
export const UserInfoRightContents = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const UserLikeCount = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #26eba6;
  padding-right: 10px;
`;
export const UserLikeLogo = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
export const ItemInfoWrapper = styled.View`
  padding: 30px;
`;
export const ItemTitle = styled.Text`
  font-size: 18px;
  padding-bottom: 10px;
`;
export const ItemCreatedAt = styled.Text`
  font-size: 12px;
  color: #4f4f4f;
  padding-bottom: 20px;
`;
export const ItemContents = styled.Text`
  font-size: 14px;
`;
export const ChatButton = styled.TouchableOpacity`
  margin: 30px;
  height: 55px;
  background-color: #26eba6;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
export const EtcButtonWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const EditButton = styled.TouchableOpacity`
  margin: 30px 0 30px 30px;
  flex: 1;
  height: 40px;
  background-color: #26eba6;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const DeleteButton = styled.TouchableOpacity`
  margin: 30px 30px 30px 30px;
  flex: 1;
  height: 55px;
  background-color: #26eba6;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
