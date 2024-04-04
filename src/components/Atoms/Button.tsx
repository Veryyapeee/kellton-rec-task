import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';

import {ButtonVariant} from '../../theme/types';
import {If} from '../If';
import {Text} from './Text';

type CommonProps = {
  variant?: ButtonVariant;
};

type Props = TouchableOpacityProps &
  CommonProps & {
    children?: string;
    loading?: boolean;
  };

const StyledContainer = styled.TouchableOpacity<CommonProps>`
  border-radius: 15px;
  background-color: ${props =>
    props.theme.palette.button[props.variant || 'primary']};
  padding: 10px 20px;
  max-width: 200px;
  justify-content: center;
  align-items: center;
`;

export const Button = ({
  children,
  loading,
  variant,
  disabled,
  ...props
}: Props) => {
  return (
    <StyledContainer
      {...props}
      variant={disabled ? 'disabled' : variant}
      disabled={disabled || loading}>
      <If condition={children && !loading}>
        <Text>{children}</Text>
      </If>
      <If condition={loading}>
        <ActivityIndicator />
      </If>
    </StyledContainer>
  );
};
