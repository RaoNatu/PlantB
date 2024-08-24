import React, { useState } from 'react'
import Button from '../../utils/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const formInputs = [
  {
    type: 'text',
    placeHolder: 'First name',
    name: 'first_name',
  },
  {
    type: 'text',
    placeHolder: 'Last name',
    name: 'last_name',
  },
  {
    type: 'text',
    placeHolder: 'Email',
    name: 'email',
  },
  {
    type: 'password',
    placeHolder: 'Password',
    name: 'password',
  },
]

const RegisterMain = () => {
  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:3000/register',
        userData
      )

      if (response.status === 200) {
        console.log('Registration Successful ', response.data)
        navigate('/login')
      }
    } catch (error) {
      console.error(
        'Registration failed:',
        error.response?.data?.message || error.message
      )
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl py-8">Create Account</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-sm">
        {formInputs.map((data, index) => (
          <input
            key={index}
            type={data.type}
            placeholder={data.placeHolder}
            name={data.name}
            onChange={handleInputChange}
            className="pl-4 py-3 rounded-xl w-[40rem] outline-none border border-1 border-gray-200"
            required
          />
        ))}
        <Button variant="form" size="small" className="w-fit">
          Create
        </Button>
      </form>
    </div>
  )
}

export default RegisterMain
