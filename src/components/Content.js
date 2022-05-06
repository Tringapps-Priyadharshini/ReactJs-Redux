import '../asserts/content.css'
import React,{ useState } from 'react'
import { useDispatch } from 'react-redux';
import { nameUpdate } from '../store/counterSlice';
export default function Content(){
    const dispatch = useDispatch();
    const [nameOfUser,setNameOfUser] = useState('')
    function handleChange(event){
        setNameOfUser(event.target.value)
    }

    function handleSubmit(){
        if(nameOfUser !== '')
        {
            dispatch(nameUpdate(nameOfUser))
        }
        setNameOfUser('')
    }

    return(
        <div className='formbox'>
            <input type = "text" name = "username" value = {nameOfUser} placeholder="username" onChange ={handleChange} className='inputText'></input>
            <button type = "submit" className='submitButton' onClick = {handleSubmit}>Submit</button>
        </div>
    )
}
