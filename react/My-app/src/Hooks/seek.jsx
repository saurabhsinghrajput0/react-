import React, { useContext } from "react"
import { WelcomeContext } from "../Context/welcome"

const Seek = () => {
  const { showWelcome } = useContext(WelcomeContext)

  return (
    <div>
      <button onClick={showWelcome}>Welcome</button>
    </div>
  )
}

export default Seek