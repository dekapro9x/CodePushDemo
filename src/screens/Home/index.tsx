import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { verCodePush } from '../../const';
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text22}>{verCodePush}</Text>
        </View>
    )
}

export default HomeScreen;