import {useNavigation} from '@react-navigation/native';
import {useCallback, useMemo, useState} from 'react';

import {useFetchRandomPotterMinifigs} from '../../API/queries';
import {Minifig} from '../../API/types';
import {StackNavigationType} from '../../Navigation/types';

type Data = {
  state: {
    data?: Minifig[];
    selectedTileId?: string;
  };
  onShowDetailsPress: (url: string) => void;
  onTilePress: (set_num: string) => void;
  onSubmit: () => void;
};

type Props = {
  children: (data: Data) => JSX.Element;
};

export const InitialScreenData = ({children}: Props) => {
  const navigation = useNavigation<StackNavigationType>();

  const [selectedTileId, setSelectedTileId] = useState<string | undefined>();

  const {data: minifigsData} = useFetchRandomPotterMinifigs();

  const onShowDetailsPress = useCallback(
    (url: string) => {
      navigation.navigate('WebViewScreen', {url});
    },
    [navigation],
  );

  const onTilePress = useCallback((set_num: string) => {
    setSelectedTileId(prevId => {
      if (prevId === set_num) {
        return undefined;
      }
      return set_num;
    });
  }, []);

  const onSubmit = useCallback(() => {
    navigation.navigate('ShippingFormScreen');
  }, [navigation]);

  const data = useMemo<Data>(
    () => ({
      state: {
        data: minifigsData,
        selectedTileId,
      },
      onShowDetailsPress,
      onTilePress,
      onSubmit,
    }),
    [minifigsData, onShowDetailsPress, onSubmit, onTilePress, selectedTileId],
  );

  return children(data);
};
