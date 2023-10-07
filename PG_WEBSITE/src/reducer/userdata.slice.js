import { createSlice } from "@reduxjs/toolkit";

const userDataInitialState = {}

export const userDataReducerSlice = createSlice({
    name: 'userDataSlice',
    initialState: userDataInitialState,
    reducers: {
        setUserData: (state, action) => {
            state = action.payload
            return state
        },
        unSetUserData: (state, action) => {
            state = {}
            return state
        }
    }
})

export const { setUserData, unSetUserData } = userDataReducerSlice.actions

export default userDataReducerSlice.reducer