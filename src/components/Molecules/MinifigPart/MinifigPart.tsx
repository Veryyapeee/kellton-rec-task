import styled from 'styled-components/native';

import {MinifigPart as MinifigPartType} from '../../../API/types';
import {Image} from '../../Atoms/Image';
import {Text} from '../../Atoms/Text';
import {MinifigPartContainer} from './Minifig.shared';

type Props = {
  part: MinifigPartType;
};

const TextContainer = styled.View`
  margin-left: 10px;
`;

export const MinifigPart = ({part}: Props) => {
  return (
    <MinifigPartContainer>
      <Image uri={part.part.part_img_url} width={'50px'} height={'50px'} />
      <TextContainer>
        <Text variant="secondary" size="sm" textAlign="left" fontWeight="600">
          {part.part.name}
        </Text>
        <Text variant="contrast" size="sm" textAlign="left">
          {part.part.part_num}
        </Text>
      </TextContainer>
    </MinifigPartContainer>
  );
};
