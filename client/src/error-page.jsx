import { Link, useRouteError } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import './styles/error.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='error-home-'>Go back to the home page..</p>
      <Link to='/' className='link-home-err'>
        <button className='err-btn'>
          Go Back
          <AiOutlineArrowLeft />
        </button>
      </Link>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
