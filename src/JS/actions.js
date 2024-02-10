import { ADD_MOVIE } from "./dataType";
import {FILTER_BY_NAME} from "./dataType";

export const addMovie = ({id, title, description, rate,  posterUrl}) =>{
    return{
    type: ADD_MOVIE,
    payload: {id, title, description, rate,  posterUrl},
    }
}

export const filterByName = (title) => {
    return {
      type: FILTER_BY_NAME,
      payload: title,
    };
  };
  