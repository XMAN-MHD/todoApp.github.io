import React from 'react'
import { useSelector } from 'react-redux';
import Todo from './todo/Todo'
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import { selectAllTodos, selectfilteredTodos } from './todosSlice';
import { selectHeaderSearchTerm } from '../header/headerSlice';


function Todos(props) {

  const HeaderSearchTerm = useSelector(selectHeaderSearchTerm);
  const allTodos = useSelector(selectAllTodos)
  const filteredTodos = useSelector(selectfilteredTodos)
  let renderedTodos;
  if(HeaderSearchTerm === '')
  {
    renderedTodos = allTodos;
  }
  else 
  {
    renderedTodos = filteredTodos;
  }

  const handleShow = props.handleShow;
  const updateTodo = props.updateTodo;

  return (
    <Container>
        {/* Todo */}
        <Row sm={2} xs={1} lg={3} >
            
            { 
                renderedTodos.map(
                    (todo) => {
                        return(
                                <Col key={todo.id} className="d-flex justify-content-center">
                                    <Todo 
                                        key={todo.id} 
                                        id={todo.id}
                                        title={todo.title}
                                        date={todo.date}
                                        description={todo.description}
                                        update={todo.update}
                                        updateTodo={updateTodo}
                                    />
                                </Col>
                            )
                    }
                )
                
            }
            
            
        </Row>
    </Container>
   
  )
}

export default Todos
