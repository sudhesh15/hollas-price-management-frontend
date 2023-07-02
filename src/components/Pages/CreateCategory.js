import {useState} from "react";
import {Navigate} from "react-router-dom";
import {BASE_URL} from "../../url";

function CreateCategory() {

  const [categoryName,setCategoryName] = useState('');
  const [redirect, setRedirect] = useState(false);
  async function createNewCategory(ev) {
    const data = new FormData();
    data.set('categoryName', categoryName);
    ev.preventDefault();
    const response = await fetch(`${BASE_URL}/createCategory`, {
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
    return <Navigate to={'/'} />
  }

  return (
    <form onSubmit={createNewCategory}>
    <div className="postForm">
      <h2 style={{color: "#5f5f5f"}}>ADD NEW CATEGORY</h2>
      <hr/>
      <input type="categoryName" placeholder={'CATEGORY NAME'} value={categoryName} onChange={ev => setCategoryName(ev.target.value)} required/>
      <button className="createPost" style={{marginTop:'5px'}}>ADD CATEGORY</button>
      </div>
    </form>
  )
}

export default CreateCategory