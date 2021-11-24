import Head from 'next/head'
import Link from 'next/link'
import { useState, useContext } from 'react'
import { DataContext } from '../store/GlobalState'
import {postData} from '../utils/featchData'
import Cookies from 'js-cookie'

const Signin = () => {

    const initialState ={email:"", password:""}

    const [userData, setUserData] = useState(initialState)

    const { email, password}  = userData

    const {state, dispatch}= useContext(DataContext)

    const handleChangeInput = e =>{
        const{name, value} = e.target

        setUserData({...userData, [name]:value})

         dispatch({type: "NOTIFY",payload: {}})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
       
        dispatch({type: "NOTIFY",payload: {loading: true }})

        const res = await postData('auth/login', userData)

        if(res.err) return dispatch({type: "NOTIFY",payload: {error: res.err}})

        dispatch({ type: 'NOTIFY', payload: {success: res.msg} })

         dispatch({type: "AUTH",payload: {
             token: res.access_token,
             user: res.user
         }})

        Cookies.set('refreshtoken', res.refresh_token,{
            path: 'api/auth/accessToken',
            expires: 7
        } )

        localStorage.setItem('firstLogin', true)
    }

    return (
        <div>
            <Head>
                <title>SignIn Page</title>
            </Head>
            <form className='mx-auto my-4' style={{maxWidth:"500px"}} onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" name='email' value={email} onChange={handleChangeInput} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={password} onChange={handleChangeInput} id="exampleInputPassword1"/>
            </div>
            
            <button type="submit" className="btn btn-dark w-100">Login</button>
            <p className='my-2'>Don't Have an account ? <Link href="/register">
                Register Now
                  </Link>  
                 
                 </p>
            </form>
        </div>
    )
}

export default Signin