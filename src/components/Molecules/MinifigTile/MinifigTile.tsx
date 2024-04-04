import {useCallback} from 'react';
import {TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';

import {Minifig} from '../../../API/types';
import {Image} from '../../Atoms/Image';
import {Text} from '../../Atoms/Text';
import {If} from '../../If';
import {MinifigTileContainer} from './Minifig.shared';

type Props = {
  minifig: Minifig;
  selected?: boolean;
  onShowDetailsPress: (url: string) => void;
  onTilePress: (minifig: Minifig) => void;
};

const StyledText = styled(Text)`
  margin-top: 15px;
`;

export const MinifigTile = ({
  minifig,
  onShowDetailsPress: onShowDetailsPressProps,
  onTilePress: onTilePressProp,
  selected,
}: Props) => {
  const showDetails = useCallback(() => {
    onShowDetailsPressProps(minifig.set_url);
  }, [onShowDetailsPressProps, minifig.set_url]);

  const onTilePress = useCallback(() => {
    onTilePressProp(minifig);
  }, [onTilePressProp, minifig]);

  return (
    <TouchableWithoutFeedback onPress={onTilePress}>
      <MinifigTileContainer selected={selected}>
        <Image
          uri={minifig.set_img_url}
          width={'100%'}
          height={'70%'}
          resizeMode="contain"
        />
        <If condition={minifig.name}>
          <StyledText variant="secondary" fontWeight="bold" numberOfLines={2}>
            {minifig.name}
          </StyledText>
        </If>
        <TouchableOpacity onPress={showDetails}>
          <StyledText variant="contrast" fontWeight="600">
            Show details
          </StyledText>
        </TouchableOpacity>
      </MinifigTileContainer>
    </TouchableWithoutFeedback>
  );
};
