import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const token = localStorage.getItem('token'); // Check if token exists

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token on logout
    window.location.reload(); // Optionally, reload the page to reflect changes
  };

  return (
    <div className='absolute flex flex-col gap-2 end-24 top-10 bg-white shadow-lg rounded-xl px-5 py-4 w-[200px] text-sm'>
      {token ? (
        <>
          <Link to='/account' className='hover:text-themeColor transition-all ease-in-out duration-[0.3s]'>
            <i className="fa-solid fa-user mr-2"></i> My Account
          </Link>
          <button onClick={handleLogout} className='hover:text-themeColor transition-all ease-in-out duration-[0.3s] text-left'>
            <i className="fa-solid fa-sign-out-alt mr-2"></i> Logout
          </button>
        </>
      ) : (
        <>
          <Link to='/login' className='hover:text-themeColor transition-all ease-in-out duration-[0.3s]'>
            <i className="fa-solid fa-lock mr-2"></i> Log In
          </Link>
          <Link to='/register' className='hover:text-themeColor transition-all ease-in-out duration-[0.3s]'>
            <i className="fa-solid fa-user mr-2"></i> Create Account
          </Link>
        </>
      )}
    </div>
  );
};

export default Profile;
