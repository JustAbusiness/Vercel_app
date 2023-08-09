import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { createBlog } from '../store/blog/blogAction';


const Create = () => {
  const [ blog, setBlog ] = useState({});
  const history = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!blog.title || !blog.body || !blog.author) return;
   
    ( async () => {
      const body  = {id: Math.random(), ...blog};
      const response = await fetch("https://localhost:3000/blogs", {
          method: "POST",
          header: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
      })

      const {data, status} = await response.json();
      if (status === 200) {
        console.log(data);
        dispatch(createBlog(data))
        history('/');         // CHUYỂN HƯỚNG QUA ĐÂU ĐÓ
      } 

    })();
  }


  return (
    <div className='create'>
      <h1>Add New Blog For 2HKT</h1>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type='text'
          value={blog.title || ''}
          onChange={e => setBlog({ ...blog,'title':e.target.value })}
        />
        <label> Body </label>
        <textarea
          type='text'
          value={blog.body || ''}
          onChange={ e => setBlog({ ...blog,'body':e.target.value })}
        />
        <label>Author</label>
        <select value={blog.author || ''} onChange={ e => setBlog({ ...blog,'author':e.target.value })}>
          <option value='' >Choose Author</option>
          <option value='Wibu'>Wibu</option>
          <option value='Otaku'>Otaku</option>
        </select>
        <button
          style={{
            color: 'white',
            background: 'green',
            borderRadius: 8,
            marginTop: 20
          }}
          type='submit'
          disabled={!blog.title || !blog.body || !blog.author}
        >
            Add Blog
        </button>
      </form>
    </div>
  )
}

export default Create
