import AppRouter from './router/router.tsx';
import { EventProvider } from './features/events/context/EventContext';

function App() {
    return (
        <EventProvider>
            <div className="App min-h-screen flex flex-col">
                <AppRouter />
            </div>
        </EventProvider>
    );
}

export default App;
