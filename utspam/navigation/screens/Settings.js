import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';

export default function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar barStyle="light-content" backgroundColor="#1976d2"/>
        </View>
    );
}