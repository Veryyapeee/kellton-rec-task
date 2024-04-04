import {useCallback, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  ImageProps,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';

import {DimensionValue} from '../../theme/types';
import {If} from '../If';

type CommonProps = {
  width: DimensionValue;
  height: DimensionValue;
};

type Props = Omit<
  ImageProps,
  'onLoadStart' | 'onError' | 'onLoad' | 'source' | 'width' | 'height'
> &
  CommonProps & {
    uri?: string;
  };

const StyledView = styled.View<CommonProps & {error?: boolean}>`
  width: ${props => props.width};
  height: ${props => props.height};
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.error ? props.theme.palette.app.placeholder : 'unset'};
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Image = ({height, width, uri, ...props}: Props) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const source = useMemo<ImageSourcePropType>(() => ({uri}), [uri]);

  const onLoadStart = useCallback(() => setLoading(true), []);

  const onLoad = useCallback(() => setLoading(false), []);

  const onError = useCallback(() => {
    setError(true);
    setLoading(false);
  }, []);

  return (
    <StyledView width={width} height={height} error={error}>
      <If condition={loading}>
        <ActivityIndicator style={StyleSheet.absoluteFill} />
      </If>
      <StyledImage
        {...props}
        source={source}
        onLoadStart={onLoadStart}
        onLoad={onLoad}
        onError={onError}
      />
    </StyledView>
  );
};
