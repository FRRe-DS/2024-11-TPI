import { Link } from 'react-router-dom';
import SearchBox from '../ui/SearchBox.tsx';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
    return (
        <>
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <button onClick={toggleSidebar} className="absolute top-4 right-4 text-white focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col items-center mt-12">
                    <Link to="/" className="text-white text-xl mb-4 hover:underline" onClick={toggleSidebar}>Home</Link>
                    <Link to="/Events" className="text-white text-xl mb-4 hover:underline"
                          onClick={toggleSidebar}>Events</Link>
                    <Link to="/Patron" className="text-white text-xl mb-4 hover:underline"
                          onClick={toggleSidebar}>Patron</Link>
                    <Link to="/Editions" className="text-white text-xl mb-4 hover:underline"
                          onClick={toggleSidebar}>Other Editions</Link>
                    <Link to="/LAE" className="text-white text-xl mb-4 hover:underline"
                          onClick={toggleSidebar}>LAE</Link>
                </div>

                <div className="mt-6 px-4">
                    <SearchBox placeholder="Search events..."
                               onSearch={(query) => console.log("Search query:", query)}/>
                </div>
            </div>

            {/* Overlay oscuro para cerrar el sidebar */}
            {isOpen && <div onClick={toggleSidebar} className="fixed inset-0 bg-black opacity-50 z-40"></div>}
        </>
    );
}

export default Sidebar;
