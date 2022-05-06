import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import Content from './Content';
import '../asserts/layout.css'
export default function Layout(){
    return (
        <div>
            <div className='headingMenu'>
                <Header />
            </div>
            <div className='splitSideBarAndContent'>
            <div className = "sideBarMenu">
                <SideBar />
            </div>
            <div className = 'contentsMenu'>
                <Content />
            </div>
            </div>
            <div className = 'footerMenu'>
                <Footer />
            </div>
        </div>
    )
}