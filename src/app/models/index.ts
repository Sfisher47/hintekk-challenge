export { RouteResource, RouteAttributes } from './route.model';
export { StopResource, StopAttributes } from './stop.model';
export { ScheduleResource, ScheduleAttributes } from './schedule.model';
export { ErrorResponse } from './error.model';

export interface Response<T> {
    data: T[],
}

export interface Resource<T> {
    type: string,
    id:string,
    attributes: T
}

