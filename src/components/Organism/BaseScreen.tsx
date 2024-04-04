import {PropsWithChildren, ReactNode, useCallback} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import {AppColor} from '../../theme/types';
import {isAndroid} from '../../utils/platform';
import {WrapperComponent} from '../Wrapper';

type CommonProps = {
  enableSafeArea?: boolean;
  backgroundColor?: AppColor;
};

type Props = PropsWithChildren &
  CommonProps & {
    enableKeyboardDismiss?: boolean;
    enableKeyboardAvoid?: boolean;
    enableScrollView?: boolean;
  };

type StyledProps = CommonProps & {
  topInset: number;
  bottomInset: number;
};

const StyledView = styled.View<StyledProps>`
  flex: 1;
  padding-top: ${props => (props.enableSafeArea ? props.topInset : 0)}px;
  padding-bottom: ${props => (props.enableSafeArea ? props.bottomInset : 0)}px;
  background-color: ${props =>
    props.theme.palette.app[props.backgroundColor || 'backgroundPrimary']};
`;

const StyledScrollView = styled.ScrollView<
  Pick<CommonProps, 'backgroundColor'>
>`
  flex: 1;
  background-color: ${props =>
    props.theme.palette.app[props.backgroundColor || 'backgroundPrimary']};
`;

const StyledKeyboardAvoidingView = styled(KeyboardAvoidingView)`
  flex: 1;
`;

export const BaseScreen = ({
  children,
  enableSafeArea = true,
  enableKeyboardAvoid,
  enableKeyboardDismiss,
  enableScrollView,
  ...props
}: Props) => {
  const {top, bottom} = useSafeAreaInsets();

  const keyboardAvoidingWrapper = useCallback(
    (wrapperChildren: ReactNode) => (
      <StyledKeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={isAndroid ? StatusBar.currentHeight : -bottom}
        enabled>
        {wrapperChildren}
      </StyledKeyboardAvoidingView>
    ),
    [bottom],
  );

  const keyboardDismissWrapper = useCallback(
    (wrapperChildren: ReactNode) => (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {wrapperChildren}
      </TouchableWithoutFeedback>
    ),
    [],
  );

  const scrollViewWrapper = useCallback(
    (wrapperChildren: ReactNode) => (
      <StyledScrollView
        backgroundColor={props.backgroundColor}
        bounces={false}
        showsVerticalScrollIndicator>
        {wrapperChildren}
      </StyledScrollView>
    ),
    [props.backgroundColor],
  );

  return (
    <WrapperComponent
      condition={enableKeyboardAvoid}
      wrapper={keyboardAvoidingWrapper}>
      <WrapperComponent
        condition={enableScrollView || enableKeyboardAvoid}
        wrapper={scrollViewWrapper}>
        <WrapperComponent
          condition={enableKeyboardDismiss}
          wrapper={keyboardDismissWrapper}>
          <StyledView
            topInset={top}
            bottomInset={bottom}
            enableSafeArea={enableSafeArea}
            {...props}>
            {children}
          </StyledView>
        </WrapperComponent>
      </WrapperComponent>
    </WrapperComponent>
  );
};
