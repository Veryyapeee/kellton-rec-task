import {TextProps} from 'react-native';
import styled from 'styled-components/native';

import {TextSizeVariant, TextVariant} from '../../theme/types';

type CommonProps = {
  variant?: TextVariant;
  size?: TextSizeVariant;
};

type Props = CommonProps & TextProps;

const StyledText = styled.Text<CommonProps>`
  font-size: ${props => props.theme.typography.text[props.size || 'md']}px;
  color: ${props => props.theme.palette.font[props.variant || 'primary']};
`;

export const Text = (props: Props) => <StyledText {...props} />;
