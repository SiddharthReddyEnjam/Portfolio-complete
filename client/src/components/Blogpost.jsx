import { useState, useEffect } from 'react';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import PropTypes from 'prop-types';

const Blogpost = ({ post }) => {
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };

  const originalDateString = post.date;
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const formatDate = (dateString) => {
      const dateObject = new Date(dateString);
      const now = new Date();
      const timeDifference = now - dateObject;

      // Convert milliseconds to seconds, minutes, hours, days, and months
      const secondsDifference = Math.floor(timeDifference / 1000);
      const minutesDifference = Math.floor(secondsDifference / 60);
      const hoursDifference = Math.floor(minutesDifference / 60);
      const daysDifference = Math.floor(hoursDifference / 24);
      const monthsDifference = Math.floor(daysDifference / 30);

      // Display time if less than 2 days
      if (daysDifference < 2) {
        return `${hoursDifference} hours ago`;
      }
      // Display weeks if less than or equal to 2 weeks
      else if (daysDifference <= 14) {
        const weeks = Math.floor(daysDifference / 7);
        return `${weeks === 1 ? 'a week' : `${weeks} weeks`} ago`;
      }
      // Display months if less than or equal to 2 months
      else if (monthsDifference <= 2) {
        return `${
          monthsDifference === 1 ? 'a month' : `${monthsDifference} months`
        } ago`;
      }
      // Display the actual date
      else {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return dateObject.toLocaleDateString('en-US', options);
      }
    };

    setFormattedDate(formatDate(originalDateString));
  }, [originalDateString]);

  return (
    <div className='blog-post'>
      <div className='title-date'>
        <h1>{post.title}</h1>
        <p>
          <strong>Date Posted:</strong> {formattedDate}
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

Blogpost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Blogpost;
