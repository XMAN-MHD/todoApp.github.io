import { createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice(
    {
        name: 'modal', 
        initialState: {
            show: false,
            todo:{
                    id:'',
                    title: '',
                    date: '',
                    description:'',
            },
            todoImage:''
        },  
        reducers: {
            handleCloseModal: (state, action) => {
    
                if (Object.hasOwnProperty.call(state, 'show')) {
                    state.show = false;
                    return state;
                }
               
            },     
            handleShowModal: (state, action) => {
                if (Object.hasOwnProperty.call(state, 'show')) {
                    state.show = true;
                    return state;
                }
            },
            updateTodoTitle: (state, action) => {
                if (Object.hasOwnProperty.call(state, 'todo')) {
                    state.todo.title = action.payload;
                    return state;
                }
            }, 
            updateTodoDate: (state, action) => {
                if (Object.hasOwnProperty.call(state, 'todo')) {
                    state.todo.date = action.payload;
                    return state;
                }
            },
            updateTodoDescription: (state, action) => {
                if (Object.hasOwnProperty.call(state, 'todo')) {
                    state.todo.description = action.payload;
                    return state;
                }
            }, 
            saveModalTodo: (state, action) => {
                if (Object.hasOwnProperty.call(state, 'todo')) {
                    state.todo = action.payload;
                    return state;
                }
            },
            pickTodoImage: (state, action) => {
                const getNumber = () => {
                    return Math.round(Math.random() * 10);
                };
                const randomNumber = getNumber();
                const selectedImage = action.payload.find(
                    (objectImage) => {
                        return objectImage.id === randomNumber
                    }
                );
               state.todoImage = selectedImage.image;
               return state;
            }
        }
    }

);

export const selectModalState = (state) => state.modal.show;
export const selectModalTodo = (state) => state.modal.todo;
export const selectModalTodoImage = (state) => state.modal.todoImage;

export default modalSlice.reducer;

export const {
    handleCloseModal, handleShowModal, saveModalTodo,
    updateTodoTitle, updateTodoDate, updateTodoDescription, 
    pickTodoImage
} = modalSlice.actions;
