import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { keyNavigation } from "./key-navigation";
//Danh sách màn hình:
import HomeScreen from '../screens/Home';
const RootStack = createNativeStackNavigator();

const RootStackNavigation = () => {
    return (
        <RootStack.Navigator
            initialRouteName={keyNavigation.HOME}
            screenOptions={({ route, navigation }: any) => ({
                headerShown: false,
                gestureEnabled: true
            })}>
            {/* Màn hình thông thường */}
            <RootStack.Group>
                <RootStack.Screen name={keyNavigation.HOME} component={HomeScreen} />
            </RootStack.Group>
            {/* Màn hình dạng modal */}
            <RootStack.Group screenOptions={{ presentation: 'modal' }}>
            </RootStack.Group>
        </RootStack.Navigator>
    );
};

export default RootStackNavigation;
