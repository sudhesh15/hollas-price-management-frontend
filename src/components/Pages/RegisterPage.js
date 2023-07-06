import { useState } from "react";
import {BASE_URL} from "../../url";

function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [username, setUserName] = useState('');
  const [password, setpassword] = useState('');

  async function register(ev){
    ev.preventDefault();
    const response = await fetch(`${BASE_URL}/register`,{
      method: 'POST',
      body : JSON.stringify({firstName, lastName, dateOfBirth, username, password}),
      headers: {'Content-type': 'application/JSON'}
    })
    if(response.status === 200){
      alert("Registration Successful !");
    } else{
      alert("Registration failed ! Try again Later");
    }
  }

  return (
    <form className="register-page" onSubmit={register}>
      <div className="form">
        <h2 style={{color: "#5f5f5f"}}>REGISTER</h2>
        <input type="text" placeholder="FIRST NAME" className="firstName" value={firstName} onChange={ev => setFirstName(ev.target.value)} required/>
        <input type="text" placeholder="LAST NAME" className="lastName" value={lastName} onChange={ev => setLastName(ev.target.value)} required/>
        <input type="text" placeholder="DATE OF BIRTH" className="dateOfBirth" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} value={dateOfBirth} onChange={ev => setDateOfBirth(ev.target.value)} required/>
        <input type="text" placeholder="USER NAME" className="username" value={username} onChange={ev => setUserName(ev.target.value)} required/>
        <input type="password" placeholder="PASSWORD" className="password" value={password} onChange={ev => setpassword(ev.target.value)} required/>
        <button>Register</button>
      </div>
    </form>
  )
}

export default RegisterPage