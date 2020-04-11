import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Context as RobotsContext } from "../context/RobotsContext";
import { Input } from "react-native-elements";

const AddRobotScreen = () => {
  const { addRobot } = useContext(RobotsContext);
  const [name, setName] = useState("");
  const [host, setHost] = useState("");
  const [ip, setIp] = useState("");
  
  const id = Math.floor(Math.random() * 99999) + 1;

  return (
    <View style={styles.container}>
      <Input placeholder="Enter Name" value={name} onChangeText={setName} />
      <Input placeholder="Enter Host" value={host} onChangeText={setHost} />
      <Input placeholder="Enter Ip" value={ip} onChangeText={setIp} />
      <Button
        title="Apply"
        onPress={() => {
          addRobot(name, id, host, ip);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container :{
    flex:1,
    justifyContent:'center',
    marginBottom:250
  }
})

export default AddRobotScreen;
