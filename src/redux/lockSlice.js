import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const lockStatus = createAsyncThunk(
  "lock/lockStatus",
  async (thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${process.env.REACT_APP_URL}/api/locker`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token,
        },
      }).then((response) => {
        if (response.status === 200) {
          return response;
        }
        if (response.status === 401) {
          if (token !== "") {
            localStorage.clear();
            alert("請重新登入");
            window.location.reload();
          }
        }
      });
      let data = await response.json();
      if (response.ok) {
        return data;
      } else {
        throw data;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const lockSlice = createSlice({
  name: "lock",
  initialState: {
    lockList: [{}],
    currentNumber: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    clearState: (state) => {
      state.lockList = [{}];
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [lockStatus.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.lockList = payload;
      return state;
    },
    [lockStatus.pending]: (state) => {
      state.isFetching = true;
      return state;
    },
    [lockStatus.rejected]: (state) => {
      state.isFetching = false;
      state.isError = true;
      return state;
    },
  },
});

export const { clearState } = lockSlice.actions;

export const selectLock = (state) => state.lock;

export default lockSlice.reducer;
