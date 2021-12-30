export interface StopResource {    
    type: string;
    id: string;
    attributes: StopAttributes;   
}

export interface StopAttributes {
    wheelchair_boarding: number;
    vehicle_type: number;	
    platform_name: string;
    on_street: string;
    name: string;
    municipality: string
    longitude: number;
    location_type: number;
    latitude: number;
    description: string;
    at_street: string;
    address: string;
}