import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services,setServices] = useState([])

    useEffect(() => {
        fetch('/public/services.json')
        .then(res => res.json())
        .then(data => {
           
            setServices(data)
        })
    },[])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => 
                    <ServiceCard key={service._id} service = {service}/>)
                }
            </div>
        </div>
    );
};

export default Services;