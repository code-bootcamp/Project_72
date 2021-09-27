import styled from 'styled-components/native';
export const Container = styled.View``;
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
export const UserInfoWrapper = styled.View`
  padding: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const UserImage = styled.ImageBackground`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
`;
export const UserInfoLeftWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const UserName = styled.Text`
  margin-left:10px;
  font-size: 18px;
`;
export const UserInfoRightWrapper = styled.TouchableOpacity``;
export const UserInfoEdit = styled.Text`
  font-size: 12px;
  color: #4f4f4f;
`;
export const ListItemWrapper = styled.TouchableOpacity`
  padding: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 0.5px;
  border-bottom-color: #eaeaea;
`;
export const ListItemTitle = styled.Text`
  font-size: 16px;
`;
export const ListItemButton = styled.View`
  justify-content: center;
  align-items: center;
`;
