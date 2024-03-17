import { useEffect } from "react";
import { useState } from "react";
import Blogdata from "../BlogShow/Blogdata";


const Blogs = () => {
  const [blogs,setBlogs]=useState([]);

useEffect(()=>{
    fetch('blog.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data));
},[])


    return (
        <div className="w-2/3">
         <h1 className="text-3xl">Blogs : {blogs.length}</h1>
         {
            blogs.map(count=><Blogdata key={Blogdata.id} blogData={count}></Blogdata>)
         }
        </div>
    );
};

export default Blogs;