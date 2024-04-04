import styled from 'styled-components/native';

import {Text} from '../../components/Atoms/Text';
import {BaseScreen} from '../../components/Organism/BaseScreen';
import {ModalSummaryFormData} from './ModalSummaryFormData';

const Container = styled(BaseScreen)`
  padding: 50px 40px;
`;

export const ModalSummaryForm = () => {
  return (
    <Container enableSafeArea={false} backgroundColor="backgroundSecondary">
      <ModalSummaryFormData>
        {() => (
          <Text variant="secondary" size="xlg" fontWeight="bold">
            SUMMARY
          </Text>
        )}
      </ModalSummaryFormData>
    </Container>
  );
};
