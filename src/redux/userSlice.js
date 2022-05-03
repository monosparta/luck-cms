import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        "https://dd82-211-72-239-241.ngrok.io/api/login",
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
      console.log("Login Response", data);
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

export const userInfo = createAsyncThunk(
  "user/info",
  async (lockerNo, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://dd82-211-72-239-241.ngrok.io/api/record/${lockerNo}`,
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
      console.log("Info Response", data);
      if (response.status === 200) {
        console.log(data);
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

export const userUnlock = createAsyncThunk(
  "user/unlock",
  async (inputData, thunkAPI) => {
    try {

      const token = localStorage.getItem("token");

      const response = await fetch(
        "https://dd82-211-72-239-241.ngrok.io/api/unlock",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token,
          },
          body: JSON.stringify({
            cardId: inputData[0].cardId,
            description: inputData[0].description,
          }),
        }
      );
      let data = response.json();
      if (response.status === 200) {
        return data;
      } else {
        throw data;
      }
    } catch (e) {
      console.log(thunkAPI.rejectWithValue(e));
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const userUpdate = createAsyncThunk(
  "user/update",
  async ({ id, name, email, phone, cardId }, thunkAPI) => {
    try {
      console.log(id, name, email, phone, cardId);
      const token = localStorage.getItem("token");

      const response = await fetch(
        `https://dd82-211-72-239-241.ngrok.io/api/user/16`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token,
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            cardId,
          }),
        }
      );
      let data = response.json();
      console.log("Success");
      if (response.status === 200) {
        return data;
      } else {
        throw data;
      }
    } catch (e) {
      console.log(thunkAPI.rejectWithValue(e));
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const userAdd = createAsyncThunk(
  "user/Add",
  async (lockerNo, name, email, phone, cardId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://dd82-211-72-239-241.ngrok.io/api/addUser",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token,
            body: JSON.stringify({
              lockerNo,
              name,
              email,
              phone,
              cardId,
            }),
          },
        }
      );
      let data = await response.json();
      console.log("Add Response", data);
      if (response.status === 200) {
        console.log(data);
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
    user: [],
    records: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
    updating: false,
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
    [userInfo.fulfilled]: (state, { payload }) => {
      console.log("userInfo payload", payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.user = payload.user;
      state.records = payload.records;
      return state;
    },
    [userInfo.pending]: (state) => {
      state.isFetching = true;
      console.log("userInfo loading");
      return state;
    },
    [userInfo.rejected]: (state, { payload }) => {
      console.log("userInfo payload1", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
      state.user = [];
      state.records = [];
      return state;
    },
    [userUnlock.fulfilled]: (state) => {
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [userUnlock.pending]: (state) => {
      state.isFetching = true;
      console.log("userUnlock loading");
      return state;
    },
    [userUnlock.rejected]: (state) => {
      state.isFetching = false;
      state.isError = true;
      return state;
    },
    [userUpdate.fulfilled]: (state) => {
      state.updating = false;
      state.isSuccess = true;
      return state;
    },
    [userUpdate.pending]: (state) => {
      state.updating = true;
      return state;
    },
    [userUpdate.rejected]: (state) => {
      state.updating = false;
      state.isError = true;
      return state;
    },
  },
});



export const { clearState } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
