
import NavbarButton from "../../../components/NavbarButton.tsx";

const NavbarLinks = () => {
    return (
        <div className="flex items-center justify-center">
            <ul className="flex gap-10">
                <li><NavbarButton to="/" label="Home" /></li>
                <li><NavbarButton to="/Events" label="Events" /></li>
                <li><NavbarButton to="/Patron" label="Patron" /></li>
                <li><NavbarButton to="/Editions" label="Other Editions" /></li>
                <li><NavbarButton to="/VotingPage" label="Voting Page" /></li>
            </ul>
        </div>
    );
}

export default NavbarLinks;
