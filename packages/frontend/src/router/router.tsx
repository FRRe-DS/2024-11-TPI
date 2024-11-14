import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import Events from '../features/events/Events.tsx'; // Asegúrate de que este sea el componente que lista los eventos
import Patron from "../pages/Patron.tsx";
import Editions from "../pages/Editions.tsx";
import LoginPage from '../features/auth/pages/LoginPage.tsx';
import AdminPage from '../features/admin/page/AdminPage.tsx';
import VotingPage from '../features/voting/VotingPage.tsx';
import ProtectedRoute from './ProtectedRoute.tsx';
import Registerpage from '../features/auth/pages/registerpage.tsx';
import EventDetail from '../features/events/components/EventDetail.tsx';
import VotacionPage from "../features/voting/VotingPage.tsx";
import VotacionQRCodeWrapper from "../features/voting/VotacionQRCodeWrapper.tsx"; // Agrega el componente para ver el detalle de un evento

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} /> {/* Este debe ser el listado de eventos */}
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
                {/* Ruta para ver los detalles de un evento */}
                <Route path="/events/:id" element={<EventDetail />} />
                <Route path="/votacion/:eventoId" element={<VotacionPage />} />
                <Route path="/codigo-qr/:eventoId" element={<VotacionQRCodeWrapper />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;