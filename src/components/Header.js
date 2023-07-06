import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import { BASE_URL } from "../url";

export default function Header() {

  function logout() {
    fetch(`${BASE_URL}/logout`, {
      credentials: 'include',
      method: 'POST',
    })
      .then(() => {
        localStorage.setItem("isLoggedIn",false)
        console.log("localstorage value IN HEADER", localStorage.getItem("isLoggedIn"))
        window.location.reload();
      })
      .catch(error => {
        console.error('Logout error:', error);
      });
  }

  let isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log("isLoggedIn value ===>", isLoggedIn)

  return (
    <header>
    <Link to="/home" className="logo"><span className="fontColor">H</span>OLLA'S TV CENTER</Link>
    <nav>
      {isLoggedIn === "true" ? (
        <>
          <button className='addPrdBtn'><Link to="/create">ADD PRODUCT</Link></button>
          <button><a onClick={logout} className="logout">LOGOUT</a></button>
        </>
      ) : (
        <button><Link to="/login">LOGIN</Link></button>
      )}
    </nav>
  </header>
  );
}
