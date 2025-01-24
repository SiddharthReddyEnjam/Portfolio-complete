import { useState, useEffect } from 'react';
import Loading from '../animations/Loading';

import axios from 'axios';
import Blogpost from './Blogpost';

import '../styles/blog.css';

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [maintenance, setMaintenance] = useState(false);
  const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || 'http://localhost:5002';

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/blog`);
        setLoading(false);
        setMaintenance(false);
        setPosts(res.data);
      } catch (err) {
        setLoading(true);
        setMaintenance(true);
      }
    };
    fetchAllPosts();
  }, [API_BASE_URL]);

  if (maintenance) {
    return (
      <div className='blog-loading'>
        <p className='blog-maintenance'>
          The website blog is currently under maintenance please check after
          sometime
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className='blog-loading'>
        <Loading />
      </div>
    );
  }

  const dataElements = posts.map((el) => {
    return <Blogpost key={el._id} post={el} />;
  });

  return (
    <div className='blog-main'>
      <h1>Blog</h1>
      <div className='blog-component'>
        <div className='blog'>{dataElements}</div>
      </div>
    </div>
  );
};

export default Blog;
