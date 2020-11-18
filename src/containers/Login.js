import React, { useState }from 'react'
import {Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions/action'

const Login = (props) => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const {email, password} = formData
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit = e => {
        e.preventDefault()
        props.login(email, password)
    }
    if (props.isAuthenticated) {
        return <Redirect to='/'/>
    }
    return (
    <div className='eontainer mt-5'>
        <h1>Sign in</h1>
        <p1>Sign into your Account</p1>
        <form onSubmit={e => onSubmit(e)}>
            <div className='form-group'>
                <input 
                className='from-control'
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange={e => onChange(e)}
                required/>
            </div>
            <div className='form-group'>
                <input 
                className='from-control'
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={e => onChange(e)}
                required/>
            </div>
            <button className='btn btn-primary' type='submit'>Login</button>
        </form>
        <p className='mt-3'>
            Don't have an account? <Link to='/signup'>Sign up</Link>
        </p>
        <p className='mt-3'>
            Forget your password? <Link to='/reset_password'>Reset Password</Link>
        </p>
    </div>
    )
}

const mapstateToProps = state => {
    return {
    isAuthenticated: state.reducer.isAuthenticated
}
}

const mapDispatchToProps = dispatch => {
    return {
        login : (email, password) => dispatch(actions.login(email, password))
    }
}

export default connect(mapstateToProps, mapDispatchToProps)(Login)