import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
  const [input, setInput] = useState({
    username:"",
    email:"",
    password:"",
  })
  const  handleChange = (e) =>{
    setInput(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const res = await axios.post("/auth/register",input)
    } catch (error) {
      console.log(error);
      
    }
    console.log(input)
  }
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form >
        <input required type="text" placeholder='User Name' name='username' onChange={handleChange}/>
        <input required type="email" placeholder='Email' name='email' onChange={handleChange}/>
        <input required type="text" placeholder='Password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Register</button>
        <p>This is an error</p>
        <span>Do Have Account ? <Link to="/login">Login</Link></span>

      </form>
    </div>
  )
}

export default Register