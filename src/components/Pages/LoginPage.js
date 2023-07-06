import { useState } from "react";
import {BASE_URL} from "../../url";
console.log("BASE_URL", BASE_URL)

function LoginPage() {
  const [username, setUserName] = useState('');
  const [password, setpassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  

  async function login(ev){
    ev.preventDefault();
    if(username && password){
      const response = await fetch(`${BASE_URL}/login`,{
        method: 'POST',
        body : JSON.stringify({username, password}),
        headers: {'Content-type': 'application/JSON'},
        credentials: 'include'
      })

      if (response.ok) {
        response.json().then(userInfo => {
          localStorage.setItem('isLoggedIn', true);
          setRedirect(true);
        });
      } else{
        alert("Wrong Credentials !")
      }
    }
  }

  if(redirect){
    window.location.href = "/home";
  }

  return (
    <form className="login-page"  onSubmit={login}>
      <div className="form">
        <h2 style={{color: "#5f5f5f"}}>LOGIN</h2>
        <input type="text" placeholder="USERNAME" className="username" value={username} onChange={ev => setUserName(ev.target.value)} required/>
        <input type="password" placeholder="PASSWORD" className="password" value={password} onChange={ev => setpassword(ev.target.value)} required/>
        <button>Login</button>
      </div>
    </form>
  )
}

export default LoginPage