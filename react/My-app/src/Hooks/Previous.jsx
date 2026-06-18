import React, { useEffect, useRef, useState } from 'react'

const Previous = () => {
  const [count, setCount] = useState(0)
  const PrevCount = useRef()

  useEffect(() => {
    PrevCount.current = count
  }, [count])

  return (
    <div>
      <h1>To Store Previous Value</h1>

      <p>Count: {count}</p>
      <p>Prev: {PrevCount.current}</p>

      <button onClick={() => setCount((count) => count + 1)} className="border-2 px-4 py-2 m-3">
        Inc
      </button>
    </div>
  )
}

export default Previous