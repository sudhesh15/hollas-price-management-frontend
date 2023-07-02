import { Outlet } from "react-router-dom"
import Header from "./Header";
import Footer from "./Pages/Footer";

function Layout() {
  return (
    <>
    <main>  
      <Header/>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout