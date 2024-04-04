import styled from 'styled-components/native';

import {Minifig} from '../../API/types';
import {If} from '../If';
import {Image} from './Image';
import {Text} from './Text';

type Props = {
  name: Minifig['name'];
  set_img_url: Minifig['set_img_url'];
};

const StyledText = styled(Text)`
  margin-top: 15px;
`;

export const MinifigWithTitle = ({name, set_img_url}: Props) => {
  return (
    <>
      <Image
        uri={set_img_url}
        width={'100%'}
        height={'70%'}
        resizeMode="contain"
      />
      <If condition={name}>
        <StyledText variant="secondary" fontWeight="bold" numberOfLines={2}>
          {name}
        </StyledText>
      </If>
    </>
  );
};
