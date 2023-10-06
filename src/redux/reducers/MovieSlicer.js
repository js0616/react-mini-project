import {createSlice} from "@reduxjs/toolkit"



export const movieSlice = createSlice({
    name :'movie',

    // 초기값
    initialState:{
        popularMovies : [],
        topRatedMovies : [],
        upcomingMovies : [],
        genresMovies : [],

    },
    
    // 함수
    reducers: {
        initData : (state, action) =>{
            console.log('initData',action)

            let {payload} = action // 구조분해를 통해 payload 속성값만 접근
            state.popularMovies = payload.popular.results
            state.topRatedMovies = payload.topRated.results
            state.upcomingMovies = payload.upcoming.results
            state.genresMovies = payload.genres.genres
        }
    }
})

export const MovieReducerActions = movieSlice.actions

export default movieSlice.reducer