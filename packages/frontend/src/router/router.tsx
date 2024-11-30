import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../features/home/Home.tsx';
import Events from '../features/events/Events.tsx';
import AdminPage from '../features/admin/AdminPage.tsx';
import VotingPage from '../features/voting/VotingPage.tsx';
import ProtectedRoute from './ProtectedRoute.tsx';
import EventDetail from '../features/events/EventDetail.tsx';
import VotingEventList from '../features/voting/components/VotingEventList.tsx';
import VotacionQRCodeWrapper from '../features/voting/QRCode/VotacionQRCodeWrapper.tsx';
import Sculptures from "../features/sculptures/Sculptures.tsx";
import Sculptors from "../features/sculptors/Sculptors.tsx";
import LoginPage from "../features/auth/pages/AuthPage.tsx";
import Ranking from "../features/ranking/Ranking.tsx";


function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/eventos" element={<Events />} />
                <Route path="/esculturas" element={<Sculptures />} />
                <Route path="/escultores" element={<Sculptors />} />
                <Route path="/login" element={<LoginPage />} />
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
                <Route path="/ranking" element={<Ranking />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;