import React, { useState } from "react";
import { Link , useLocation } from "react-router-dom";
import axios from "axios";
const Home = () => {
    // const posts = [
    //       {
    //         id: 1,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //         img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //       },
    //       {
    //         id: 2,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //         img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //       },
    //       {
    //         id: 3,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //         img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //       },
    //       {
    //         id: 4,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //         img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //       },
    //     ];
    const [posts, setPosts] = useState([]);

    const category = useLocation().search;
    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await axios.get(`/posts${category}`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getPosts();
    }, [category]);

    const getText = (html) =>{
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.body.textContent || "";
    }
    return (
        <div className="home">
            <div className="posts">
                {posts.map(post =>(
                    <div className="post" key={post.id}>
                        <div className="img">
                        <img src={`../../public/images/`} alt="" /> 
                        </div>
                        <div className="content">
                        <Link to={`/post/${post.id}`} className="link">
                            <h1>{post.title}</h1>
                        </Link>
                            <p>{getText(post.desc)}</p>
                            <button>Read more</button>
                    </div>
                    </div>
                
                ))}
            </div>
        </div>
    )

};

export default Home;
