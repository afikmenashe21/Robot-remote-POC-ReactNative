import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

/*---------------------------TODO:connect to DB and fetch user data---------------- */
const AuthScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


  return (
    <>
      <Spacer>
        <Text style={{fontWeight:'bold', fontSize:26}}>Sign In please</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={(newText) => setEmail(newText)} // equals to : onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
      />
      <Spacer />
      <Input
        label="Passord"
        value={password}
        onChangeText={setPassword} // equals to : onChangeText={(password) => setPassword(password)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {/* {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null} */}
      <Spacer>
        <Button
          title="Sign-In"
          onPress={() => navigation.navigate("RobotList")}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    marginLeft: 15,
    marginTop: 15,
    color: "red",
    fontSize: 16,
  },
});

export default AuthScreen;
