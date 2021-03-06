import React from 'react'
import BookContextProvider from './Contexts/BookContext'
import BookForm from './Components/BookForm'
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <NavBar />
      </BookContextProvider>
    </div>
  )
}

export default App
