import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "react-native-elements";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Context as RobotsContext } from "../context/RobotsContext";
import Swipeable from "react-native-swipeable";

const RobotList = ({ navigation }) => {
  const {
    state: { robots },
    removeRobot,
  } = useContext(RobotsContext);

  //Those the buttons of the `swipeAble` element
  const rightButtons = ({ item }) => {
    return [
      <TouchableOpacity
        style={{ backgroundColor: "gray", flex: 1, justifyContent: "center" }}
        onPress={() => {
          navigation.navigate("EditRobot", { item });
        }}
      >
        <MaterialIcons name="edit" size={38} style={{ marginLeft: 20 }} />
      </TouchableOpacity>,

      <TouchableOpacity
        style={{ backgroundColor: "red", flex: 1, justifyContent: "center" }}
        onPress={() => {
          removeRobot(item.id);
        }}
      >
        <MaterialIcons name="delete" size={38} style={{ marginLeft: 25 }} />
      </TouchableOpacity>,
    ];
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={robots}
        keyExtractor={(rob) => rob.id}
        renderItem={({ item }) => {
          return (
            <Swipeable rightButtons={rightButtons({ item })}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Menu", { item });
                }}
                onLongPress={() => {
                  navigation.navigate("EditRobot", { item });
                }}
              >
                <ListItem
                  containerStyle={styles.listItem}
                  chevron
                  title={item.name}
                  bottomDivider={true}
                />
              </TouchableOpacity>
            </Swipeable>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: { height: 100 },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120,
  },
  trash: {
    marginLeft: 15,
  },
});

RobotList.navigationOptions = ({ navigation }) => {
  return {
    //title:'Robots',
    headerRight: () => (
      <TouchableOpacity
        style={{ marginRight: 28 }}
        onPress={() => navigation.navigate("AddRobot")}
      >
        <FontAwesome name="plus" size={25} />
      </TouchableOpacity>
    ),
  };
};

export default RobotList;
