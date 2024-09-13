import AppRouter from './router';
import { EventProvider } from './context/EventContext';

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
