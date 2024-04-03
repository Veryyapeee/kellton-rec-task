import {View} from 'react-native';
import {styled} from 'styled-components/native';

const StyledText = styled.Text`
  color: ${theme => theme.theme.font.contrast};
`;

export const InitialScreen = () => {
  return (
    <View>
      <StyledText>Initial</StyledText>
    </View>
  );
};
