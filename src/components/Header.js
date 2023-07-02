import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import 'font-awesome/css/font-awesome.min.css';
import { BASE_URL } from "../url";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch(`${BASE_URL}/profile`, {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch(`${BASE_URL}/logout`, {
      credentials: 'include',
      method: 'POST',
    })
      .then(() => {
        setUserInfo(null);
        window.location.reload();
      })
      .catch(error => {
        console.error('Logout error:', error);
      });
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/home" className="logo"><span className="fontColor">H</span>OLLA'S TV CENTER</Link>
      <nav>
        {username && (
          <>
            <button className='addPrdBtn'><Link to="/create">ADD PRODUCT</Link></button>
            <button><a onClick={logout} className="logout">LOGOUT</a></button>
          </>
        )}
        {!username && (
          <>
            <button><Link to="/login">LOGIN</Link></button>
          </>
        )}
      </nav>
    </header>
  );
}
