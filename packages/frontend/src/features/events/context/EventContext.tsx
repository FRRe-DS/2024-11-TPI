// src/context/EventContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getEventos, createEvento, deleteEvento } from '../../../services/EventService.ts';

// Define la estructura del contexto
interface EventContextType {
    eventos: any[];
    addEvent: (name: string) => Promise<void>;
    removeEvent: (id: string) => Promise<void>;
}

// Inicializa el contexto con un valor por defecto
const EventContext = createContext<EventContextType | undefined>(undefined);

// Custom hook para usar el contexto
export const useEventContext = () => {
    const context = useContext(EventContext);
    if (!context) {
        throw new Error('useEventContext debe ser usado dentro de un EventProvider');
    }
    return context;
};

// Define el tipo para las propiedades del proveedor (children)
interface EventProviderProps {
    children: ReactNode;
}

export const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
    const [eventos, setEventos] = useState<any[]>([]);

    useEffect(() => {
        const fetchEventos = async () => {
            const data = await getEventos();
            setEventos(data);
        };
        fetchEventos();
    }, []);

    const addEvent = async (name: string) => {
        await createEvento({ name });
        const data = await getEventos();
        setEventos(data);
    };

    const removeEvent = async (id: string) => {
        await deleteEvento(id);
        const data = await getEventos();
        setEventos(data);
    };

    return (
        <EventContext.Provider value={{ eventos, addEvent, removeEvent }}>
            {children}
        </EventContext.Provider>
    );
};