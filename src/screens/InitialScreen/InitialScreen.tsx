import {Button} from '../../components/Atoms/Button';
import {Text} from '../../components/Atoms/Text';
import {BaseScreen} from '../../components/Organism/BaseScreen';

export const InitialScreen = () => {
  return (
    <BaseScreen>
      <Text>Initial</Text>
      <Button>Test button</Button>
    </BaseScreen>
  );
};
