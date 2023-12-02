// RouteSelector.js
import React, { useState } from 'react';
import '../styles/RouteSelector.css';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const RouteSelector = () => {
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');

    const handleFromChange = (e) => {
        setFromLocation(e.target.value);
    }

    const handleToChange = (e) => {
        setToLocation(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="route-selector" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Where from?" 
                value={fromLocation} 
                onChange={handleFromChange} 
            />
            <input 
                type="text" 
                placeholder="Where to?" 
                value={toLocation} 
                onChange={handleToChange} 
            />
            <button type="submit">
                <TravelExploreIcon />
                </button>
        </form>
    );
}

export default RouteSelector;
