import React, { useState } from 'react'
import Button from '../../utils/Button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const formInputs = [
  {
    type: 'text',
    name: 'email',
    placeHolder: 'Email',
  },
  {
    type: 'password',
    name: 'password',
    placeHolder: 'Password',
  },
]

const LoginMain = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setLoginData({
      ...loginData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:3000/login', loginData)
      if (response.status === 200) {
        console.log('Login successful', response.data)
        localStorage.setItem('token', response.data.token);
        navigate('/')
      }
    } catch (error) {
      console.error(
        'Registration failed:',
        error.response?.data?.message || error.message
      )
    }
  }

  return (
    <div className="mt-10">
      <h2 className="text-3xl mb-5">Already Registered?</h2>
      <div className="flex gap-5">
        <div className="flex flex-col gap-5 flex-1 border border-1 rounded-lg px-4 py-4">
          <h4 className="text-xl font-medium">New Customer?</h4>
          <p className="text-sm text-gray-500">
            By creating an account you will be able to shop faster, be up to
            date on an order's status, and keep track of the orders you have
            previously made.
          </p>
          <Link to="/register" className="mt-2">
            <Button variant="form" size="small" className="w-fit">
              Create Account
            </Button>
          </Link>
        </div>

        <div className="flex flex-col gap-5 flex-1 border border-1 rounded-lg px-4 py-4">
          <h4 className="text-xl font-medium">Login</h4>
          <p className="text-sm text-gray-500">
            If you have an account, please log in.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-sm">
            {formInputs.map((data, index) => (
              <input
                key={index}
                type={data.type}
                placeholder={data.placeHolder}
                name={data.name}
                onChange={handleInputChange}
                className="pl-4 py-3 rounded-xl w-[40rem] outline-none border border-1 border-gray-200"
              />
            ))}
            <Link
              to="/"
              className="hover:text-themeColor transition-all ease-in-out duration-[0.3s] self-end"
            >
              Forgot your password?
            </Link>
            <Button variant="form" size="small" className="w-fit self-center">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginMain
