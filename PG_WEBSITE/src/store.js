import { configureStore } from "@reduxjs/toolkit";
// reducers
import userDataReducer from "./reducer/userdata.slice"
import alertSliceReducer from "./reducer/alertslice"
import newsDataReducer from "./reducer/newsdata.slice"
import updateModelReducer from "./reducer/updateModel.slice";

export const store = configureStore({
    reducer: {
        userData: userDataReducer,
        sliceData : alertSliceReducer,
        newsData : newsDataReducer,
        updateModel : updateModelReducer
    },
})