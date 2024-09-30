import SearchBox from '../../ui/SearchBox';

const NavbarSearch = () => {
    const handleSearch = (query: string) => {
        console.log("Search query:", query);
    };

    return (
        <div className="w-1/3">
            <SearchBox placeholder="Search events..." onSearch={handleSearch} />
        </div>
    );
}

export default NavbarSearch;
