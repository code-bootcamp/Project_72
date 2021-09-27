import styled from 'styled-components/native';
export const Container = styled.ScrollView``;
export const Wrapper = styled.View``;
export const UserWrapper = styled.View`
  flex-direction: row;
  padding: 15px 10px;
`;
export const UserImage = styled.ImageBackground`
  border: 1px solid #26eba6;
  margin-right: 10px;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
`;
export const UserInfoWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const UserInfoLeftContents = styled.View``;
export const UserInfoRightContents = styled.View`
  align-items: center;
  justify-content: center;
`;
export const UserName = styled.Text`
  font-size: 18px;
`;
export const CreatedAt = styled.Text`
  font-size: 14px;
  color: #4f4f4f;
`;
export const MoreButton = styled.TouchableOpacity`
  width: 50px;
  height: 60px;
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;
`;
export const ImageWrapper = styled.Image`
  height: 370px;
`;

export const ImageDefault = styled.View`
  height: 370px;
  background-color: gray;
`;
export const BoardContentsWrapper = styled.View`
  padding: 15px 10px;
  border-bottom-width: 1px;
  border-bottom-color: #eaeaea;
`;
export const BoardContentsText = styled.Text`
  font-size: 14px;
`;
export const BoardTitleText = styled.Text`
  font-size: 14px;
  color: #bdbdbd;
`;
export const CommentsWrapper = styled.View`
  padding: 15px 10px;

  border-bottom-width: 1px;
  border-bottom-color: #eaeaea;
`;
export const BoardComments = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const CommentsText = styled.Text`
  font-size: 12px;
  color: #828282;
`;
export const NewCommentsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
`;
export const CommentsUserImage = styled.ImageBackground`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
export const NewCommentsText = styled.Text`
  margin-left: 10px;
  font-size: 12px;
  color: #828282;
`;
export const ButtonWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  position: absolute;
  bottom: 15px;
  right: 15px;
`;
export const WriteButton = styled.View`
  width: 65px;
  height: 65px;
  justify-content: center;
  align-items: center;
  border-radius: 65px;
  background-color: #26eba6;
`;
