import React, { createContext, useEffect, useState } from 'react'; // Consolidated React imports
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

// Page Imports
import Login from './page/Login';
import Register from './page/Register';
import Home from './page/Home';

import axios from './axiosConfig';

// Create the context outside the function
// eslint-disable-next-line react-refresh/only-export-components
export const Appstate = createContext();

function App() {
  // Destructure useState correctly: const [value, setValue] = useState(initialValue);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  async function checkuser() {
    const token = localStorage.getItem('token');

    if (!token) {
      return;
    }

    try {
      // Correctly capture the API response
      const response = await axios.get('/check', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });
      
      // Use the data property from the response object
      setUser(response.data); 
      
    } catch (error) {
      console.log("Authentication check failed. Clearing token and redirecting.", error);
      localStorage.removeItem('token');
      if (window.location.pathname !== '/register') {
        navigate('/login');
      }
    }
  }

  useEffect(() => {
    checkuser();
  }, []);

  return (
    // Context Provider should be Appstate.Provider (uppercase 'P')
    <Appstate.Provider value={{ user, setUser }}> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Appstate.Provider>
  );
}

export default App;