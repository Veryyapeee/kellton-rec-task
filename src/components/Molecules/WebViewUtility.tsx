import {useNavigation} from '@react-navigation/core';
import styled from 'styled-components/native';

import {Text} from '../Atoms/Text';

const StyledActivityIndicator = styled.ActivityIndicator`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;

export const WebViewLoadingIndicatorView = () => {
  return <StyledActivityIndicator size="large" />;
};

const StyledBackButtonContainer = styled.TouchableOpacity`
  margin: 5px;
`;

export const WebViewBackButton = () => {
  const navigation = useNavigation();

  return (
    <StyledBackButtonContainer onPress={navigation.goBack}>
      <Text>Back</Text>
    </StyledBackButtonContainer>
  );
};
