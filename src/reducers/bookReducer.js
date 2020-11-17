import { v4 as uuidv4 } from 'uuid';

export const bookreducer = ( books, action ) =>{
    switch(action.type){
        case "ADD_BOOK":
            return [{
                title : action.book.title,
                author : action.book.author,
                id : uuidv4()
            }, ...books]
        case "REMOVE_BOOK":
            return (books.filter(book=> book.id !== action.id))
        
        default:
            return books
    }

}