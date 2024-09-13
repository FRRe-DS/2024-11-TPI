import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Patron from "./pages/Patron";
import LAE from "./pages/LAE";
import Editions from "./pages/Editions";
import LoginPage from './pages/LoginPage';  // Página de login
import AdminPage from './pages/AdminPage';  // Página de administración
import VotingPage from './pages/VotingPage'; // Página de votación para usuarios normales
import ForbiddenPage from './pages/ForbiddenPage'; // Página de acceso prohibido
import ProtectedRoute from './components/ProtectedRoute'; // Ruta protegida

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/patron" element={<Patron />} />
                <Route path="/last-editions" element={<Editions />} />
                <Route path="/lae" element={<LAE />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute requiredRole="admin">
                            <AdminPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/voting"
                    element={
                        <ProtectedRoute requiredRole="user">
                            <VotingPage />
                        </ProtectedRoute>
                    }
                />
                <Route path="/forbidden" element={<ForbiddenPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
