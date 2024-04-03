import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {renderStack} from './renderers';
import {navigatorConfig, stackScreens} from './screensConfig';
import {RootStackParamList} from './types';

export const {Navigator, Screen} =
  createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={navigatorConfig}
        initialRouteName={'InitialScreen'}>
        {renderStack({screens: stackScreens, Screen})}
      </Navigator>
    </NavigationContainer>
  );
};
