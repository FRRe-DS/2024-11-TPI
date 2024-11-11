import { Link } from 'react-router-dom';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
    return (
        <>
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out shadow-lg`}>
                <button onClick={toggleSidebar} className="absolute top-4 right-4 text-gray-400 hover:text-teal-400 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col items-center mt-12 space-y-4">
                    <Link to="/" className="text-xl font-semibold text-gray-300 hover:text-teal-400 transition-colors duration-200" onClick={toggleSidebar}>Home</Link>
                    <Link to="/Events" className="text-xl font-semibold text-gray-300 hover:text-teal-400 transition-colors duration-200" onClick={toggleSidebar}>Events</Link>
                    <Link to="/Patron" className="text-xl font-semibold text-gray-300 hover:text-teal-400 transition-colors duration-200" onClick={toggleSidebar}>Patron</Link>
                    <Link to="/Editions" className="text-xl font-semibold text-gray-300 hover:text-teal-400 transition-colors duration-200" onClick={toggleSidebar}>Other Editions</Link>
                </div>
            </div>

            {/* Overlay oscuro para cerrar el sidebar */}
            {isOpen && <div onClick={toggleSidebar} className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300"></div>}
        </>
    );
}

export default Sidebar;
