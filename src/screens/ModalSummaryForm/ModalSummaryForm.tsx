import styled from 'styled-components/native';

import {Button} from '../../components/Atoms/Button';
import {MinifigWithTitle} from '../../components/Atoms/MinifigWithTitle';
import {Text} from '../../components/Atoms/Text';
import {If} from '../../components/If';
import {BaseScreen} from '../../components/Organism/BaseScreen';
import {MinifigPartsList} from '../../components/Organism/MinifigPartsList';
import {ModalSummaryFormData} from './ModalSummaryFormData';

const Container = styled(BaseScreen)`
  padding: 50px 40px;
  align-items: center;
`;

const MinifigContainer = styled.View`
  margin-top: 20px;
  width: 60%;
  height: 200px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

export const ModalSummaryForm = () => {
  return (
    <Container backgroundColor="backgroundSecondary">
      <ModalSummaryFormData>
        {({state, onSubmit}) => (
          <>
            <Text variant="secondary" size="xlg" fontWeight="bold">
              SUMMARY
            </Text>
            <If condition={state.minifig}>
              <MinifigContainer>
                <MinifigWithTitle {...state.minifig!} />
              </MinifigContainer>
            </If>
            <MinifigPartsList data={state.partsData} />
            <StyledButton onPress={onSubmit} loading={state.loading}>
              SUBMIT
            </StyledButton>
          </>
        )}
      </ModalSummaryFormData>
    </Container>
  );
};
