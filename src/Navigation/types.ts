import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {ComponentType} from 'react';

export type RootStackParamList = {
  InitialScreen: undefined;
  ModalSummaryForm: undefined;
  ShippingFormScreen: undefined;
  WebViewScreen: {url?: string};
};

export type ScreenType = keyof RootStackParamList;

export type ScreenConfig = {
  name: ScreenType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType<any>;
  options?: NativeStackNavigationOptions;
};

export type StackNavigationType = StackNavigationProp<RootStackParamList>;
