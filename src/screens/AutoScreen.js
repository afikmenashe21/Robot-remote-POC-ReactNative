import React, { useState } from "react";
import {
  Text,
  Dimensions,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

const AutoScreen = () => {
  const [status, setStatus] = useState("Start");

  const getProgressText = (status) => {
    switch (status) {
      case "Start":
        return "Stop";
      case "Stop":
        return "Resume";
      case "Resume":
        return "Stop";
      default:
        // handle empty/null/undefined/different value then what you expect
        break;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.myButton}
        underlayColor="#ccc"
        onPress={() => {
          setStatus(getProgressText);
        }}
      >
        <Text style={styles.text}>{status}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  myButton: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").width * 0.5,
    backgroundColor: "#f00",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default AutoScreen;
