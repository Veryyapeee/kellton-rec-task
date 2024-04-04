import {useNavigation} from '@react-navigation/native';
import {useCallback, useMemo} from 'react';

import {useFetchMinifigParts} from '../../API/queries';
import {MinifigPart} from '../../API/types';
import {useMinifigContext} from '../../context/MinifigContext';
import {StackNavigationType} from '../../Navigation/types';

type Data = {
  state: {
    partsData?: MinifigPart[];
  };
  onSubmit: () => void;
};

type Props = {
  children: (data: Data) => JSX.Element;
};

export const ModalSummaryFormData = ({children}: Props) => {
  const {minifig} = useMinifigContext();

  const {data: partsData} = useFetchMinifigParts(minifig?.set_num);

  const navigation = useNavigation<StackNavigationType>();

  const onSubmit = useCallback(() => {
    navigation.popToTop();
  }, [navigation]);

  const data = useMemo<Data>(
    () => ({
      state: {
        partsData: partsData?.results,
      },
      onSubmit,
    }),
    [onSubmit, partsData?.results],
  );

  return children(data);
};
