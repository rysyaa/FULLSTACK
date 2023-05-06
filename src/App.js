import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import Main from './components/Main/Main'
import Registration from './components/Cart/Registration'
import EditPeople from './components/Cart/EditPeople'
import People from './components/Cart/People'

const App = () => {
  return (
    <div>
        <Header/>
        <Routes>
          <Route path='/ticket' element={<Registration/>}/>
          <Route path='/peoples' element={<People/>}/>
          <Route path='/' element={<Main/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/edit/:id' element={<EditPeople/>}/>
        </Routes>
    </div>
  )
}

export default App