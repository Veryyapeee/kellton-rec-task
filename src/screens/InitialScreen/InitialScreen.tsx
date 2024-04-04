import {View} from 'react-native';
import styled from 'styled-components/native';

import {Button} from '../../components/Atoms/Button';
import {Text} from '../../components/Atoms/Text';
import {BaseScreen} from '../../components/Organism/BaseScreen';
import {MinifigCarousel} from '../../components/Organism/MinifigCarousel';
import {InitialScreenData} from './InitialScreenData';

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
`;

export const InitialScreen = () => {
  return (
    <BaseScreen>
      <InitialScreenData>
        {({state, onShowDetailsPress, onTilePress, onSubmit}) => (
          <Container>
            <View>
              <Text size="xlg" fontWeight="bold">
                CHOOSE YOUR MINIFIG
              </Text>
            </View>
            <MinifigCarousel
              data={state.data}
              selectedId={state.selectedTileId}
              onShowDetailsPress={onShowDetailsPress}
              onTilePress={onTilePress}
            />
            <Button disabled={!state.selectedTileId} onPress={onSubmit}>
              CHOOSE FIGURE
            </Button>
          </Container>
        )}
      </InitialScreenData>
    </BaseScreen>
  );
};
