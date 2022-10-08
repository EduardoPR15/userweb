import React from 'react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
const defaultValues = {
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: ""
}
const UserForm = ({createNewUser,updateInfo}) => {
    //console.log(updateInfo);
    
    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])
    
    const {handleSubmit, reset, register} = useForm()

    const submit = data => {
        createNewUser(data)
        reset(defaultValues)
        console.log("reseteo");
        
    }
return (
    <form onSubmit={handleSubmit(submit)}>
            {
                updateInfo ? <h1>Editar usuario</h1> :  <h1>Usuario nuevo</h1>
            }

        <div>
            <label htmlFor="email">email</label>
            <input type="email" id="email" {...register("email")} />
        </div>
        <div>
            <label htmlFor="password">password</label>
            <input type="password" id="password"{...register("password")} />
        </div>
        <div>
            <label htmlFor="first_name">first name</label>
            <input type="text" id="first_name" {...register("first_name")}/>
        </div>
        <div>
            <label htmlFor="last_name">last name</label>
            <input type="text" id="last_name"{...register("last_name")} />
        </div>
        <div>
            <label htmlFor="birthday">birthday</label>
             <input type="date" id="birthday" {...register("birthday")}/>    
        </div>
                    <div>
                    {
                updateInfo ? <button> Actualizar</button> :  <button> Crear usuario</button>
            }
                    </div>
    </form>
  )
}

export default UserForm