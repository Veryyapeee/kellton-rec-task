import {Text} from '../../components/Atoms/Text';
import {BaseScreen} from '../../components/Organism/BaseScreen';
import {useMinifigContext} from '../../context/MinifigContext';

export const ModalSummaryForm = () => {
  const {minifig} = useMinifigContext();
  return (
    <BaseScreen enableSafeArea={false} backgroundColor="backgroundSecondary">
      <Text variant="secondary">{minifig?.name}</Text>
    </BaseScreen>
  );
};
