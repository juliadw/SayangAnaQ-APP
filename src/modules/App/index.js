import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Router from '../../app/stores/Router'
import store from '../../app/stores';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

