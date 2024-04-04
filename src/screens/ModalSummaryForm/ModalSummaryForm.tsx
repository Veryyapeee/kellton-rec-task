import styled from 'styled-components/native';

import {MinifigWithTitle} from '../../components/Atoms/MinifigWithTitle';
import {Text} from '../../components/Atoms/Text';
import {If} from '../../components/If';
import {BaseScreen} from '../../components/Organism/BaseScreen';
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

export const ModalSummaryForm = () => {
  return (
    <Container enableSafeArea={false} backgroundColor="backgroundSecondary">
      <ModalSummaryFormData>
        {({state}) => (
          <>
            <Text variant="secondary" size="xlg" fontWeight="bold">
              SUMMARY
            </Text>
            <If condition={state.minifig}>
              <MinifigContainer>
                <MinifigWithTitle {...state.minifig!} />
              </MinifigContainer>
            </If>
          </>
        )}
      </ModalSummaryFormData>
    </Container>
  );
};
