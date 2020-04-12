import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';

const MenuScreen = ({ navigation }) => {
  AndroidKeyboardAdjust.setAdjustNothing();
  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: "center" }} h2>
        Maini Menu
      </Text>

      <Spacer>
        <Button
          type="outline"
          title="Semi Autonomous"
          onPress={() => {
            navigation.navigate("Semi");
          }}
        />
      </Spacer>
      <Spacer>
        <Button
          type="outline"
          title="Autonomous"
          onPress={() => {
            navigation.navigate("Auto");
          }}
        />
      </Spacer>
      <Spacer>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Button
            type="outline"
            title="Launch"
            onPress={() => {
              /* Launch The Robot*/
            }}
          />

          <Button
            type="outline"
            title="Stand-By"
            onPress={() => {
              /* Stand-By The Robot*/
            }}
          />
        </View>
      </Spacer>
      <Spacer>
        <Button
          type="outline"
          title="Shut-Down"
          onPress={() => {
            /* ShutDown The Robot*/
          }}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default MenuScreen;
