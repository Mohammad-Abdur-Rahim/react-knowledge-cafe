
import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/Blog/Blogs'
import Bookmark from './component/Bookmark/Bookmark'
import { useState } from 'react'
function App() {
const [bookMark,setBookMark]=useState([]);
const [reading,setReading]=useState(0);

const handleAddToBookMark=(blog)=>{
 const newBookMark=[...bookMark,blog];
 setBookMark(newBookMark);
}

  return (
 
      
<div className='max-w-screen-2xl mx-auto'>
<Header></Header>
<div className='md:flex'>
<Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>

<Bookmark bookMark={bookMark}></Bookmark>

</div>
</div>
    
  
  )
}

export default App
