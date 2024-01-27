// import { useState } from 'react'
import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {

  const [books,setBooks] = useState([])
  
  useEffect(()=> {
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
    .then((res) => setBooks(res.data.books))
    .catch((err)=> console.log(err))

  },[])

    return (
      <>
        <div className='App'>
          {books.map((book,index)=>{
            return(
            <div key={index}>
              <h1>{book.title}</h1>
              <div>
                <img src={book.imageLinks.thumbnail} alt="" />
                <div>
                  <h2>Description</h2>
                  <p>{book.description}</p>
                </div>
              </div>
              <hr />
            </div>
            )
          })}
        </div>
      </>
  )
}

export default App