import React, { useContext, useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Context as RobotsContext } from "../context/RobotsContext";
import { Input } from "react-native-elements";

const EditRobotScreen = ({ navigation }) => {
  const robot = navigation.getParam("item");
  const { editRobot } = useContext(RobotsContext);

  const [name, setName] = useState(robot.name);
  const [host, setHost] = useState(robot.host);
  const [ip, setIp] = useState(robot.ip);

  return (
    <View style={styles.container}>
      <Input placeholder="Enter new name" value={name} onChangeText={setName} />
      <Input placeholder="Enter new host" value={host} onChangeText={setHost} />
      <Input placeholder="Enter new ip" value={ip} onChangeText={setIp} />
      <Button
        title="Apply changes"
        onPress={() => editRobot(name, robot.id, host, ip)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default EditRobotScreen;
