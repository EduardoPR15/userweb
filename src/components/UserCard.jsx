import React from 'react'
import './Styles/userCard.css'

const UserCard = ({user,deleteUserById,setUpdateInfo}) => {
  const handleEdit = () => {
    setUpdateInfo(user)
        

  }
  return (
    <div className='user'>
        <div>
            <h2 className= "user__id">Usuario : {user.id}</h2>
            <h3 className= 'user__name'>Nombre</h3>
           <h2>{user.first_name} {user.last_name}</h2>
          
            <h4 className= 'user__email'><i class='bx bx-envelope'></i> {user.email}</h4>
            <p className= 'user__birthday' ><i class='bx bx-gift'></i> {user.birthday}</p>
        </div>

        <div className='Buttons'>
            <button className= "user__btn" onClick={handleEdit} > <i class='bx bx-edit'></i>Editar</button>
            <button className= "user__btn" onClick={ () => deleteUserById(user.id)} ><i class='bx bx-user-minus' ></i>Borrar</button>
        </div>    
    </div>
  )
}

export default UserCard