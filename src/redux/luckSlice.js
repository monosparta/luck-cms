import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const LuckStatus = createAsyncThunk(
    "Luck/status",
    async (thunkAPI) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(
                "https://2456-211-72-239-241.ngrok.io/api/locker",
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "token": "pkmxafD0P0mSIbLQcJg75AZL8idnysZBe1tl1BdIHxvIlDiqJF2mPq4o0iQW",
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
    }
);

export const luckSlice = createSlice({
    name: "Luck",
    initialState: {
        lockNo: [],
        lockUp: [],
        userId: [],
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
        [LuckStatus.fulfilled]: (state, { payload }) => {
            console.log("Good", payload);
            state.isFetching = false;
            state.isSuccess = true;
            state.lockNo = payload.lockNo;
            state.lockUp = payload.lockUp;
            state.userId = payload.userIrd;
            return state;
        },
        [LuckStatus.pending]: (state) => {
            state.isFetching = true;
            console.log("loading");
            return state;
        },
        [LuckStatus.rejected]: (state, { payload }) => {
            console.log("Bad", payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
            return state;
        },
    },
});


export const { clearState } = luckSlice.actions;

export const selectLuck = (state) => state.Luck;

export default luckSlice.reducer;