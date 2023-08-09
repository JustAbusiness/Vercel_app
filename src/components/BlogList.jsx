import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useState, useMemo } from 'react'

const BlogList = props => {
  const { blogs, author } = props

  // const onDelete = (id, title) => {
  //     handleDeleteBlog(id, title)
  // }

  const [txtSearch, setTxtSearch] = useState('')
  const searchValueBlog = useMemo(
    () => {
      if (!txtSearch) return blogs
      return (
        blogs.filter(item =>
          item.title.toUppercase().indexOf(txtSearch.toUppercase())
          !== -1) 
      )
    },
    [txtSearch, blogs]
  )

  return (
    <div className='blog-list'>
      <div className='d-flex justify-content-between align-items-center'>
        <h3>
          {author}
        </h3>
        <input
          placeholder='Tìm kiếm bài viết'
          style={{ width: '300px' }}
          type='text'
          value={txtSearch || ''}
          onChange={e => setTxtSearch(e.target.value)}
        />
      </div>

      {searchValueBlog.length > 0 &&
        searchValueBlog.map((blog, index) =>
          <div className='blog-preview' key={index}>
            <h2>
              {blog.title}
            </h2>
            <div>
              {' '}Description: {blog.body}
            </div>
            <h5>
              {' '}Author: {blog.author}
            </h5>
            <NavLink
              to={`/blog/${index}`}
              style={{
                background: 'blue',
                borderRadius: 8,
                padding: 9,
                marginRight: 2,
                textAlign: 'center'
              }}
            >
              {' '}Detail{' '}
            </NavLink>
            {/* <button onClick={() => onDelete(blog.id, blog.title)}> Delete</button> */}
          </div>
        )}
    </div>
  )
}

export default BlogList
