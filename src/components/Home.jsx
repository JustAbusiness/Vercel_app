import React from 'react'
import { useState, useEffect, useRef,  } from 'react'
import BlogList from './BlogList'
import UseEffect from './../UseEffect';
import {useSelector, useDispatch} from "react-redux"
import { incrementCounter } from '../store/counter/counterAction';

const Home = () => {
  const {error, isLoading, data:blogss} = UseEffect('http://localhost:3000/blogs')
  const blogList  = useSelector(state => state.blogs.list)
  console.log(blogList);
  // const count = useSelector(state => state.counter.value)       // counter lay tu rootReducer
  
  const [blogs, setBlog] = useState([
    { title: 'Running Man', body: 'Lorem....', author: 'Wibu', id: 1 },
    { title: 'Running Women', body: 'Loru....', author: 'Otaku', id: 2 },
    { title: 'Running Children', body: 'Lora....', author: 'Asshole', id: 3 }
  ])

  // const color = useRef(null);

  // const hnadleChangcolor = () => {
  //     color.current.className = 'yellow'
  // }

  const handleDeleteBlog = (id, title) => {
    setBlog(blogs.filter(item => item.id !== id))
  }

  const [name, setName] = useState(false)
  // const dispatch = useDispatch()


  return (
    <div>
      {isLoading && <div> Please waiting for few minutes</div>}
      {error && <div> There is something wrong with the server</div>}

      <h1> Home Page </h1>
      {name && <BlogList handleDeleteBlog={handleDeleteBlog} blogs={blogs} />}
      {/* <BlogList blogs={blogs.filter(item => item.author ===
                'Wibu'
            )}></BlogList> */}
      <button onClick={() => setName(!name)}>Show Blog List</button>

      {/* <button onClick={() => dispatch(incrementCounter())}> INCREAMENT</button>
       <div>Counter : {count}</div>      */}
    </div>
  )
}

export default Home
