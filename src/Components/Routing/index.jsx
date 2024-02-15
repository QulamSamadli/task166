import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../../Pages/HomePages'
import About from '../../Pages/AboutPages'
import Books from '../../Pages/BooksPages'
import Quiz from '../../Pages/QuizPages'
import Contact from '../../Pages/ContactPages'
import SingIn from '../../Pages/SignInPages'
import SignUp from '../../Pages/SignUpPages'
import NotFound from '../../Pages/NotFoundPages'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='haqqimizda' element={<About/>} />
        <Route path='kitablar' element={<Books/>} />
        <Route path='imtahanlar' element={<Quiz/>} />
        <Route path='elaqe' element={<Contact/>} />
        <Route path='daxilol' element={<SingIn/>} />
        <Route path='qeydiyyat' element={<SignUp/>} />
        <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default Routing