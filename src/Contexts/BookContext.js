import React from 'react'
import uuid from 'react-uuid'

export const BookContext = React.createContext()

export default function BookContextProvider({ children }) {
  const [books, setBooks] = React.useState([
    { title: 'The way of the kings', author: 'patrick rothfuss', id: 1 },
    { title: 'The name of the wind', author: 'brondon sanderson', id: 2 },
    { title: 'The final empire', author: 'patrick rothfuss', id: 3 },
    { title: 'The hero of ages', author: 'brondon sanderson', id: 4 }
  ])

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }])
  }

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  )
}
