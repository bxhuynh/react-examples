const { createStore } = require("redux");

const initState = {
  speed: 0,
  lastSpeed: 1,
};

const TURN_ON = "TURN_ON";
const CHANGE_SPEED = "CHANGE_SPEED";

//action creator
const turnOff = () => ({
  type: "TURN_OFF", //hard-coded too, should be defined as constant
});
const turnOn = () => ({
  type: TURN_ON,
});

const changeSpeed = (speed) => ({
  type: CHANGE_SPEED,
  payload: speed,
});

const reducer = (state = initState, action) => {
  console.log(action);
  if (action.type === "CHANGE_SPEED") {
    return {
      ...state,
      speed: action.payload,
    };
  }
  if (action.type === "TURN_OFF") {
    return {
      ...state,
      speed: 0,
      lastSpeed: state.speed,
    };
  }
  if (action.type === "TURN_ON") {
    return {
      ...state,
      speed: state.lastSpeed,
    };
  }
  return state;
};

const store = createStore(reducer);

//first create
console.log(store.getState());

//hard-coded action
store.dispatch({ type: "CHANGE_SPEED", payload: 3 });
console.log(store.getState());

store.dispatch(changeSpeed(2));
console.log(store.getState());

store.dispatch(turnOff());
console.log(store.getState());

store.dispatch(turnOn());
console.log(store.getState());
