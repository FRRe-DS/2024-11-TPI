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
import VotingEventList from '../features/voting/VotingEventList';
import VotacionQRCodeWrapper from '../features/voting/VotacionQRCodeWrapper';
import Sculptures from "../features/sculptures/Sculptures.tsx";
import Sculptors from "../features/sculptors/Sculptors.tsx";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/eventos" element={<Events />} />
                <Route path="/esculturas" element={<Sculptures />} />
                <Route path="/escultores" element={<Sculptors />} />
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
                <Route path="/votacion/:eventoId" element={<VotingPage />} />
                <Route path="/codigo-qr/:eventoId" element={<VotacionQRCodeWrapper />} />
                <Route path="/votacion-eventos" element={<VotingEventList />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;