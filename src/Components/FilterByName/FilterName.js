import React, { useState } from 'react';
import {Form} from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { filterByName } from '../../JS/actions';

export default function FilterName() {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    const handleTitle = (e) => {
    const inputValue = e.target.value;
        setTitle(inputValue);
        dispatch(filterByName(inputValue));
        console.log(setTitle);
        console.log(inputValue);
      };
 
  return (
    <div>
    <Form.Control className='filterName' type='text' 
    placeholder='Enter movie title...'
      value={title} 
      onChange={handleTitle}
      style={{ width:"30rem", margin:'4%'}}/>  
      
    </div>
  )
}
