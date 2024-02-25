import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation ,useNavigate } from "react-router-dom";
import moment from "moment";
const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [category, setCategory] = useState(state?.category || "");
  const navigate = useNavigate();
  const upload = async() => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload",formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  const handleClick = async(e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state? await axios.put(`/posts/${state.id}`,{title,description:value,img:file? imgUrl:"",category}): await axios.post("/posts/",{
        title,description:value,img:file? imgUrl:"",category,
      date:moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      });
    } catch (error) {
      console.log(error);
    }
    navigate("/")
  };
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" onChange={e=>setTitle(e.target.value)} value={title}/>
        <div className="editorContainer">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="editor"
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status : </b> Draft
          </span>
          <span>
            <b>Visibility : </b> Public
          </span>
          <input type="file" id="file" style={{ display: "none" }} onChange={e=>setFile(e.target.files[0])}/>
          <label htmlFor="file" className="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a Draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" onChange={e=>setCategory(e.target.value)} checked={category === "art"}/>
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="science" id="science" onChange={e=>setCategory(e.target.value)} checked={category === "science"}/>
            <label htmlFor="art">Science</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="technology" id="technology" onChange={e=>setCategory(e.target.value)} checked={category === "technology"}/>
            <label htmlFor="art">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="cinema" id="cinema" onChange={e=>setCategory(e.target.value)} checked={category === "cinema"}/>
            <label htmlFor="art">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="design" id="design" onChange={e=>setCategory(e.target.value)} checked={category === "design"}/>
            <label htmlFor="art">Design</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="food" id="food" onChange={e=>setCategory(e.target.value)} checked={category === "food"}/>
            <label htmlFor="art">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
