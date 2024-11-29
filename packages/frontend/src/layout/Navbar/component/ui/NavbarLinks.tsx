import NavbarButton from "./NavbarButton.tsx";

const NavbarLinks = () => {
    return (
        <div className="flex items-center justify-center">
            <ul className="flex gap-10">
                <li><NavbarButton to="/" label="Home"/></li>
                <li><NavbarButton to="/Eventos" label="Eventos"/></li>
                <li><NavbarButton to="/Esculturas" label="Esculturas"/></li>
                <li><NavbarButton to="/EScultores" label="Escultores"/></li>
                <li><NavbarButton to="/Patron" label="Patron"/></li>
                <li><NavbarButton to="/Editions" label="Other Editions"/></li>
            </ul>
        </div>
    );
}

export default NavbarLinks;
