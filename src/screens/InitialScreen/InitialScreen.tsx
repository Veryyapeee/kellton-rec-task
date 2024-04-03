import {styled} from 'styled-components/native';

import {BaseScreen} from '../../components/Organism/BaseScreen';

const StyledText = styled.Text`
  color: ${theme => theme.theme.font.contrast};
`;

export const InitialScreen = () => {
  return (
    <BaseScreen>
      <StyledText>Initial</StyledText>
    </BaseScreen>
  );
};
