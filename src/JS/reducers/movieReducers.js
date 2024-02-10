import {moviesData}  from "../../Components/Constant/MoviesData";
import { ADD_MOVIE, FILTER_BY_NAME } from "../dataType";


const initialState = {
    moviesData: moviesData,       
}

const movieReducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case ADD_MOVIE:
            return{
            ...state,
            moviesData: [...state.moviesData, payload]

            };
        case FILTER_BY_NAME:
            return {
             ...state,
            moviesData: [
                ...state.moviesData
                .filter((movie) =>
                movie.title.toUpperCase().includes(payload.toUpperCase()))
                ],
                };
     default:
         return state;
           
            
    }
} 
    

export default movieReducer;