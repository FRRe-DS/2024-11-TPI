import AppRouter from './router/router.tsx';
import { EventProvider } from './features/events/context/EventContext';
import useAuth from './features/auth/hooks/useAuth';
import {useEffect} from "react"; // Importa useAuth

function App() {
    const { fetchUser } = useAuth(); // Usa el hook useAuth

    useEffect(() => {
        fetchUser(); // Obtén el usuario al iniciar la app
    }, [fetchUser]);

    return (
        <EventProvider>
            <div className="App min-h-screen flex flex-col">
                <AppRouter />
            </div>
        </EventProvider>
    );
}


export default App;
