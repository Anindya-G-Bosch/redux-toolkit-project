const { default: axios } = require("axios");

const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

//The createAsyncThunk function takes two arguments. the first argument is the action type string and the second argument is a
//callback function that should contain the async logic and return a promise. The action type string that we pass here will be
//used as a prefix for the promise lifecycle actions which are pending, fulfilled and rejected action types, which will be
//generated and dispatched by the createAsyncThunk function and we can listen to these actions by using extra reducers of the
//createSlice method. Here we don't have a catch block because we are not handling the error, createAsyncThunk will automatically
//handle the error for us.
//NOTE: The createAyncThunk method, under the hood, makes use of the redux-thunk library. So we don't have to install the
//redux-thunk library explicitly. It is already included in the redux toolkit package. So, under the hood thunk gets applied as
//a default middleware to our store.
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user) => user.id));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      (state.loading = false),
        (state.users = action.payload),
        (state.error = "");
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

module.exports = userSlice.reducer;

module.exports.fetchUsers = fetchUsers;
