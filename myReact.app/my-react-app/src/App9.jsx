import { useState } from 'react'
import './App9.css'

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function showData() {

    if(name === "" || email === "" || password === ""){
      alert("Please Fill All Fields")
    }
    else{
      alert("Registered Successfully")
    }

  }

  return (
    <div className="form-box">

      <h1>Registration</h1>
      <h1>Form</h1>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <br /><br />

      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>

      <button onClick={showData}>Submit</button>

    </div>
  )
}

export default App