import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "axios";
const initialState = {
  loading: false,
  users: [],
  error: "",
};

//----invoking async function using async thunk
//--it will automatically dispatch lifecycle actions for the return promise
//Generates pending ,fullfilled and rejected acction types we can listen to thess action types with a reducer and perform the necessary state transitions ,the reducers though are not generated by the slice and are needed to be add as extra reducers
// 2 arguments-action type and  a callback function that creates the payload
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
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
    builder.addCase(fetchUsers.rejected, (state) => {
      (state.loading = false),
        (state.users = []),
        (state.error = action.error.message);
    });
  },
});
//createAsyncThunk under the hood uses redux thunk which is present as the middleware in the redux toolkit.
export default userSlice.reducer;
