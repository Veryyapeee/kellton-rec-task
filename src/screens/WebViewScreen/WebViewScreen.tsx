import {RouteProp, useRoute} from '@react-navigation/core';
import {useMemo} from 'react';
import {WebView} from 'react-native-webview';

import {If} from '../../components/If';
import {
  WebViewBackButton,
  WebViewLoadingIndicatorView,
} from '../../components/Molecules/WebViewUtility';
import {BaseScreen} from '../../components/Organism/BaseScreen';
import {RootStackParamList} from '../../Navigation/types';

export const WebViewScreen = () => {
  const {
    params: {url},
  } = useRoute<RouteProp<RootStackParamList, 'WebViewScreen'>>();

  const source = useMemo(() => (url ? {url} : undefined), [url]);

  return (
    <BaseScreen>
      <WebViewBackButton />
      <If condition={url}>
        <WebView
          renderLoading={WebViewLoadingIndicatorView}
          startInLoadingState
          source={source}
          allowsInlineMediaPlayback
        />
      </If>
    </BaseScreen>
  );
};
