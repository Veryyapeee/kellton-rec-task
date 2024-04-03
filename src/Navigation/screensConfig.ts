import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

import {InitialScreen} from '../screens/InitialScreen/InitialScreen';
import {ModalSummaryForm} from '../screens/ModalSummaryForm/ModalSummaryForm';
import {ShippingFormScreen} from '../screens/ShippingFormScreen/ShippingFormScreen';
import {WebViewScreen} from '../screens/WebViewScreen/WebViewScreen';
import {ScreenConfig} from './types';

export const stackScreens: ScreenConfig[] = [
  {name: 'InitialScreen', component: InitialScreen},
  {name: 'WebViewScreen', component: WebViewScreen},
  {name: 'ShippingFormScreen', component: ShippingFormScreen},
  {
    name: 'ModalSummaryForm',
    component: ModalSummaryForm,
    options: {presentation: 'modal'},
  },
];

export const navigatorConfig: NativeStackNavigationOptions = {
  headerShown: false,
};
