import styled from 'styled-components/native';

import {AppColor} from '../../../theme/types';

export const minifigContainerWidth = 200;
export const minifigContainerHeight = 50;

export const MinifigPartContainer = styled.View<{
  backgroundColor?: AppColor;
}>`
  flex-direction: row;
  align-items: center;
  width: ${minifigContainerWidth}px;
  height: ${minifigContainerHeight}px;
  background-color: ${props =>
    props.backgroundColor
      ? props.theme.palette.app[props.backgroundColor]
      : 'transparent'};
`;
