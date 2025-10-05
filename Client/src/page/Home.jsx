import React from 'react'
import { useContext } from 'react'
import { Appstate } from '../App'

function Home() {
  const {user}=  useContext (Appstate)
//   console.log(abc);
  return (
    <div>
      <h1>this is the home page </h1>
      <br />
      <br />
      <br /><br /><br />
      <h2> welcome {user.username}</h2>
    </div>
  )
}

export default Home
