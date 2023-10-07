import { createSlice } from "@reduxjs/toolkit";

const alertState = {
    variant: "",
    message: ""
}

const alertReducerSlice = createSlice({
    initialState: alertState, name: "alertSlice", reducers: {
        setAlert: (state, action) => {
            state.variant = action.payload.variant
            state.message = action.payload.message
        },
        unsetAlert: (state, action) => {
            state.variant = ""
            state.message = ""
        }
    }
})

export const { setAlert, unsetAlert } = alertReducerSlice.actions
export default alertReducerSlice.reducer