import {useFetchRandomPotterMinifigs} from '../../API/queries';
import {Button} from '../../components/Atoms/Button';
import {Text} from '../../components/Atoms/Text';
import {BaseScreen} from '../../components/Organism/BaseScreen';
import {MinifigCarousel} from '../../components/Organism/MinifigCarousel';

export const InitialScreen = () => {
  const {data} = useFetchRandomPotterMinifigs();

  const onPressTest = () => {};
  const onPressDetailsTest = () => {};

  return (
    <BaseScreen>
      <Text size="xlg" fontWeight="bold">
        CHOOSE YOUR MINIFIG
      </Text>
      <MinifigCarousel
        data={data?.results}
        onShowDetailsPress={onPressDetailsTest}
        onTilePress={onPressTest}
      />
      <Text>Initial</Text>
      <Button>Test button</Button>
    </BaseScreen>
  );
};
