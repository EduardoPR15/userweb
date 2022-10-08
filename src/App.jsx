import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import UserForm from './components/UserForm'
import UserCard from './components/UserCard'

const baseURL = 'https://users-crud1.herokuapp.com'

function App() {

  const [users, setUsers] = useState()
  
  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios.get(URL) 
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
}

    useEffect(() => {
      getAllUsers()
    }, [])
console.log(users);


const createNewUser = data => {
  const URL = `${baseURL}/users/`
  axios.post(URL, data)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
}

const deleteUserById = id => {
  const URL = `${baseURL}/users/${id}`
  axios.delete(URL)
  .then(res =>{
    console.log(res.data)
    getAllUsers()
  })
  .catch(err => console.log(err))
}

  return (
    <div className="App">
      <h1>crud</h1>
      <UserForm 
      createNewUser={createNewUser}/>
      {
        users?.map(user => (
          <UserCard
          key={user.id} 
          user={user}
          deleteUserById={deleteUserById}
          />
        ))
      }

    </div>
)
}

export default App
