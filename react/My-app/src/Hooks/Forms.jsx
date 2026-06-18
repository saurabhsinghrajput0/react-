import React, { useState } from 'react'

const Forms = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [data, setData] = useState({})

  const handleClick = (e) => {
    e.preventDefault()

    const userData = {
      name,
      email,
      number
    }

    localStorage.setItem("data", JSON.stringify(userData))

    setName('')
    setEmail('')
    setNumber('')
  }

  const display = () => {
    const user = JSON.parse(localStorage.getItem("data"))
    setData(user)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Sign Up Form
        </h1>

        <form onSubmit={handleClick} className="space-y-4">

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded-md placeholder:text-gray-400 focus:outline-blue-500"
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded-md placeholder:text-gray-400 focus:outline-blue-500"
          />

          <input
            type="tel"
            placeholder="Enter your phone number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full border p-2 rounded-md placeholder:text-gray-400 focus:outline-blue-500"
          />

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={display}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Display
            </button>
          </div>
        </form>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">User Details</h2>

          <p>
            <span className="font-bold">Name:</span> {data?.name}
          </p>

          <p>
            <span className="font-bold">Email:</span> {data?.email}
          </p>

          <p>
            <span className="font-bold">Phone:</span> {data?.number}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Forms