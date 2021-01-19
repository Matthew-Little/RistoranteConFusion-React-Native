import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes.js';

function RenderDish(props) {
    const dish = props.dish;

    if(dish != null) {
        return (
            <Card>
                <Card.Image  source={require('./images/uthappizza.png')}>
                    <Card.FeaturedTitle style={{alignSelf: 'center', marginTop: 60}}>{dish.name}</Card.FeaturedTitle>
                </Card.Image>
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
            </Card>
        );
    } else {
        return  (
            <View />
        );
    }
}



class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        }
    }

    static NavigationOptions = {
        title: 'Dish Details'
    };

    render() {

        const dishId = this.props.route.params.dishId

        return(
            <RenderDish dish={this.state.dishes[+dishId]} />
       );
    }
}


export default DishDetail;