import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { selectUser } from './features/userSlice'
import { auth } from './firebase'
import './Nav.css'
function Nav() {
    const user = useSelector(selectUser)
    const [show, handleShow] = useState(false)
    const history = useHistory()

    const transitionNavbar =() =>{
        if(window.scrollY > 100 ){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }
useEffect(() => {
window.addEventListener("scroll",transitionNavbar)
return () => window.removeEventListener('scroll', transitionNavbar)
}, [])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__contents'>
                <img onClick={() => history.push('/')} className='nav__logo' src='https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/10/netflix-logo.png' alt='NETFLI_LOGO' />
                {/* <p>Home</p> */}
                {user && <p onClick={() => auth.signOut()}>Logout</p>}
                {/* <p>Movies</p> */}
                <img onClick={() => history.push('/profile')} className='nav__avatar' src='https://pbs.twimg.com/profile_images/666011864883662849/gQwK8LLw.jpg' alt='NETFLI_AVATAR' />
            </div>
               
        </div>
    )
}

export default Nav
