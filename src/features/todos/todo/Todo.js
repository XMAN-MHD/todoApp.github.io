import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectModalTodoImage } from '../../modal/modalSlice';
import { Container, Row, Col, Button, Form, Modal, Card } from 'react-bootstrap';



import { removeTodo } from '../todosSlice';

function Todo({id, title, date, description, update, updateTodo }) {

  const todoImage = useSelector(selectModalTodoImage);

  const dispatch = useDispatch();
  const OnDeleteTodo = () => {
    dispatch(removeTodo(id));
  };

  const onUpdateTodo = () => {
    updateTodo(id, title, date, description);
  };
  return (
    <div>
        <Card style={{ width: '18rem', marginBottom:'50px'}} >
            <Card.Img variant="top" src={todoImage} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text style={{ height:'80px'}}>
                {description}
                <small className="text-muted" style={{ display:'block',textAlign:'right'}}>{date}</small>
                </Card.Text>
                <Button variant="dark" size='sm' onClick={OnDeleteTodo}>Supprimer</Button>
                <Button variant="dark" size='sm' className="m-2" onClick={onUpdateTodo}>Modifier</Button>
            </Card.Body>
        </Card>
  </div>  
  )
}

export default Todo
