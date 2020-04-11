import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import RNGamePad from 'react-native-game-pad';
import { WebView } from 'react-native-webview'
import AxisPad from 'react-native-axis-pad';
import { render } from 'react-dom';

/*--------------------------------------Not Relevant------------------------------ */
const testScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            {/* <Text style={{ fontSize: 30, padding: 50 }}>first Screen</Text> */}
            {/* <Button title="to first screen" onPress={() => { navigation.navigate('Second') }} /> */}
            <WebView />
            <RNGamePad
                onButtonAPress={() => { console.warn('A Pessed') }}
                onButtonBPress={() => { console.warn('B Pessed') }}
                options={{
                    size = 300,
                    color = "blue"
                }}
            />
            {/* <AxisPad
                resetOnRelease={true}
                autoCenter={true}
                size={150}
                onValue={({ x, y }) => {
                    // values are between -1 and 1

                }} /> */}


        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
})

export default testScreen;