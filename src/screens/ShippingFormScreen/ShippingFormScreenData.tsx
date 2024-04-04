import {useNavigation} from '@react-navigation/native';
import {useCallback, useMemo} from 'react';

import {StackNavigationType} from '../../Navigation/types';
import {ShippingFormData} from './types';

type Data = {
  onSubmit: (data: ShippingFormData) => void;
};

type Props = {
  children: (data: Data) => JSX.Element;
};

export const ShippingFormScreenData = ({children}: Props) => {
  const navigation = useNavigation<StackNavigationType>();

  const onSubmit = useCallback(
    (data: ShippingFormData) => {
      navigation.navigate('ModalSummaryForm', {formData: data});
    },
    [navigation],
  );

  const data = useMemo<Data>(
    () => ({
      onSubmit,
    }),
    [onSubmit],
  );

  return children(data);
};
