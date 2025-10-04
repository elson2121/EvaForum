 
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './page/Login'
import Register from './page/Register'
import Home from './page/Home'

function App() {
  

  return (
   <>
   
<Routes> 
  <Route path='/' element={<Home/>}/>
   <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
</Routes>

   </>
  )
}

export default App
