import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from '../../JS/actions';

export default function AddMovie() { 
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const movie = useSelector((state) => state.movieReducer.moviesData)
const dispatch =useDispatch()
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [rate, setRate] = useState('')
const [posterUrl, setPosterUrl] = useState('')
const handleAdd =(e)=>{
    e.preventDefault();  
    dispatch(addMovie({title, description, rate, posterUrl}));  
    handleClose();   
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
           Add Movie </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>        
        <Form.Control type="text" placeholder="Title" 
         onChange={(e)=> setTitle(e.target.value)}/>
        <Form.Control type="text" placeholder="Description"
         onChange={(e)=> setDescription(e.target.value)}/>
        <Form.Control type="number" placeholder="Rate" 
        onChange={(e)=> setRate(e.target.value)}/>
        <Form.Control type="text" placeholder="votre url"
        onChange={(e)=> setPosterUrl(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>               
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


   
