import {useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import styled from 'styled-components/native';

import {MinifigPart as MinifigPartType} from '../../API/types';
import {Text} from '../Atoms/Text';
import {If} from '../If';
import {MinifigPart} from '../Molecules/MinifigPart/MinifigPart';
import {MinifigPartPlaceholder} from '../Molecules/MinifigPart/MinifigPartPlaceholder';

type Props = {
  data?: MinifigPartType[];
};

const Container = styled.View`
  padding-top: 20px;
  flex: 1;
`;

const StyledText = styled(Text)`
  padding-bottom: 10px;
`;

const Footer = styled.View`
  height: 20px;
`;

const Separator = styled.View`
  height: 10px;
`;

const renderListSeparator = () => <Separator />;

export const MinifigPartsList = ({data, ...props}: Props) => {
  const title =
    data?.length === 1
      ? `There is ${data.length} part in this minifig:`
      : `There are ${data?.length} parts in this minifig:`;

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<MinifigPartType>) => (
      <MinifigPart part={item} key={item.part.part_num} {...props} />
    ),
    [props],
  );

  return (
    <Container>
      <If condition={data?.length != null}>
        <StyledText variant="secondary" fontWeight="bold">
          {title}
        </StyledText>
      </If>
      <FlatList
        data={data}
        ListEmptyComponent={MinifigPartPlaceholder}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={Footer}
        ItemSeparatorComponent={renderListSeparator}
      />
    </Container>
  );
};
