import styled from 'styled-components/native';
export const Container = styled.View`
  flex: 1;
`;
export const Wrapper = styled.ScrollView``;
export const TitleWrapper = styled.View`
  padding: 30px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #eaeaea;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const CommentsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
  border-bottom-width: 1px;
  border-bottom-color: #eaeaea;
`;
export const UserImage = styled.ImageBackground`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;
export const CommentsLeftWrapper = styled.View`
  padding-left: 10px;
`;
export const CommentsUserName = styled.Text`
  font-size: 14px;
  color: #333;
`;
export const CommentsCreactedAt = styled.Text`
  font-size: 14px;
  color: #4f4f4f;
`;
export const CommentsRightWrapper = styled.View`
  padding-left: 20px;
`;
export const CommentsContents = styled.Text`
  width: 230px;
  font-size: 16px;
`;
export const WriteCommentWrapper = styled.View`
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  height: 70px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const WriteUserImage = styled.ImageBackground`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;
export const CommentsInput = styled.TextInput`
  width: 80%;
`;
export const CommentsSubmit = styled.TouchableOpacity``;
export const SubmitText = styled.Text``;
