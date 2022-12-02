import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import { saveModalTodo, selectModalTodo, updateTodoTitle, updateTodoDate, pickTodoImage, updateTodoDescription } from './modalSlice';
import { saveTodo } from '../todos/todosSlice';
import img0 from '../images/img0.jpg';
import img1 from '../images/img1.png';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';


function MyModal({ handleClose, modalState }) {
  const modalTodo = useSelector(selectModalTodo);
  const dispatch = useDispatch();

  const todoImages = [{id:0, image:img0}, {id:1, image:img1}, {id:2, image:img2}, 
    {id:3, image:img3}, 
    {id:4, image:img4}, 
    {id:5, image:img5}, 
    {id:6, image:img6}, 
    {id:7, image:img7}, 
    {id:8, image:img8}, 
    {id:9, image:img9}, 
    {id:10, image:img10}
  ]
            
  const modalTodoId = modalTodo.id;
  const modalTodoTitle = modalTodo.title;
  const modalTodoDate = modalTodo.date; 
  const modalTodoDescription = modalTodo.description; 


  const createId = () => {
    if(modalTodoId !== '')
    {
        return modalTodoId
        
    }
    else
    {
        return Math.round(Math.random() * 100000000)
    }
  }; 

  const onTitleChange = (e) => {
    const value = e.target.value;
    dispatch(
        updateTodoTitle(value)
    );
  }; 
  const onDateChange = (e) => {
    const value = e.target.value;
    dispatch(
        updateTodoDate(value)
    );

  };
  const onDescriptionChange = (e) => {
    const value = e.target.value;
    dispatch(
        updateTodoDescription(value)
    );
  };
  const onSaveTodo = (e) => {
    dispatch(saveTodo(
        {
            id: createId(),
            title: modalTodoTitle, 
            date: modalTodoDate,
            description: modalTodoDescription,
        } 
    ));
    dispatch(saveModalTodo(
        {   id:'',
            title: '',
            date: '',
            description:'',
        } 
    ));
    dispatch(pickTodoImage(todoImages));
    handleClose();
  };

  return (
        <Modal centered show={modalState} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>LA TACHE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <div className='d-grid gap-2'>
                <Form.Label>titre :</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="titre"
                    value={modalTodoTitle}
                    onChange={onTitleChange}
                />
                <Form.Label>date :</Form.Label>
                <Form.Control
                    type="date"
                    value={modalTodoDate}
                    onChange={onDateChange}
                />
                <Form.Label>description :</Form.Label>
                <Form.Control
                    maxLength={100}
                    as="textarea"
                    rows={3}
                    placeholder="description"
                    value={modalTodoDescription}
                    onChange={onDescriptionChange}
                />
            </div>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="dark" onClick={onSaveTodo} >
                Sauvegarder
            </Button>
            <Button variant="dark" onClick={handleClose}>
                Fermer
            </Button>
        </Modal.Footer>
        </Modal>
  )
}

export default MyModal
