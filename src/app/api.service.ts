import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
    RouteResource, 
    StopResource, 
    ScheduleResource, 
    Response
} from './models';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    readonly apiUrl: string = 'https://api-v3.mbta.com';

    constructor(private http: HttpClient) { }

    getRoutes(types:number[]=[]): Observable<Response<RouteResource>> {
        let url = this.apiUrl + '/routes';
        if(types.length > 0) url = url + '?filter[type]=' + types.join(',');
        return this.http.get<Response<RouteResource>>(url);
    }

    getStops(routeId:string): Observable<Response<StopResource>> {
        const url = this.apiUrl + '/stops?filter[route]=' + routeId;
        return this.http.get<Response<StopResource>>(url);
    }

    getShedule(routeId:string, stopId:string, direction:string): Observable<Response<ScheduleResource>> {
        const url = this.apiUrl + `/schedules?filter[route]=${routeId}&filter[stop]=${stopId}&filter[direction_id]=${direction}&sort=departure_time`;
        return this.http.get<Response<ScheduleResource>>(url);
    }

}