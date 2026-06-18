import React, { useRef, useState } from 'react'
import ssr from './ssr.jpeg'

const Portfolio = () => {
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const certificateRef = useRef(null)
  const contactRef = useRef(null)

  const [message, setMessage] = useState('')

  const handleMessage = () => {
    localStorage.setItem("message", message)
    setMessage('')
  }

  return (
    <div className="bg-gray-500 min-h-screen text-center">
      <div className="bg-blue-600 p-4">
        <button
          className="text-white mx-4"
          onClick={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })}
        >
          About
        </button>

        <button
          className="text-white mx-4"
          onClick={() => skillsRef.current.scrollIntoView({ behavior: "smooth" })}
        >
          Skills
        </button>

        <button
          className="text-white mx-4"
          onClick={() => certificateRef.current.scrollIntoView({ behavior: "smooth" })}
        >
          Certificates
        </button>

        <button
          className="text-white mx-4"
          onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}
        >
          Contact
        </button>
      </div>

      <h1 className="text-5xl font-bold text-blue-700 mt-10">
        Saurabh Singh
      </h1>

      <p className="text-xl mt-4">
        B.Tech Computer Science emgineering Student
      </p>

      <img
        src={ssr}
        alt="Profile"
        className="h-40 w-40 rounded-full mx-auto mt-8"
      />

      <div ref={aboutRef} className="mt-20">
        <h2 className="text-3xl font-bold text-purple-700">
          About Me
        </h2>

        <p className="mt-4">
          Interested in Web Development and DSA.
        </p>
      </div>

      <div ref={skillsRef} className="mt-20">
        <h2 className="text-3xl font-bold text-purple-700">
          Skills
        </h2>

        <p className="mt-4">HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React</p>
        <p>Java</p>
      </div>

      <div ref={certificateRef} className="mt-20">
        <h2 className="text-3xl font-bold text-purple-700">
          Certificates
        </h2>

        <p className="mt-4">Web Development Certificate</p>
        <p>Java Programming Certificate</p>
      </div>

      <div ref={contactRef} className="mt-20">
        <h2 className="text-3xl font-bold text-purple-700">
          Contact
        </h2>

        <p className="mt-4">
          <a
            href="https://github.com/saurabhsinghrajput0"
            target="_blank"
            className="text-blue-600 underline"
          >
            GitHub
          </a>
        </p>

        <p className="mt-4">
          <a
            href="https://www.linkedin.com/in/saurabh-singh-95936332b/"
            target="_blank"
            className="text-blue-600 underline"
          >
            LinkedIn
          </a>
        </p>

        <h2 className="text-3xl font-bold text-purple-700 mt-10">
          Message Me
        </h2>

        <input
          type="text"
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 rounded mt-4"
        />

        <br />

        <button
          onClick={handleMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Send
        </button>

        <p className="mt-4">
          {localStorage.getItem("messssage")}
        </p>
      </div>
    </div>
  )
}

export default Portfolio