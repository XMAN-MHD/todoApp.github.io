import { createSlice} from "@reduxjs/toolkit";

const todosSlice = createSlice(
    {
        name: 'todos', 
        initialState: {
            filteredTodos: [], 
            allTodos: []
        }, 
        reducers: {
            saveTodo: (state, action) => {
                const todoToUpdate = state.allTodos.find(
                    todo => {
                        return todo.id === action.payload.id 
                    }
                );
                if(todoToUpdate)
                {
                    const todoToUpdateKey = state.allTodos.findIndex(
                        (todo => {
                                return todo.id === action.payload.id
                            }
                        )
                    )
                    state.allTodos.splice(todoToUpdateKey, 1, action.payload);
                    return state;
                }
                else 
                {
                    const isTodoFound =  state.allTodos.find(
                        (todo) => {
                            return todo.title === action.payload.title
                        } 
                    )
                    if(isTodoFound)
                    {
                        return state
                    }
                    else
                    {
                        state.allTodos.push(action.payload);
                        return state;
                    }
                }
                
            },
            removeTodo: (state, action) => {
                let newTodos = state.allTodos.filter(
                    (todo) => {
                        return todo.id !== action.payload
                    }
                );
                state.allTodos = newTodos;
                return state;
            },
            filterTodos: (state, action) => {
                const filteredTodos =   state.allTodos.filter(
                    (todo) => {
                        return todo.title.toLowerCase().includes(action.payload);
                    }
                );
                
                if(filteredTodos.length === 0)
                {
                    state.filteredTodos = [];
                    return state;
                }
                else
                {
                    state.filteredTodos = filteredTodos;
                    return state;
                }
            }   
        }
    }

);

export default todosSlice.reducer;

export const selectAllTodos = (state) => state.todos.allTodos;
export const selectfilteredTodos = (state) => state.todos.filteredTodos;

export const {saveTodo, removeTodo, filterTodos} = todosSlice.actions;
