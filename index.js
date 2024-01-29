const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/icecream/iceCreamSlice").icecreamActions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("Initial state: ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state: ", store.getState())
);
// const unsubscribe = store.subscribe(() => {});

// store.dispatch(cakeActions.buyCake());
// store.dispatch(cakeActions.buyCake());
// store.dispatch(cakeActions.buyCake());
// store.dispatch(cakeActions.restockCake(3));
// store.dispatch(icecreamActions.buyIceCream());
// store.dispatch(icecreamActions.buyIceCream());
// store.dispatch(icecreamActions.restockIceCream(2));

// unsubscribe();

store.dispatch(fetchUsers());
