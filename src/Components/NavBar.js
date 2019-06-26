import React from 'react'
import { BookContext } from '../Contexts/BookContext'

export default function NavBar() {
  const { books } = React.useContext(BookContext)
  return (
    <div className='nav-bar'>
      <h1>Reading List</h1>
      <p>Currently you have {books.length} books to get through..</p>
    </div>
  )
}
