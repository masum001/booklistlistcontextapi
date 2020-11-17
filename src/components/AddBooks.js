import React,{ useContext, useState } from 'react'
import { BookContext } from '../context/BookContext'
import { TextField, Button } from '@material-ui/core'


const AddBooks = () => {

    const { dispatch } = useContext(BookContext);
    const [ bookTitle, setBookTitle ] = useState("");
    const [ author, setAuthor ] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(bookTitle.length && author.length){
             dispatch({ type: "ADD_BOOK", book : {title : bookTitle, author : author}})
            }
        else{
            alert("fill")
        }
        setAuthor(" ");
        setBookTitle(" ");

    }
    
    return (
        <form  noValidate autoComplete="off">
            <TextField id="standard-basic" label="New Book Ttile" value={bookTitle} fullWidth onChange={(e)=>setBookTitle(e.target.value)}/>
            <TextField id="standard-basic" label="Author Name" value={author}  fullWidth onChange={(e)=>setAuthor(e.target.value)}/>
            <Button variant="contained" color="primary" style={{marginTop : 25 }} onClick={handleSubmit} >
                 Add Book
            </Button>
        </form>
    )
}

export default AddBooks
