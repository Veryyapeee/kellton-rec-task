import {useCallback} from 'react';
import {TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';

import {Minifig} from '../../../API/types';
import {MinifigWithTitle} from '../../Atoms/MinifigWithTitle';
import {Text} from '../../Atoms/Text';
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
        <MinifigWithTitle {...minifig} />
        <TouchableOpacity onPress={showDetails}>
          <StyledText variant="contrast" fontWeight="600">
            Show details
          </StyledText>
        </TouchableOpacity>
      </MinifigTileContainer>
    </TouchableWithoutFeedback>
  );
};
