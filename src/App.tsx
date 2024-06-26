import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components/native';

import MinifixContextProvider from './context/MinifigContext';
import {AppNavigator} from './Navigation/AppNavigator';
import {theme} from './theme/theme';

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <MinifixContextProvider>
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </MinifixContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
