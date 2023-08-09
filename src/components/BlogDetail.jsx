import React from 'react';
import {useParams, useNavigate} from "react-router-dom";
import UseFetch from '../hooks/UseEffect';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../store/blog/blogAction';
import Button from './Button';

const BlogDetail = () => {
    const {id} = useParams();
    const history =  useNavigate();
    const dispatch = useDispatch();
    const {data:blog, isLoading, error} = UseFetch(`https:localhost:3000/blogs/${id}`, id);

    const handleDelete = () => {
        (async () => {
            const res = await fetch(`https:localhost:3000/blogs/${id}`, 
                {
                    method: 'DELETE',
                });
            const {status} = await res.json();
            if (status === 200) {
                dispatch(deleteBlog(id))
                history('/')
            }    
        })()
    }

    
    return (
        <div>
            {isLoading && (<div> Data is fetching...</div>)}
            {error && (<div> Server Internal Error</div>)}
            
            {blog && (
            <div>
                <h1> {blog?.title}</h1>
                <h1> {blog?.author}</h1>
                <h1> {blog?.body}</h1>
            </div>
           )}

           {/* <button onClick={handleDelete}>Delete</button> */}
           <Button onClick={handleDelete} text="Delete"></Button>
        </div>
    );
};

export default BlogDetail;