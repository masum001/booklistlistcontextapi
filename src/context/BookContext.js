import React,{ useReducer , createContext } from 'react';
import { bookreducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) =>{

   const [ books, dispatch ]  = useReducer(bookreducer ,[])


    return (
        <BookContext.Provider value = {{ books, dispatch }} >
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;