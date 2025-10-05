import React from 'react'
import axios from '../axiosConfig';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'

function Login() {
    // const navigate=useNavigate()
     const emailvalue = useRef(null)
    const passvalue = useRef(null)

    async function handleSubmit(e) {
        
        e.preventDefault();  
const data = {
        email: emailvalue.current.value,
        password: passvalue.current.value, 
    };
 if (
      
        !data.email || !data.password
    ) {
        alert('please provide all information then try again');
        return;
    } 

try {
  const responce=  await axios.post('/login', data)
    alert(" log in  successfull ");
    localStorage.setItem('token',responce.data.token);
    // navigate('/')
    console.log(responce.data);
} catch (error) { 
     const errorMessage = error.response?.data?.msg || "Something went Wrong!";
    
    alert(errorMessage); // Display the specific error (e.g., "Invalid Credential")
    console.log(error.response);
    
}



        // console.log(usernamevalue.current.value);
        //  console.log(firstName.current.value);
        //   console.log(lastName.current.value);
        //    console.log(email.current.value);
        //     console.log(password.current.value);
        //to change background color 
        // console.log(userNameDom.current.style.backgroundColor='red');
        }
           

  return (
    <div>
     <section> 
       
        
<form onSubmit={handleSubmit}>

<div>
<span> Email: --- </span> 
<input  ref={emailvalue} type='email' placeholder='Email' />

</div>
<br />

<div>
<span> Passwords: --- </span> 
<input ref={passvalue} type='password' placeholder='Passwords' />

</div>
 <button> Log in</button>







</form>

<Link to={'/register'}> register </Link>
     </section>
    
  

       
     
    </div>
  )
}

export default Login
