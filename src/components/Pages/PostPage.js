import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {formatISO9075} from "date-fns";
import {UserContext} from "../../../src/UserContext";
import {Link} from 'react-router-dom';
import {BASE_URL} from "../../url";

export default function PostPage() {
  const [postInfo,setPostInfo] = useState(null);
  const {userInfo} = useContext(UserContext);
  const {id} = useParams();
  useEffect(() => {
    fetch(`${BASE_URL}/post/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo);
        });
      });
  }, []);

  if (!postInfo) return '';

  console.log("postInfo", postInfo)

  return (
    <div className="post-page">
      <h1>{postInfo.productName}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">by @{postInfo.author.firstName + " " +postInfo.author.lastName}</div>
    </div>
  );
}