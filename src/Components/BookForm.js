import React from 'react'
import { BookContext } from '../Contexts/BookContext'

export default function BookForm() {
  const { books, addBook, removeBook } = React.useContext(BookContext)
  console.log(books, addBook, removeBook)
  return (
    <div>
      <h1>Book Form</h1>
    </div>
  )
}
