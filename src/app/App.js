import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Form, Modal, Image } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { selectModalState, saveModalTodo, handleCloseModal, handleShowModal } from "../features/modal/modalSlice";
import Header from '../features/header/Header';
import MyModal from '../features/modal/Modal';
import Todos from '../features/todos/Todos';
import './todos.css';
import myLogo from '../features/images/my_logo.png';

function App() {
  const modalState = useSelector(selectModalState);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(handleCloseModal());
  const handleShow = () => dispatch(handleShowModal());

  const updateTodo = (todoId, todoTitle, todoDate, todoDescription) => {
    dispatch(saveModalTodo(
      {
        id:todoId,
        title: todoTitle, 
        date: todoDate, 
        description: todoDescription,
      }
    ));
    handleShow();
  };

  return (
    <Container fluid className='d-grid gap-5 bg-light' >
      {/* App Title */}
      <Row xs={1}>
        <div style={{textAlign: 'center',marginTop:'20px'}}>
          <Image src={myLogo} roundedCircle />
        </div>
        <h1 id='app-title'>LISTE DE CHOSES À FAIRE</h1>
      </Row>
      {/* Header */}
      <Row>
          <Header  handleShow={handleShow}/>
      </Row>
      {/* Modal */}
      <Row>
        <MyModal handleClose={handleClose} modalState = {modalState}/>
      </Row>
      {/* Todos */}
      <Row>
        <Todos handleShow={handleShow} updateTodo={updateTodo} />
      </Row>
    </Container>
  );
}

export default App;
