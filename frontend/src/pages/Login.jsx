import React , {useContext, useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/authContext'
const Login = () => {
  const [input, setInput] = useState({
    username:"",
    password:"",
  })
  const [error,setError] = useState(null)
  const navigate = useNavigate()
  const {login} = useContext(AuthContext);
  const  handleChange = (e) =>{
    setInput(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      await login(input)
      navigate('/')
    } catch (error) {
      setError(error.response.data)
      console.log(error);
      
    }
    console.log(input)
  }
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form >
        <input required type="text" placeholder='User Name' name='username' onChange={handleChange}/>
        <input required type="text" placeholder='Password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        { error &&<p>{error}</p>}
        <span>Don't Have Account ? <Link to="/register">Register</Link></span>

      </form>
    </div>
  )
}

export default Login