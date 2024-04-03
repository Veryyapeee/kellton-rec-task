import {TextProps} from 'react-native';
import styled from 'styled-components/native';

import {Theme} from '../../theme/types';

type Variant = keyof Theme['palette']['font'];

type Size = keyof Theme['typography']['text'];

type CommonProps = {
  variant?: Variant;
  size?: Size;
};

type Props = CommonProps & TextProps;

const StyledText = styled.Text<CommonProps>`
  font-size: ${props => props.theme.typography.text[props.size || 'md']}px;
  color: ${props => props.theme.palette.font[props.variant || 'primary']};
`;

export const Text = (props: Props) => <StyledText {...props} />;
