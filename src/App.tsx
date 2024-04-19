import { Button } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useContext } from 'react';
import { userContext } from './context/authContext';

const App = () => {

const {username} = useContext(userContext)

console.log("username ",username)

  return (
    <div>
<Routes>

<Route path='/' element={<Home/>} />
<Route path='/login' element={<Login/>} />
<Route path='/register' element={<Register/>} />

</Routes>
    </div>
  )
}

export default App
