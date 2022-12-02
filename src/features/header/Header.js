import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import { updateHeaderSearchTerm, selectHeaderSearchTerm } from './headerSlice';
import { filterTodos } from '../todos/todosSlice';

function Header({handleShow}) {

  const headerSearchTerm = useSelector(selectHeaderSearchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => {
    const value = e.target.value.toLowerCase();
    dispatch(updateHeaderSearchTerm(value));
  };
  useEffect(() => {
    dispatch(filterTodos(headerSearchTerm));

  }, [headerSearchTerm]);
  
  return (
        <div className='d-flex justify-content-evenly flex-wrap'>
        <Col md={4} xs={12}>
          <div className='d-grid add-button'>
          <Button variant="dark" onClick={handleShow} size='lg'>
            Ajouter Tache
          </Button>
          </div>
        </Col>
        <Col  md={4} xs={12}>
          <div className='d-grid filter-todo'>
          <Form>
            <Form.Control 
              type="text"
              value={headerSearchTerm} 
              placeholder="search" 
              size='lg'
              onChange={onSearchTermChange}
            />
          </Form>
          </div>
        </Col>
        </div>
  )
}

export default Header
