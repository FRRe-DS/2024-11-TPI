import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import Events from '../features/events/Events.tsx';
import Patron from "../pages/Patron.tsx";
import Editions from "../pages/Editions.tsx";
import LoginPage from '../features/auth/pages/LoginPage.tsx';
import AdminPage from '../features/admin/page/AdminPage.tsx';
import VotingPage from '../features/voting/VotingPage.tsx';
import ProtectedRoute from './ProtectedRoute.tsx';
import Registerpage from '../features/auth/pages/registerpage.tsx' ;


function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/patron" element={<Patron />} />
                <Route path="/editions" element={<Editions />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/votingpage" element={<VotingPage />} />
                <Route path="/Registrarse" element={<Registerpage />} />
                <Route
                    path="/adminpage"
                    element={
                        <ProtectedRoute requiredRole="admin">
                            <AdminPage />
                        </ProtectedRoute>
                    }
                />

            </Routes>
        </Router>
    );
}

export default AppRouter;
