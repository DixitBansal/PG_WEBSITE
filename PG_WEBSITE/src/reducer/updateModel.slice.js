import { createSlice } from "@reduxjs/toolkit";

const updatePostState = {
    showModel: false,
    originalData : null
}

const updatePostReducer = createSlice({
    name: "updatePostReducer",
    initialState: updatePostState,
    reducers: {
        toggleUpdateModel: (state, action) => {
            state.showModel = !state.showModel
        },
        setOriginalData : (state, action) => {
            state.originalData = action.payload
        },
        unsetOriginalData : (state, action) => {
            state.originalData = null
        }
    }
})

export const { toggleUpdateModel, setOriginalData } = updatePostReducer.actions

export default updatePostReducer.reducer