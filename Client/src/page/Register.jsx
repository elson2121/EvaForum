import React from 'react'
import { use } from 'react'
import { useRef } from 'react'

function Register() {
    const userNameDom = useRef(null)
  return (
    <div>
     <section>
<form action="">
<div>
<span> User Name: --- </span> 
<input  ref={userNameDom} type='text' placeholder='User Name' />

</div>
<br />
<div>
<span> First Name: --- </span> 
<input type='text' placeholder='First Name' />

</div>
<br />
<div>
<span> Last Name: --- </span> 
<input type='text' placeholder='Last Name' />

</div>
<br />
<div>
<span> Email: --- </span> 
<input type='email' placeholder='Email' />

</div>
<br />

<div>
<span> Passwords: --- </span> 
<input type='password' placeholder='Passwords' />

</div>
 <button> Register</button>







</form>


     </section>
    </div>
  )
}

export default Register
