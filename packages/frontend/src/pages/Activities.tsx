import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from "../components/layout/Hero";
import Navbar from "../components/layout/Navbar.tsx";
import { getEventos, createEvento, updateEvento, deleteEvento } from '../services/EventService';
import CreateActivity from "./CreateActivity.tsx";

const Activities: React.FC = () => {
    const [eventos, setEventos] = useState<any[]>([]);

    useEffect(() => {
        // Obtener eventos al cargar el componente
        const fetchEventos = async () => {
            try {
                const eventosData = await getEventos();
                setEventos(eventosData);
            } catch (error) {
                console.error('Error al obtener eventos:', error);
            }
        };

        fetchEventos();
    }, []);

    const handleCreate = async () => {
        const newEvento = {
            nombre: 'Nuevo Evento',
            fecha: new Date().toISOString().split('T')[0], // Formateo de la fecha
            lugar: 'Nuevo Lugar',
            descripcion: 'Descripción del nuevo evento',
            tematica: 'Temática del evento'
        };
        try {
            const createdEvento = await createEvento(newEvento);
            setEventos([...eventos, createdEvento]);
        } catch (error) {
            console.error('Error al crear evento:', error);
        }
    };

    const handleUpdate = async (id: string) => {
        const updatedEvento = {
            nombre: 'Evento Actualizado',
            fecha: new Date().toISOString().split('T')[0], // Formateo de la fecha
            lugar: 'Lugar Actualizado',
            descripcion: 'Descripción actualizada',
            tematica: 'Temática actualizada'
        };
        try {
            const result = await updateEvento(id, updatedEvento);
            setEventos(eventos.map(evento => evento.id === id ? result : evento));
        } catch (error) {
            console.error('Error al actualizar evento:', error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteEvento(id);
            setEventos(eventos.filter(evento => evento.id !== id));
        } catch (error) {
            console.error('Error al eliminar evento:', error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Hero />
            <Header />
            <CreateActivity />
            <main className="p-4">
                <h1 className="text-2xl font-bold mb-4">Eventos</h1>
                <button onClick={handleCreate} className="bg-blue-500 text-white py-2 px-4 rounded mb-4">Crear Evento</button>
                <ul>
                    {eventos.map(evento => (
                        <li key={evento.id} className="border p-4 mb-2 rounded">
                            <h2 className="text-xl font-semibold">{evento.nombre}</h2>
                            <p>{new Date(evento.fecha).toLocaleDateString()}</p> {/* Formateo de la fecha */}
                            <p>{evento.lugar}</p>
                            <p>{evento.descripcion}</p>
                            <p>{evento.tematica}</p>
                            <button onClick={() => handleUpdate(evento.id)} className="bg-yellow-500 text-white py-1 px-2 rounded mr-2">Actualizar</button>
                            <button onClick={() => handleDelete(evento.id)} className="bg-red-500 text-white py-1 px-2 rounded">Eliminar</button>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </div>
    );
};

export default Activities;
