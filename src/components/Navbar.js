import { Link } from 'react-router-dom'
import useFetch from './useFetch.js'

const Navbar = () => {
  useFetch()
  return (
    <nav className="navbar">
      <h1>Valente Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
