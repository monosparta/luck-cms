import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userInfo = createAsyncThunk(
  "info_user",
  async ({ lockerNo }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://dd82-211-72-239-241.ngrok.io/api/record",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token,
          },
          body: JSON.stringify({
            lockerNo,
          }),
        }
      );
      let data = await response.json();
      console.log("response", data);
      if (response.status === 200) {
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

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    user: "",
    records: "",
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
    [userInfo.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.user = payload.user;
      state.records = payload.records;
      return state;
    },
    [userInfo.pending]: (state) => {
      state.isFetching = true;
      console.log("loading");
      return state;
    },
    [userInfo.rejected]: (state, { payload }) => {
      console.log("payload1", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
      return state;
    },
  },
});

export const { clearState } = userInfoSlice.actions;

export const selectuserInfo = (state) => state.userInfo;

export default userInfoSlice.reducer;
