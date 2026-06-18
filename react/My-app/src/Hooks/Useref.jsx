import React, { useEffect, useRef } from 'react'

const UseRef = () => {
  const inputRef = useRef(null)
  const scrollTo = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const Scroll = () => {
    scrollTo.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div>
      <label>Enter Detail</label>

      <input
        ref={inputRef}
        className="border-2 ml-3"
        type="text"
        placeholder="Name"
      />

      <br />

      <button onClick={Scroll} className="border-2 ml-5">
        Contact Us
      </button>

      <p className="mt-[500px]" ref={scrollTo}>
        There are my details
      </p>
    </div>
  )
}

export default UseRef