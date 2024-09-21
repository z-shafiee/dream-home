// src/pages/HomePage.js  
import React, { useState, useEffect } from 'react';  
import SearchForm from '../components/SearchForm';  
import PropertyCard from '../components/PropertyCard';  
import axios from 'axios';  

const HomePage = () => {  
    const [properties, setProperties] = useState([]);  

    const fetchProperties = async (query) => {  
        const response = await axios.get(`API_URL?search=${query}`);  
        setProperties(response.data);  
    };  

    useEffect(() => {  
        fetchProperties('');  
    }, []);  

    return (  
        <div>  
            <h1>Welcome to Dream Home</h1>  
            <SearchForm onSearch={fetchProperties} />  
            <div className="property-list">  
                {properties.map(property => (  
                    <PropertyCard key={property.id} property={property} />  
                ))}  
            </div>  
        </div>  
    );  
};  

export default HomePage;


