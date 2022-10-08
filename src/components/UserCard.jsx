import React from 'react'

const UserCard = ({user,deleteUserById}) => {
  return (
    <div>
        <div>
            <h1>Usuario</h1>
            <h3>Nombre {user.first_name} {user.last_name} ID: {user.id} </h3>
            <h4>Email {user.email}</h4>
            <h4>Fecha de nacimiento {user.birthday}</h4>
        </div>
            <button> Editar</button>
            <button onClick={ () => deleteUserById(user.id)}>Borrar</button>
    </div>
  )
}

export default UserCard