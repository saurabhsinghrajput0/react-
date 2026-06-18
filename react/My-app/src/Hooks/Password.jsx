import React, { useState } from 'react'

const Password = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [inputPassword, setInputPassword] = useState("")
  const [showLikes, setLiked] = useState(false)

  const like = () => {
    setLiked(prev => !prev)
  }

  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
      />

      <button onClick={() => setShowPassword(prev => !prev)}>
        {showPassword ? "Hide" : "Show"}
      </button>

      <br />
      <br />

      <button onClick={like}>
        {showLikes ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  )
}

export default Password