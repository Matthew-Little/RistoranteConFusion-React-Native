import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Menu from './MenuComponent';

const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu },
  DishDetail: { screen: DishDetail}
}, { 
  initialRouteName: 'Menu',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#512DA8'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color:'#fff'
    }
  }
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  onDishSelect(dishId) {
      this.setState({selectedDish: dishId});
  }

  render() {
 
    return (
        <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
            <MenuNavigator />
        </View>
    );
  }
}
  
export default Main;