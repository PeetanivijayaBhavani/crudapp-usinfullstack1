import logo from './logo.svg';
import React from 'react'
import './App.css';
import {Route,Routes} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home'
import AddEdit from './components/AddEdit'
import ViewContact from './components/ViewContact';
function App() {
  return (
    <div className='App'>
      <ToastContainer position="top-center"/>
      <Router>
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path='/' element={<Home/>}/>
          <Route path='/addedit' element={<AddEdit/>}/>
          <Route path="/update/:id" element={<AddEdit/>}/>
          <Route path="/view/:id" element={<ViewContact/>}/>
        </Routes>
      </Router>
         {/* <h1>Main Page</h1> */}
    </div>
  )
}

export default App