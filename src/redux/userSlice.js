import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        "https://2456-211-72-239-241.ngrok.io/api/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      let data = await response.json();
      console.log("response", data);
      if (response.status === 200) {
        localStorage.setItem("token", data.message.token);
        console.log(data.message.token);
        return data;
      } else {
        throw data.message;
      }
    } catch (e) {
      console.log(thunkAPI.rejectWithValue(e));
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    password: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.email;
      state.password = payload.password;
      return state;
    },
    [login.pending]: (state) => {
      state.isFetching = true;
      console.log("loading");
      return state;
    },
    [login.rejected]: (state, { payload }) => {
      console.log("payload1", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
      return state;
    },
  },
});

export const { clearState } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
