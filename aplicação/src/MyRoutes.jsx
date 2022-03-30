import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateUser from './pages/CreateUser'
import Home from './pages/Home'
import Login from './pages/Login'

class MyRoutes extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path='/' element={ <Login /> } />
        <Route exact path='/home' element={ <Home /> } />
        <Route exact path='/signup' element={ <CreateUser /> } />
      </Routes>
    )
  }
}

export default MyRoutes;