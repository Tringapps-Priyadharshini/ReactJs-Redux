import { useSelector } from 'react-redux'
import React from 'react'
import '../asserts/Header.css'
export default function Header() {
    const headerName = useSelector((state)=>state.displayContents)
    return(
        <div className = "headerText">
            <p>Welcome {headerName.userName}</p>
        </div>
    )
}