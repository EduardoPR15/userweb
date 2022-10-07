import { useEffect, useState } from 'react'

import './App.css'

import axios from 'axios'

const baseURL = 'https://users-crud1.herokuapp.com'
function App() {
const [users, setUsers] = useState()
const getAllUsers = () => {
  const URL = `${baseURL}/users/`
 axios.get(URL) 
  .then(res =)
}



  return (
    <div className="App">
      <h1>crud</h1>


    </div>
)
}

export default App
