import {TextInputProps, View} from 'react-native';
import styled from 'styled-components/native';

import {If} from '../If';
import {FormElementCommonProps} from '../Organism/Form/types';
import {Text} from './Text';

export type Props = Omit<TextInputProps, 'onChangeText'> &
  Partial<FormElementCommonProps> & {
    label?: string;
    error?: string;
  };

const StyledInput = styled.TextInput`
  padding: 10px 15px;
  background-color: ${({theme}) => theme.palette.app.backgroundSecondary};
  border: none;
  border-radius: 5px;
`;

const Label = styled(Text)`
  padding: 6px 0;
`;

const ErrorContainer = styled.View`
  height: 15px;
  justify-content: flex-end;
`;

export const Input = ({
  label,
  errorMessage,
  onChange,
  autoCapitalize = 'none',
  ...props
}: Props) => {
  return (
    <View>
      <If condition={label}>
        <Label size="sm" textAlign="left" fontWeight="600">
          {label}
        </Label>
      </If>
      <StyledInput
        {...props}
        onChangeText={onChange}
        autoCapitalize={autoCapitalize}
      />
      <ErrorContainer>
        <If condition={errorMessage}>
          <Text size="sm" variant="danger" textAlign="left">
            {errorMessage}
          </Text>
        </If>
      </ErrorContainer>
    </View>
  );
};
