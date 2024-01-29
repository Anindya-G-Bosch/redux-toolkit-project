const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 10,
};

//The createSlice method effectively takes care of creating the action types as well as action creators for us. It also takes
//care of the immutable update logic behind the scenes. So we don't have to write any switch statements or immutable update
//logic. We just have to define a reducer function for each action type that we want to handle. And then we can export the
//action creators and the reducer function from this file and use them in our components.

//This is how we resolve the concerns that we had with the redux code. We have reduced the boilerplate code and here we don't
//have to import additional libraries explicitly.
const cakeSlice = createSlice({
  name: "cake",
  initialState, //This is a ES6 shorthand syntax for initialState: initialState, as here key and value are same.
  reducers: {
    buyCake: (state) => {
      state.numOfCakes--;
    },
    restockCake: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer; //Default export of reducer

module.exports.cakeActions = cakeSlice.actions; //Named export of actions
