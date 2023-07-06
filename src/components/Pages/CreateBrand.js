import {useState} from "react";
import {Navigate} from "react-router-dom";
import {BASE_URL} from "../../url";

function CreateBrand() {

  const [brandName,setBrandName] = useState('');
  const [redirect, setRedirect] = useState(false);
  async function createNewBrand(ev) {
    const data = new FormData();
    data.set('brandName', brandName);
    ev.preventDefault();
    const response = await fetch(`${BASE_URL}/createBrand`, {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
     setRedirect(true);
    }else{
      alert("You are not Authorized !")
    }
  }

  if (redirect) {
    return <Navigate to={'/brand'} />
  }

  return (
    <form onSubmit={createNewBrand}>
    <div className="postForm">
      <h2 style={{color: "#5f5f5f"}}>ADD NEW BRAND</h2>
      <hr/>
      <input type="brandName" placeholder={'BRAND NAME'} value={brandName} onChange={ev => setBrandName(ev.target.value)} required/>
      <button className="createPost" style={{marginTop:'5px'}}>ADD BRAND</button>
      </div>
    </form>
  )
}

export default CreateBrand