import RootStackNavigation from '../src/navigation/root-stack-navigations';
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import codePush from 'react-native-code-push';

const codePushOptions = {
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
    installMode: codePush.InstallMode.ON_NEXT_RESUME,
};

const App = () => {
    const initialWindowMetrics = {
        frame: { x: 0, y: 0, width: 0, height: 0 }, // Khởi tạo kích thước và vị trí ban đầu
        insets: { top: 0, left: 0, right: 0, bottom: 0 }, // Khởi tạo các margins ban đầu
    }

    const getKeyScreen = (navigContainer: any) => {
        try {
            const { routeNames, index, routes } = navigContainer;
            const keyScreenActive = routes[index]['name'];
            console.log('%c Màn hình đang focus:', 'color:yellow', keyScreenActive);
        } catch (error) { }
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider
                initialMetrics={initialWindowMetrics}
                style={{ flex: 1 }}>
                <NavigationContainer
                    onStateChange={(navigContainer: any) => getKeyScreen(navigContainer)}>
                    <RootStackNavigation />
                </NavigationContainer>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}

export default codePush(codePushOptions)(App);

