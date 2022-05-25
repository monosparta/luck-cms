import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const LuckStatus = createAsyncThunk(
  "Luck/LuckStatus",
  async (thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://${process.env.REACT_APP_URL}:8000/api/locker`,
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
      if (response.status === 200) {
        return data;
      } else {
        throw data.message;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const luckSlice = createSlice({
  name: "Luck",
  initialState: {
    Lock: [{}],
    currentNumber: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    clearState: (state) => {
      state.Lock = [{}];
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
    // saveLock: (state, { payload }) => {

    // }
  },
  extraReducers: {
    [LuckStatus.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.Lock = payload;
      return state;
    },
    [LuckStatus.pending]: (state) => {
      state.isFetching = true;
      return state;
    },
    [LuckStatus.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      // if (state.token !== "") {
      //   localStorage.clear();
      //   alert("請重新登入");
      //   window.location.reload();
      // }
    },
  },
});

export const { clearState } = luckSlice.actions;

export const selectLuck = (state) => state.Luck;

export default luckSlice.reducer;
