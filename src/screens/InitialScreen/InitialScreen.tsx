import {Button} from '../../components/Atoms/Button';
import {Image} from '../../components/Atoms/Image';
import {Text} from '../../components/Atoms/Text';
import {BaseScreen} from '../../components/Organism/BaseScreen';

export const InitialScreen = () => {
  return (
    <BaseScreen>
      <Text>Initial</Text>
      <Button>Test button</Button>
      <Image
        width={200}
        height={200}
        uri={'https://cdn.rebrickable.com/media/sets/fig-000001/55726.jpg'}
      />
    </BaseScreen>
  );
};
