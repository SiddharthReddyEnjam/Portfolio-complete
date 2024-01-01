import { useState, useEffect } from 'react';
import Loading from '../animations/Loading';

import axios from 'axios';
import Blogpost from './Blogpost';

import '../styles/blog.css';

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [maintenance, setMaintenance] = useState(false);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5002/blog');
        setLoading(false);
        setMaintenance(false);
        setPosts(res.data);
      } catch (err) {
        setLoading(true);
        setMaintenance(true);
      }
    };
    fetchAllPosts();
  }, []);

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
