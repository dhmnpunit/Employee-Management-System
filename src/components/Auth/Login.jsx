import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    

    const [email, setemail] = React.useState('');
    const [password, setpassword] = React.useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)   
        setemail('')
        setpassword('')
    }


    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form 
                onSubmit={(e) => {
                    submitHandler(e)
                }}
                className='flex flex-col items-center justify-center gap-4'
                >
                    <input 
                    value={email}
                    onChange={(e) => {
                        setemail(e.target.value)
                    }}
                    required 
                    className='px-4 py-2 rounded-lg border border-emerald-500 outline-none bg-transparent placeholder:text-gray-300' type="email" placeholder='Enter your email' 
                    />

                    <input 
                    value={password}
                    onChange={(e) => {
                        setpassword(e.target.value)
                    }}
                    required 
                    className='px-4 py-2 rounded-lg border border-emerald-500 outline-none bg-transparent placeholder:text-gray-300' type="password" placeholder='Enter your password' 
                    />
                    <button className='bg-green-500 rounded-lg mt-4 px-4 py-2 w-full'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login