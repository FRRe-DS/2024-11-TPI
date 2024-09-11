import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Patron from "./pages/Patron.tsx";
import LAE from "./pages/LAE.tsx";
import Editions from "./pages/Editions.tsx";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Activities" element={<Activities />} />
                <Route path="/Patron" element={<Patron />} />
                <Route path="/Last Editions" element={<Editions />} />
                <Route path="/LAE" element={<LAE />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;