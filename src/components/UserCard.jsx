import React from 'react'
import './Styles/userCard.css'

const UserCard = ({user,deleteUserById,setUpdateInfo}) => {
  const handleEdit = () => {
    setUpdateInfo(user)
        

  }
  return (
    <div className='user'>
        <div>
            <h1>Usuario</h1>
            <h3 className= 'user__name'>Nombre {user.first_name} {user.last_name} ID: {user.id} </h3>
            <h4 className= 'user__email'>Email {user.email}</h4>
            <h4 className= 'user__birthday'>Fecha de nacimiento {user.birthday}</h4>
        </div>
        <div>
            <button onClick={handleEdit} className= 'user__edit'> Editar</button>
            <button onClick={ () => deleteUserById(user.id)} className= 'user__trash'>Borrar</button>
        </div>    
    </div>
  )
}

export default UserCard