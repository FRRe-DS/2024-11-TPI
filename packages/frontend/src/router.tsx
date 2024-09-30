import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events.tsx';
import Patron from "./pages/Patron";
import LAE from "./pages/LAE";
import Editions from "./pages/Editions";
import LoginPage from './pages/LoginPage';  // Página de login
import AdminPage from './components/admin/page/AdminPage.tsx';  // Página de administración
import VotingPage from './pages/VotingPage'; // Página de votación para usuarios normales
import ForbiddenPage from './pages/ForbiddenPage'; // Página de acceso prohibido
import ProtectedRoute from './ProtectedRoute.tsx';
import AdminEvents from "./components/admin/page/EventManagement.tsx"; // Ruta protegida
//import EventList from "./components/admin/event/EventList.tsx";
//import SponsorList from "./components/admin/sponsor/SponsorList.tsx";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/activities" element={<Events />} />
                <Route path="/patron" element={<Patron />} />
                <Route path="/last-editions" element={<Editions />} />
                <Route path="/lae" element={<LAE />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/adminevents" element={<AdminEvents />} />
                <Route path="/adminpage" element={<AdminPage />} />
                <Route path="/voting" element={<VotingPage />} />
                <Route path="/forbidden" element={<ForbiddenPage />} />
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
            </Routes>
        </Router>
    );
}

export default AppRouter;
