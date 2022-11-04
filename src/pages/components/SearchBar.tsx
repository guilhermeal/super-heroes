import { useEffect, useState } from "react";
import './styles/searchBar.css';

interface SearchBarProps {
    dataSearch: any;
}

export function SearchBar({ dataSearch }: SearchBarProps) {

    // const handleSearch

    return (
        <div
            style={{
                width: '95%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
            }}
        >
            <input 
                type="text" 
                placeholder="Search heroes..." 
                onChange={event => dataSearch(event.target.value)}
                required
                autoFocus={true}
            />
        </div>
    )
    
}