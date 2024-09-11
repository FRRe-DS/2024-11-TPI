import toggle_night from '/src/assets/Navbar/images/night.png';
import toggle_day from '/src/assets/Navbar/images/day.png';
import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Leer el estado de localStorage y/o preferencias del sistema
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (storedTheme === 'dark' || (!storedTheme && prefersDarkMode)) {
            document.body.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.body.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    // Cambiar entre modo oscuro y claro
    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div onClick={toggleDarkMode} className="cursor-pointer">
            <img src={isDarkMode ? toggle_night : toggle_day} alt="Toggle Theme" className="h-10" />
        </div>
    );
}

export default DarkModeToggle;
