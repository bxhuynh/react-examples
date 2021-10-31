let res = [1, 2, 3, 4].reduce((sum, num) => {
  return sum + num;
}, 0);
console.log(res);

//rewrite reduce function

function callback(sum, num) {
  return sum + num;
}

function reduce(arr, callback, initVal) {
  if (initVal === undefined) {
    initVal = arr[0];
    arr = arr.slice(1);
  }
  for (const item of arr) {
    initVal = callback(initVal, item);
  }
  return initVal;
}

console.log(reduce([1, 2, 3, 4], callback, 0));

/*
    initVale is appState
    every elements in array is action is dispatched
    callback is reducer function
*/

// actions dispatch visualization
const actions = [
  { type: "CHANGE_SPEED", payload: 3 }, //speed: 3, lastSpeed: 1
  { type: "TURN_OFF" }, //speed: 0, lastSpeed: 3
  { type: "TURN_ON" }, //speed: 3, lastSpeed: 3
];

const initState = {
  speed: 0,
  lastSpeed: 1,
};

reduce(
  actions,
  //reducer
  (state, action) => {
    if (action.type === "CHANGE_SPEED") {
      console.log({
        ...state,
        speed: action.payload,
      });
      return {
        ...state,
        speed: action.payload,
      };
    }
    if (action.type === "TURN_OFF") {
      console.log({
        lastSpeed: state.speed,
        speed: 0,
      });
      return {
        ...state,
        speed: 0,
        lastSpeed: state.speed,
      };
    }
    if (action.type === "TURN_ON") {
      console.log({
        ...state,
        speed: state.lastSpeed,
      });
      return {
        ...state,
        speed: state.lastSpeed,
      };
    }
    return state;
  },
  initState
);
