import styled from 'styled-components/native';

import {AppColor} from '../../../theme/types';
import {fullScreenWidth} from '../../../utils/dimensions';

export const minifigTileDimension = Math.min(fullScreenWidth - 100, 550);

export const MinifigTileContainer = styled.View<{
  backgroundColor?: AppColor;
  selected?: boolean;
}>`
  background-color: ${props =>
    props.theme.palette.app[props.backgroundColor || 'backgroundSecondary']};
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  border-radius: 15px;
  width: ${minifigTileDimension}px;
  height: ${minifigTileDimension}px;
  ${props =>
    props.selected
      ? {
          'border-color': props.theme.palette.app.contrast,
          'border-width': '3px',
        }
      : {}}
`;
