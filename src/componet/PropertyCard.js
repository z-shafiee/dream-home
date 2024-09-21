import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import PropertyCard from './PropertyCard';  

const PropertyList = () => {  
    const [properties, setProperties] = useState([]);  

    useEffect(() => {  
        const fetchProperties = async () => {  
            const response = await axios.get('http://localhost:5000/properties');  
            setProperties(response.data);  
        };  
        fetchProperties();  
    }, []);  

    return (  
        <div className="property-list">  
            {properties.map(property => (  
                <PropertyCard key={property.id} {...property} />  
            ))}  
        </div>  
    );  
};  

export default PropertyList;