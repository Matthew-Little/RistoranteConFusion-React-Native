import React,{ Component } from 'react';
import { View, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';

const MenuNav = createStackNavigator();

class Main extends Component {
  constructor(props) {
    super(props);
  }

  onDishSelect(dishId) {
      this.setState({selectedDish: dishId});
  }

  render() {
 
    return (
        <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
            <MenuNav.Navigator
              initialRouteName="Menu"
              screenOptions={{
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: '#512DA8' },
                headerTitleStyle: { color:'#fff' }
              }}
            >
              <MenuNav.Screen name="Menu"
                component={Menu}
              />
              <MenuNav.Screen name="DishDetail"
                component={DishDetail}
              />
            </MenuNav.Navigator>
        </View>
    );
  }
}
  
export default Main;