import { useState } from 'react';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';

const Blogpost = ({ post }) => {
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className='blog-post'>
      <div className='title-date'>
        <h1>{post.title}</h1>
        <p>
          <strong>Date Posted:</strong> {post.date}
        </p>
      </div>
      <div className='blog-desc'>
        <p className='blog-content'>{post.content}</p>
        <div className='posts-btn ' onClick={handleLike}>
          {like === true ? (
            <AiFillLike className='post-btn post-btn-fill' />
          ) : (
            <AiOutlineLike className='post-btn' />
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogpost;
