const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/icecream/iceCreamSlice");
const userReducer = require("../features/user/userSlice");
// const reduxLogger = require("redux-logger");

// const logger = reduxLogger.createLogger();

//Note that configure store takes a single argument which is an object that contains all the reducers in our application. So
//here we don't have to use combineReducers method explicitly. We can just pass an object that contains all the reducers. The
//configureStore method will automatically combine all the reducers into a single reducer function. And it will also add the
//redux dev tools extension to our store.
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  //In Redux toolkit, we can add middleware to our store by passing it as a second argument to the configureStore method. The
  //'middleware' property takes a function as its value. This function will receive a function as a argument which is
  //getDefaultMiddleware. This getDefaultMiddleware function will return an array of all the default middleware. Here with the
  //help of the concat method, we are adding our logger middleware to the array of default middleware.
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
