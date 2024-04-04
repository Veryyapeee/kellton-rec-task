import {TextProps, TextStyle} from 'react-native';
import styled from 'styled-components/native';

import {TextSizeVariant, TextVariant} from '../../theme/types';

type CommonProps = {
  variant?: TextVariant;
  size?: TextSizeVariant;
  fontWeight?: TextStyle['fontWeight'];
};

type Props = CommonProps & TextProps;

const StyledText = styled.Text<CommonProps>`
  font-size: ${props => props.theme.typography.text[props.size || 'md']}px;
  color: ${props => props.theme.palette.font[props.variant || 'primary']};
  font-weight: ${props => props.fontWeight || '500'};
  text-align: center;
`;

export const Text = (props: Props) => <StyledText {...props} />;
