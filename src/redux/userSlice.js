import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        "https://e31f-211-72-239-241.ngrok.io/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            token: "FejaqI31k",
          }),
        }
      );
      let data = await response.json();
      console.log("response", data);
      if (response.status === 201) {
        localStorage.setItem("token", data.token);
        return data;
      }
    } catch (e) {
      console.log("Error", e.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user", // Slice 名稱
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
    },
    [login.rejected]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isError = true;
      // state.errorMessage = payload.message;
    },
  },
});

export const { clearState } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
