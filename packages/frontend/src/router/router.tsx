// Importaciones necesarias de React y React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importación de las páginas y componentes necesarios para las rutas
import Home from '../features/home/Home.tsx';
import Events from '../features/events/Events.tsx';
import AdminPage from '../features/admin/AdminPage.tsx';
import ProtectedRoute from './ProtectedRoute.tsx'; // Componente para protección de rutas
//import EventDetail from '../features/events/components/EventDetail.tsx';
//import VotingEventList from '../features/voting/components/VotingEventList.tsx';
import VotacionQRCodeWrapper from '../features/voting/QRCode/VotacionQRCodeWrapper.tsx';
import Sculptures from "../features/sculptures/Sculptures.tsx";
import Sculptors from "../features/sculptors/Sculptors.tsx";
import LoginPage from "../features/auth/pages/AuthPage.tsx";
import Ranking from "../features/ranking/Ranking.tsx";
import VotingPage from "../features/voting/VotingPage.tsx";

// Componente que maneja las rutas de la aplicación
function AppRouter() {
    return (
        <Router> {/* Configura el Router para manejar las rutas */}
            <Routes> {/* Define las rutas de la aplicación */}
                {/* Ruta principal (home) */}
                <Route path="/" element={<Home />} />

                {/* Ruta para la lista de eventos */}
                <Route path="/eventos" element={<Events />} />

                {/* Ruta para la lista de esculturas */}
                <Route path="/esculturas" element={<Sculptures />} />

                {/* Ruta para la lista de escultores */}
                <Route path="/escultores" element={<Sculptors />} />

                {/* Ruta para la página de login */}
                <Route path="/login" element={<LoginPage />} />

                {/* Ruta protegida que solo los administradores pueden acceder */}
                <Route
                    path="/adminpage"
                    element={
                        <ProtectedRoute requiredRole="admin">
                            <AdminPage />
                        </ProtectedRoute>
                    }
                />

                {/* NO SE USA CREO Ruta para ver los detalles de un evento */}
                {/*<Route path="/events/:id" element={<EventDetail />} />*/}

                {/* NO SE USA Ruta para la página de votación de un escultor */}
                {/*<Route path="/votacion/:eventoId" element={<VotingPage />} />*/}

                {/* VA A USARSE PARA ESCULTORES QR Ruta para el QR de votación de una escultura */}
                <Route path="/codigo-qr/:esculturaID" element={<VotacionQRCodeWrapper />} />

                {/* Ruta para listar los eventos de votación */}
                <Route path="/votacion-escultura/:QrCode/:esculturaId" element={<VotingPage />} />

                {/* Ruta para ver el ranking de escultores */}
                <Route path="/ranking" element={<Ranking />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
