export interface ScheduleResource {
    type: string,
    id:string,
    attributes: ScheduleAttributes
}

export interface ScheduleAttributes {
    timepoint: boolean;
    stop_sequence: number;
    stop_headsign: string;
    pickup_type: number;
    drop_off_type: number;
    direction_id: number;
    departure_time: string;
    arrival_time: string;
}
