import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


const ApplicationItem = props => {

    

    return (
        <TouchableOpacity>
            <Text>{props.companyName}</Text>
            <View>
                <Text>{props.position}</Text>
                <Text>{props.applicationDate}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ApplicationItem;
