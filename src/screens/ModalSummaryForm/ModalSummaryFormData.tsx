import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useCallback, useMemo} from 'react';

import {useFetchMinifigParts, useSubmitPurchase} from '../../API/queries';
import {Minifig, MinifigPart} from '../../API/types';
import {useMinifigContext} from '../../context/MinifigContext';
import {RootStackParamList, StackNavigationType} from '../../Navigation/types';

type Data = {
  state: {
    partsData?: MinifigPart[];
    minifig?: Minifig;
    loading?: boolean;
  };
  onSubmit: () => void;
};

type Props = {
  children: (data: Data) => JSX.Element;
};

export const ModalSummaryFormData = ({children}: Props) => {
  const {
    params: {formData: shippingFormData},
  } = useRoute<RouteProp<RootStackParamList, 'ModalSummaryForm'>>();
  const {minifig} = useMinifigContext();

  const {data: partsData} = useFetchMinifigParts(minifig?.set_num);

  const {mutation: submitPurchase, loading} = useSubmitPurchase();

  const navigation = useNavigation<StackNavigationType>();

  const onSubmit = useCallback(async () => {
    await submitPurchase({
      shippingInfo: shippingFormData,
      minifig_id: minifig?.set_num || '',
    });
    navigation.popToTop();
  }, [minifig?.set_num, navigation, shippingFormData, submitPurchase]);

  const data = useMemo<Data>(
    () => ({
      state: {
        partsData: partsData?.results,
        minifig,
        loading,
      },
      onSubmit,
    }),
    [loading, minifig, onSubmit, partsData?.results],
  );

  return children(data);
};
