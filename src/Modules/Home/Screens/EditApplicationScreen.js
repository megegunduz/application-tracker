import React from 'react';
import { Text, View } from 'react-native';

const EditApplicationScreen = props => {

    const { applicationItem } = props.route.params;

    console.log(applicationItem);

    return (
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
            <Text>{applicationItem.companyName}</Text>
        </View>
    );
};

export default EditApplicationScreen;