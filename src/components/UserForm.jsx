import React from 'react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './Styles/userForm.css'
const defaultValues = {
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: ""
}
const UserForm = ({setCloseForm, closeForm, createNewUser, updateInfo, uptdateUserById}) => {

    console.log(updateInfo);
    
    useEffect(() => {      
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])
     


    

    const {handleSubmit, reset, register} = useForm()
    const submit = data => {
        if (updateInfo) {
            console.log("edicion")
            uptdateUserById(updateInfo.id, data)
        } else{
        console.log("se va a crear");
            createNewUser(data)
        }
        reset(defaultValues)
        setCloseForm(true)
        
    }
        const handleClose = () => {
setCloseForm(true)
        }
    
return (
    <div className={`formcard1 ${closeForm && `disableForm`} `}>
        
    <form className='formcard' onSubmit={handleSubmit(submit)}>
    <i onClick={handleClose} className='bx bx-x formclose'></i>
            {
                updateInfo ? <h3>Editar usuario</h3> :  <h3>Usuario nuevo</h3>            }

        <div className='formdiv'>
            <div className="label1">
                <label htmlFor="email"><p>Email</p>  </label>
            </div>
            <div className="input1">
                <input  type="email" id="email" {...register("email")} />
            </div>
        </div>
        <div className='formdiv'>
            <div className="label1">
                <label htmlFor="password"><p>password</p> </label>
                </div>
             <div className="input1">
            <input type="password" id="password"{...register("password")} />
       </div> </div>
        <div className='formdiv'>
        <div className="label1">
            <label htmlFor="first_name">first name: </label>
             </div>
             <div className="input1">
            <input type="text" id="first_name" {...register("first_name")}/>
       </div>  </div>
        <div className='formdiv'>
            <div className="label1">
            <label htmlFor="last_name">last name: </label>
             </div>
             <div className="input1">
            <input type="text" id="last_name"{...register("last_name")} />
       </div>  </div>
        <div className='formdiv'> 
            <div className="label1">
                <label htmlFor="birthday"><p>birthday:</p> </label>
            </div>
            <div className="input1">
                <input type="date" id="birthday" {...register("birthday")}/>    
            </div>  
        </div>
                    <div className='btndiv'>
                    {
                updateInfo ? <button className='actionbtn'> <i class='bx bx-user-check'></i></button > :  <button className='actionbtn'> <i class='bx bx-user-plus'></i> </button>
            }
                    </div>
    </form>
    </div>
  )}

export default UserForm