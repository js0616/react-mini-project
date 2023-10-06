import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './reducers/MovieSlicer'

export default configureStore({
    reducer: {
        movie : movieReducer
    },

})