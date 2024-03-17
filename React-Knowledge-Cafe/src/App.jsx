
import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/Blog/Blogs'
import Bookmark from './component/Bookmark/Bookmark'
import { useState } from 'react'
function App() {
const [bookMark,setBookMark]=useState([]);

  return (
 
      
<div className='max-w-screen-2xl mx-auto'>
<Header></Header>
<div className='md:flex'>
<Blogs></Blogs>

<Bookmark></Bookmark>
</div>
</div>
    
  
  )
}

export default App
