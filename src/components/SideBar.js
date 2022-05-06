import { useSelector } from 'react-redux'
import '../asserts/SideBar.css'
export default function SideBar(){
    const menu = useSelector((state) => state.displayContents)
    return(
        <div className = "sideBarStyle">
            {menu.sideBar.map((menuItems) => {
                return <p>{menuItems}</p>
            })}
        </div>
    )
}