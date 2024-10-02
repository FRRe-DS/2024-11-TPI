import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events.tsx';
import Patron from "./pages/Patron";
import LAE from "./pages/LAE";
import Editions from "./pages/Editions";
import LoginPage from './pages/LoginPage';  // Página de login
import AdminPage from './components/admin/page/AdminPage.tsx';  // Página de administración
import VotingPage from './pages/VotingPage'; // Página de votación para usuarios normales
import ProtectedRoute from './ProtectedRoute.tsx';
import ForbiddenPage from './pages/ForbiddenPage.tsx';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/patron" element={<Patron />} />
                <Route path="/editions" element={<Editions />} />
                <Route path="/lae" element={<LAE />} />
                <Route path="/votingpage" element={<VotingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forbiddenpage" element={<ForbiddenPage />} />
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
