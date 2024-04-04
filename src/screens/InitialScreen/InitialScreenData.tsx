import {useNavigation} from '@react-navigation/native';
import {useCallback, useMemo, useState} from 'react';

import {useFetchRandomPotterMinifigs} from '../../API/queries';
import {Minifig} from '../../API/types';
import {useMinifigContext} from '../../context/MinifigContext';
import {StackNavigationType} from '../../Navigation/types';

type Data = {
  state: {
    data?: Minifig[];
    selectedTileId?: string;
  };
  onShowDetailsPress: (url: string) => void;
  onTilePress: (minifig: Minifig) => void;
  onSubmit: () => void;
};

type Props = {
  children: (data: Data) => JSX.Element;
};

export const InitialScreenData = ({children}: Props) => {
  const navigation = useNavigation<StackNavigationType>();

  const {setMinifig} = useMinifigContext();

  const [selectedTileId, setSelectedTileId] = useState<string | undefined>();

  const {data: minifigsData} = useFetchRandomPotterMinifigs();

  const onShowDetailsPress = useCallback(
    (url: string) => {
      navigation.navigate('WebViewScreen', {url});
    },
    [navigation],
  );

  const onTilePress = useCallback(
    (minifig: Minifig) => {
      const {set_num} = minifig;

      setSelectedTileId(prevId => {
        if (prevId === set_num) {
          setMinifig(undefined);
          return undefined;
        }
        setMinifig(minifig);
        return set_num;
      });
    },
    [setMinifig],
  );

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
