import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import { Input, Button } from "react-native-elements";
import AxisPad from "react-native-axis-pad";
import { AntDesign } from "@expo/vector-icons";
import RadioButtons from "../components/RadioButtons";
import { Context as SemiContext } from "../context/SemiContext";

const SemiScreen = () => {
  const { setBrushSpeed, setVelSpeed } = useContext(SemiContext);
  const [vacuum, setVacuum] = useState(0);
  const [myX, setX] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      {/*This View contains the radioView and optionsView*/}
      <View style={styles.buttonsView}>
        {/*This View contains the radio elements */}
        <View style={styles.radioContainer}>
          <RadioButtons type="Velocity" callback={setVelSpeed} />
          <RadioButtons type="Brush" callback={setBrushSpeed} />
        </View>

        {/*This View contains the dislike and vacuum input*/}
        <View style={styles.optionsContainer}>
          {/*This View contains the input and apply button */}
          <View style={{ flexDirection: "column", marginHorizontal: 20 }}>
            <Input
              textContentType="telephoneNumber"
              containerStyle={styles.input}
              value={vacuum}
              placeholder="Vacuum"
              keyboardType="number-pad"
              returnKeyType="done"
              onChangeText={setVacuum}
            />
            <Button
              title="Apply"
              type="clear"
              onPress={() => {
                /*send topic with vacuum */
              }}
            />
          </View>

          <TouchableOpacity
            style={styles.dislike}
            onPress={() => {
              /*send topic*/
            }}
          >
            <AntDesign name="dislike2" size={50} />
          </TouchableOpacity>
        </View>
      </View>

      {/*This View contains the joystick*/}
      <View style={styles.joystickView}>
        <AxisPad
          resetOnRelease={true}
          autoCenter={true}
          size={250}
          onValue={({ x, y }) => {
            // values are between -1 and 1
            //console.warn(x,y)
            
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  joystickView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 100,
  },
  buttonsView: {
    flex: 1,
    flexDirection: "column",
    // borderWidth: 10,
    // borderColor: 'red',
    marginBottom: 50,
  },
  optionsContainer: {
    flexDirection: "row",
    // borderWidth: 10,
    // borderColor: 'green',
    flex: 1,
    justifyContent: "space-between",
  },
  radioContainer: {
    flexDirection: "row",
    // borderWidth: 10,
    // borderColor: 'blue',
    flex: 2,
    justifyContent: "space-between",
  },
  input: {
    width: 100,
  },
  dislike: {
    alignSelf: "flex-end",
    marginRight: 50,
  },
});

export default SemiScreen;
