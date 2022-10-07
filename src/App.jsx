import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useForm } from 'react-hook-form'
import FormUser from './Components/FormUser'
import axios from 'axios'
const baseURL = 'https://users-crud1.herokuapp.com'
function App() {
  
  const [user, setUser] = useState()
//obtener usuarios
  const getAllUsers = () =>{
    const URL = `${baseURL}/user/`
    axios.get(URL)
    .then (res =>setUser(res.data))
    .catch(err =>console.log(err) )

  }
  useEffect(() => {
    getAllUsers()
  }, [])
  //crear un usuario nuevo
  const newUser =  data  =>{
    const URL = `${baseURL}/users/`
    axios.post(URL, data)
    .then(res =>console.log(res.data) )
    .catch(err =>console.log(err) )
  }



  return (
    <div className="App">
      <FormUser />

    </div>
  )
}

export default App
