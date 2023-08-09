
import { useEffect, useSelector } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBlog } from './../store/blog/blogAction';


const UseFetch = ( url, id) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    const blogs = useSelector(state => state.blogs.list)
    const dispath = useDispatch();

    useEffect(() => {
        if (id && blogs.length) {                   // SET GLOBAL STATE DATA HIỂN THỊ NGAY RA MÀN HÌNH TRONG REDUX
            const blog = blogs.find(item => item.id === Number(id));
            setData(blog);
            setIsLoading(false);
        }
        else if (blogs.length) {
            setData(blogs);
            setIsLoading(false)
        } else {
            (async () => {
                try {
                    setIsLoading(true)
                    const res = await fetch(url)
                    const { data, status } = await res.json()
                    if (status === 200) {
                      setData(data)
                      setIsLoading(false)
                      dispath(setBlog(data))            // GỬI DATA QUA BLOG ACTION
                    }         
                } catch (error) {
                    setError(true)
                    setIsLoading(false)
                }
            })() 
        }
    },[])

    return {data, isLoading, error}
}

export default UseFetch;