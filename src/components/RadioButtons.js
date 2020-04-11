import React, { useState } from "react";
import RadioForm from "react-native-simple-radio-button";
import { View, Text, StyleSheet } from "react-native";

const RadioButtons = ({ type, callback }) => {
  const [val, setValue] = useState(0);

  if (type === "Velocity") {
    var radio_props = [
      { label: "Low", value: 1 },
      { label: "Med", value: 2 },
      { label: "High", value: 3 },
    ];
  } else if (type === "Brush") {
    var radio_props = [
      { label: "Off", value: 0 },
      { label: "Med", value: 1 },
      { label: "High", value: 2 },
    ];
  }

  return (
    <View>
      <Text style={styles.title}>{type} Speed</Text>
      <RadioForm
        style={styles.radioButton}
        radio_props={radio_props}
        //initial={0}
        onPress={(value) => {
          setValue(value);
          callback(value);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    alignSelf: "flex-start",
    marginHorizontal: 15,
  },
  title: {
    alignSelf: "flex-start",
    margin: 15,
    fontWeight: "bold",
  },
});

export default RadioButtons;
