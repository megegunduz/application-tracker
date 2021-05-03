import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import Modal from 'react-native-modal';

import { loadingSelector } from './LoadingRedux';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const LoadingManager = props => {
    
    const isLoading = useSelector(loadingSelector);
    
    return (
        <Modal
        isVisible={isLoading}>
            <View style={styles.container}>
                <ActivityIndicator color='grey'/>
            </View>
        </Modal>
        
    );
};

export default LoadingManager;
