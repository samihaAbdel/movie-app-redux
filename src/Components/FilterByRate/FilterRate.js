// import React, { useState } from 'react';
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const FilterRate = () => {
//   const handlChange =(value)=> setRating(value);
  return (
    // isMovieRating ?(
    <span style={{marginRight:"50%"}}>
    <Rate tooltips={desc}
    // disabled 
    // value={moviRating}     
    />   
    </span>)
    // :(<span>
    //   <Rate tooltips={desc} onChange={handlChange} value={rating} />
    // </span>)
//   );
};

export default FilterRate;