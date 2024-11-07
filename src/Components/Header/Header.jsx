import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Assests/xwave-icon.svg";
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  return (
    <div className="px-3 py-2 border-bottom mb-3">
      <div className="container d-flex flex-wrap justify-content-center">
        <form className="col-12 col-lg-auto mb-2 mb-lg-auto me-lg-auto" role="search">
          <img className='img-fluid' src={logo} alt="Logo" />
        </form>
        <div className="text-end">
          <Link to="/" className="btn btn-light me-2" style={{ color: "#1976D2" }}>Home</Link>
          <Link to="/my-jobs" className="btn btn-primary mx-3" style={{ backgroundColor: "#1A1B4B" }}>My Jobs</Link>
          <PersonIcon style={{ fontSize: "40px" }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
