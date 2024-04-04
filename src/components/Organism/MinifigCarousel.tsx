import {useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import styled from 'styled-components/native';

import {Minifig} from '../../API/types';
import {fullScreenWidth} from '../../utils/dimensions';
import {minifigTileDimension} from '../Molecules/MinifigTile/Minifig.shared';
import {MinifigTile} from '../Molecules/MinifigTile/MinifigTile';
import {MinifigTilePlaceholder} from '../Molecules/MinifigTile/MinifigTilePlaceholder';

type Props = {
  data?: Minifig[];
  onShowDetailsPress: (url: string) => void;
  onTilePress: (set_num: string) => void;
};

const ITEM_SEPARATOR_SIZE = 30;
const ITEM_SPACING = (fullScreenWidth - minifigTileDimension) / 2;
const SNAP_TO_INTERVAL = minifigTileDimension + ITEM_SEPARATOR_SIZE;

const contentContainerStyles = {
  paddingHorizontal: ITEM_SPACING,
};

const Separator = styled.View`
  width: ${ITEM_SEPARATOR_SIZE}px;
`;

const renderListSeparator = () => <Separator />;

export const MinifigCarousel = ({data, ...props}: Props) => {
  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Minifig>) => (
      <MinifigTile minifig={item} key={item.set_num} {...props} />
    ),
    [props],
  );

  return (
    <FlatList
      data={data}
      ListEmptyComponent={MinifigTilePlaceholder}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      snapToAlignment="start"
      snapToInterval={SNAP_TO_INTERVAL}
      ItemSeparatorComponent={renderListSeparator}
      contentContainerStyle={contentContainerStyles}
    />
  );
};