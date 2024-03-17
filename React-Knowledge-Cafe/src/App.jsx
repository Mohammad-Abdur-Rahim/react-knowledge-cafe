
import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/Blog/Blogs'
import Bookmark from './component/Bookmark/Bookmark'
function App() {


  return (
    <>
      
<Header></Header>
<div className='md:flex'>
<Blogs></Blogs>
<Bookmark></Bookmark>
</div>
    
    </>
  )
}

export default App
