import '../asserts/footer.css'
import React from 'react'
import { useSelector } from 'react-redux'
export default function Footer(){
    const footerName = useSelector((state) => state.displayContents)
    return (
        <div className="footer">
            <p>Welcome {footerName.userName}</p>
            <p>{footerName.address}</p>
        </div>
    )
}