// src/services/api.js  
import data from './data.json';  

export const fetchProperties = () => {  
    return new Promise((resolve) => {  
        setTimeout(() => {  
            resolve(data);  
        }, 1000);  // شبیه‌سازی تاخیر در بارگذاری داده‌ها  
    });  
};