import React,{useContext, useState} from 'react'
import Edit from "../images/edit.png"
import Delete from "../images/delete.png"
import { Link,useLocation,useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import moment from "moment"
import { AuthContext } from '../context/authContext'
const Single = () => {
  const [post, setPost] = useState([]);

    const location  = useLocation();
    const navigate = useNavigate();
    const postId = location.pathname.split("/")[2];
    const {currentUser} = useContext(AuthContext);
    const handleDelete = async () => {
      try{
        await axios.delete(`/posts/${postId}`);
        navigate("/")
      }
      catch(err){
        console.log(err)
      }
    };
    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await axios.post(`/posts/${postId}`);
                setPost(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getPosts();
    }, [postId]);
    const getText = (html) =>{
      const doc = new DOMParser().parseFromString(html, "text/html")
      return doc.body.textContent
    }
  return (
    <div className='single'>
      <div className="content">
        { post.userImg && <img src={post?.img} alt="" />}
        <div className='user'>
          <img src={`../../public/images`} alt="" />
        <div className="info">
          <span>{post.username}</span>
          <p>Posted {moment(post.date).fromNow()}</p>
        </div>
        { currentUser.username === post.username &&<div className="edit">
          <Link to={`/write?edit=2`} state={post}>
          <img src={Edit} alt="" />
          </Link>
          <img src={Delete} alt="" onClick={handleDelete}/>
        </div>}
        </div>
        <h1>{post.title}</h1>
        {getText(post.desc)}
      </div>
      <Menu cat={post.category}/>
    </div>
  )
}

export default Single