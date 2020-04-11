import createDataContext from "./createDataContext";
import { navigate } from "../navigationRef";

const RobotsReducer = (state, action) => {
  switch (action.type) {
    case "add_robot":
      return { ...state, robots: [...state.robots, action.payload] };
    case "remove_robot":
      return {
        robots: state.robots.filter((robot) => robot.id !== action.payload),
      };
    default:
      return state;
  }
};

const removeRobot = (dispatch) => /*async*/ (id) => {
  dispatch({ type: "remove_robot", payload: id });
};

const addRobot = (dispatch) => /*async*/ (name, id, host, ip) => {
  dispatch({ type: "add_robot", payload: { name, id, host, ip } });
  navigate("RobotList");
};

const editRobot = (dispatch) => /*async*/ (name, id, host, ip) => {
  dispatch({ type: "remove_robot", payload: id });
  dispatch({ type: "add_robot", payload: { name, id, host, ip } });
  navigate("RobotList");
};

export const { Provider, Context } = createDataContext(
  RobotsReducer,
  { addRobot, removeRobot, editRobot },
  { robots: [] }
);
