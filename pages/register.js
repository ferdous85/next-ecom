import Head from 'next/head'
import Link from 'next/link'
import { useState, useContext } from 'react'
import valid from '../utils/valid'
import { DataContext } from '../store/GlobalState'
import {postData} from '../utils/featchData'

const Register = () => {
    const initialState ={name:'', email:"", password:"", cf_password:""}

    const [userData, setUserData] = useState(initialState)

    const {name, email, password, cf_password}  = userData

    const [state, dispatch] = useContext(DataContext)

    const handleChangeInput = e =>{
        const{name, value} = e.target

        setUserData({...userData, [name]:value})

        // dispatch({type: "NOTIFY",payload: {success: "Ok"}})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const errMsg = valid(name, email, password, cf_password)
        if(errMsg) return dispatch({type: "NOTIFY",payload: {error: errMsg}})

        dispatch({type: "NOTIFY",payload: {loading: true }})

        const res = await postData('auth/register', userData)

        if(res.err) return dispatch({type: "NOTIFY",payload: {error: res.err}})

        return dispatch({type: "NOTIFY",payload: {success: res.msg}})
    }

    
    return (
        <div>
            <Head>
                <title>Register Page</title>
            </Head>
            <form className='mx-auto my-4' style={{maxWidth:"500px"}} onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" name='name' value={name} onChange={handleChangeInput} id="name" aria-describedby="emailHelp"/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" name='email' value={email} onChange={handleChangeInput} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={password} onChange={handleChangeInput} id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" name='cf_password' value={cf_password} onChange={handleChangeInput} id="exampleInputPassword2"/>
            </div>
            
            <button type="submit" className="btn btn-dark w-100">Register</button>
            <p className='my-2'>Already Have an account ? <Link href="/signin">
               Login Now
                  </Link>  
                 
                 </p>
            </form>
        </div>
    )
}

export default Register