// src/components/PropertyCard.js  
import React from 'react';  

const PropertyCard = ({ property }) => {  
    return (  
        <div className="property-card">  
            <img src={property.image} alt={property.title} />  
            <h2>{property.title}</h2>  
            <p>{property.price}</p>  
            <a href={`/properties/${property.id}`}>View Details</a>  
        </div>  
    );  
};  

export default PropertyCard;

