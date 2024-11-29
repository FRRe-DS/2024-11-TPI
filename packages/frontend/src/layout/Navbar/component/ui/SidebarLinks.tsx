import NavbarButton from "./NavbarButton.tsx";

const SidebarLinks = () => {
    return (
        <div className="flex flex-col items-center space-y-6 mt-12">
            <ul className="flex flex-col gap-6">
                <li><NavbarButton to="/" label="Home" /></li>
                <li><NavbarButton to="/Eventos" label="Eventos" /></li>
                <li><NavbarButton to="/Esculturas" label="Esculturas" /></li>
                <li><NavbarButton to="/Escultores" label="Escultores" /></li>
                <li><NavbarButton to="/Patron" label="Patron" /></li>
                <li><NavbarButton to="/Editions" label="Other Editions" /></li>
            </ul>
        </div>
    );
}

export default SidebarLinks;
