import { createSlice } from "@reduxjs/toolkit";

const newsdata = {
    length: 0,
    news: [],
    hasMore: true,
    pageNumber: 1
}

const newsdataslice = createSlice({
    name: "newsslice",
    initialState: newsdata,
    reducers: {
        appendNewsFromFront: (state, action) => {
            state.news = action.payload.concat(state.news)
            state.length += action.payload.length
        },
        appendNews: (state, action) => {
            state.news = state.news.concat(action.payload)
            state.length += action.payload.length
        },
        stopFetching: (state, action) => {
            state.hasMore = false
        },
        incPageNumber: (state, action) => {
            state.pageNumber += 1
        },
        deleteNews: (state, action) => {
            let updatednewslist = [];
            for (let i = 0; i < state.news.length; i++) {
                if (action.payload !== state.news[i]._id) {
                    updatednewslist.push(state.news[i])
                }
            }
            state.news = updatednewslist
            state.length -= 1
        },
        updateNews: (state, action) => {
            for (let i = 0; i < state.news.length; i++) {
                if (action.payload.post_id === state.news[i]._id) {
                    // console.log(action.payload.data)
                    state.news[i] = { ...state.news[i], ...action.payload.data }
                }
            }
        }
    }
})

export const { appendNewsFromFront, appendNews, deleteNews, stopFetching, incPageNumber, updateNews } = newsdataslice.actions

export default newsdataslice.reducer