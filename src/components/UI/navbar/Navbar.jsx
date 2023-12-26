import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
import MainButton from '../button/MainButton'
import { AuthContext } from '../../../context'

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  };

  return (
    <div className={classes.navbar}>
        <div className={classes.navbar__links}>
            <Link to="/about" className={classes.navbar__link}>About</Link>
            <Link to="/posts" className={classes.navbar__link}>Posts</Link>
        </div>

        {isAuth
          ? <MainButton onClick={logout}>Log out</MainButton>
          : ''}
          
    </div>
  )
}

export default Navbar