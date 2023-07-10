import {useState} from "react"
export function StateForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [emailErrors, setEmailErrors] = useState([])
  const [passwordError, setPasswordError] = useState([])

  function onSubmit(e) {
    e.preventDefault()
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className={`input`}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {emailErrors.length > 0 && (
          <div className="msg">{emailErrors.join(",")}</div>
        )}
      </div>
      <div className={`form-group ${passwordError.length > 0 ? "error" : ""}`}>
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          className="input"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}
