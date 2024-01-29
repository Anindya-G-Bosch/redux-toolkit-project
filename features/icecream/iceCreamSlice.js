const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState, //This is a ES6 shorthand syntax for initialState: initialState, as here key and value are same.
  reducers: {
    buyIceCream: (state) => {
      state.numOfIceCreams--;
    },
    restockIceCream: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  //Use Case: This extra reducer fulfill the below use case => "If a cake is ordered then the customer will get a icrecream free
  //with it."
  //The below way of writing the extreReducers has been depricated.
  //   extraReducers: {
  //     ["cake/buyCake"]: (state) => {
  //       state.numOfIceCreams--;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.buyCake, (state) => {
      state.numOfIceCreams--;
    });
  },
});

module.exports = iceCreamSlice.reducer; //Default export of reducer

module.exports.icecreamActions = iceCreamSlice.actions; //Named export of actions
