import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { ListItem, Avatar, Card } from 'react-native-elements';

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

function DishDetail(props) {
   return(
        <RenderDish dish={props.dish} />
   );
}


export default DishDetail;