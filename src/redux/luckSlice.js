import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const LuckStatus = createAsyncThunk("Luck/status", async (thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      "https://2456-211-72-239-241.ngrok.io/api/locker",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token,
        },
      }
    );
    let data = await response.json();
    console.log("response", data);
    if (response.status === 200) {
      return data;
    } else {
      throw data.message;
    }
  } catch (e) {
    console.log(thunkAPI.rejectWithValue(e));
    return thunkAPI.rejectWithValue(e);
  }
});

export const luckSlice = createSlice({
  name: "Luck",
  initialState: {
    userId: "",
    lockup: "",
    lockNo: "",
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
    [LuckStatus.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.userId = payload.userId;
      state.lockNo = payload.lockNo;
      return state;
    },
  },
});

export const { clearState } = luckSlice.actions;

export const selectLuck = (state) => state.Luck;

export default luckSlice.reducer;
