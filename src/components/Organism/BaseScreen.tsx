import {PropsWithChildren} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

type CommonProps = {
  enableSafeArea?: boolean;
  backgroundColor?: string;
};

type Props = PropsWithChildren & CommonProps;

type StyledProps = CommonProps & {
  topInset: number;
  bottomInset: number;
};

const StyledView = styled.View<StyledProps>`
  flex: 1;
  padding-top: ${props => (props.enableSafeArea ? props.topInset : 0)}px;
  padding-bottom: ${props => (props.enableSafeArea ? props.bottomInset : 0)}px;
  background-color: ${props =>
    props.backgroundColor || props.theme.palette.app.backgroundPrimary};
`;

export const BaseScreen = ({
  children,
  enableSafeArea = true,
  ...props
}: Props) => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <StyledView
      topInset={top}
      bottomInset={bottom}
      enableSafeArea={enableSafeArea}
      {...props}>
      {children}
    </StyledView>
  );
};
