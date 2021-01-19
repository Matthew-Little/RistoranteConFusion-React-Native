import React,{ Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Main from './components/MainComponent';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    );
  }
}

export default App;