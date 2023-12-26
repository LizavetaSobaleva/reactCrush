import React, { useContext } from 'react'
import MyBlock from '../components/UI/block/MyBlock'
import MyInput from '../components/UI/input/MyInput'
import MainButton from '../components/UI/button/MainButton'
import { AuthContext } from '../context'

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }
  return (
    <div className='login'>
        <MyBlock>
            <h1>Login</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Login"/>
                <MyInput type="password" placeholder="Password"/>
                <br />
                <MainButton>Login</MainButton>
            </form>
        </MyBlock>
    </div>
  )
}

export default Login