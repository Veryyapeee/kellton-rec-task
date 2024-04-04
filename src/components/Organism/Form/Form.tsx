import {
  Children,
  cloneElement,
  ReactElement,
  useCallback,
  useMemo,
} from 'react';
import {Controller, FieldValues, Mode, Path, useForm} from 'react-hook-form';
import {View} from 'react-native';
import styled from 'styled-components/native';

import {Button} from '../../Atoms/Button';
import {CommonChildProps} from './types';

type Props<T> = {
  children: ReactElement<CommonChildProps>[] | ReactElement<CommonChildProps>;
  loading?: boolean;
  mode?: Mode;
  onSubmit: (data: T) => void;
  submitButtonText?: string;
};

const SubmitButton = styled(Button)`
  align-self: center;
  margin-top: 10px;
`;

export const Form = <T extends FieldValues>({
  children,
  loading,
  mode = 'onSubmit',
  onSubmit,
  submitButtonText = 'Submit',
}: Props<T>) => {
  const {
    control,
    handleSubmit,
    formState: {submitCount},
  } = useForm<T>({mode});

  const renderChild = useCallback(
    (child: ReactElement<CommonChildProps>) => {
      if (!child.props.name) {
        return child;
      }

      return (
        <Controller
          control={control}
          name={child.props.name as Path<T>}
          rules={child.props.rules}
          render={({
            field: {onChange, onBlur, value},
            fieldState: {
              isTouched: isTouchedFieldState,
              error: errorFieldState,
            },
          }) => {
            const {errorMessage, ...restProps} = child.props;

            const message = errorMessage || errorFieldState?.message;

            const isTouched = isTouchedFieldState || submitCount > 0;
            const isError = isTouched && !!(errorMessage || errorFieldState);

            return cloneElement(child, {
              ...restProps,
              errorMessage: isError ? message : undefined,
              onBlur,
              onChange,
              value,
            });
          }}
        />
      );
    },
    [control, submitCount],
  );

  const childrenArray = useMemo(
    () => (Array.isArray(children) ? children : [children]),
    [children],
  );

  const FormElements = useMemo(
    () => Children.map(childrenArray, renderChild),
    [childrenArray, renderChild],
  );

  return (
    <View>
      {FormElements}
      <SubmitButton loading={loading} onPress={handleSubmit(onSubmit)}>
        {submitButtonText}
      </SubmitButton>
    </View>
  );
};
