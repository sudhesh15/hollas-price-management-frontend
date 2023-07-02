import {Link} from "react-router-dom";
import home from '../../src/images/home.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Post({_id,productName,productPrice}) {
  console.log("productName", productName)
  return (
    <>
    <img src={home}></img>
    </>
  );
}