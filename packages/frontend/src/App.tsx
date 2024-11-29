import AppRouter from './router/router.tsx';
import { EventProvider } from './features/events/context/EventContext';

function App() {
    return (
        <EventProvider>
            <main className="App min-h-screen flex flex-col">
                <AppRouter />
            </main>
        </EventProvider>
    );
}

export default App;