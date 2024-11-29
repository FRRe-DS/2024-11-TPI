import React, { useState } from 'react';

interface SearchBoxProps {
    placeholder?: string;
    onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ placeholder = "Search...", onSearch }) => {
    const [query, setQuery] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        onSearch(newQuery);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="border rounded-md p-2 w-full"
            />
        </div>
    );
};

export default SearchBox;
