import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

class MyRoutes extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route exact path='/login' element={ <Login /> } />
      </Routes>
    )
  }
}

export default MyRoutes;