import { Link } from 'react-router-dom';

const NavbarLinks = () => {
    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/Events" className="hover:underline">Events</Link></li>
                <li><Link to="/Patron" className="hover:underline">Patron</Link></li>
                <li><Link to="/Editions" className="hover:underline">Other Editions</Link></li>
                <li><Link to="/LAE" className="hover:underline">LAE</Link></li>
                <li><Link to="/Login" className="hover:underline">Login</Link></li>
            </ul>
        </div>
    );
}

export default NavbarLinks;
