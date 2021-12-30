import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { finalize } from 'rxjs/operators';

import { ErrorResponse, RouteResource, Response, StopResource, ScheduleResource } from './models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Api responses models
  routes: RouteResource[];
  stops: StopResource[];
  directions: string[];
  schedules: ScheduleResource[];
  schedule: ScheduleResource;

  // data form models
  routeId: string = null;
  stopId: string = null;
  direction: string = null;

  // local vars
  working: boolean = false;
  hasData: boolean = false;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.working = true;
    this.api.getRoutes([0, 1]).pipe(
      finalize(() => this.working = false)
    ).subscribe(
      (res: Response<RouteResource>) => {
        this.routes = res.data;
      },
      (error: ErrorResponse) => {
        console.log(error);
      }
    )
  }

  onRouteSelected(routeId:string) {
    const route = this.routes.find(x => x.id == routeId);
    if(!route) {
      this.stops = [];
      this.directions = [];
      this.stopId = null;
      this.direction = null;
      return;
    }

    this.api.getStops(routeId).subscribe(
      (res: Response<StopResource>) => {
        this.stops = res.data;
        this.directions = route.attributes.direction_names;
        this.stopId = null;
        this.direction = null;
      },
      (error: ErrorResponse) => {
        console.log(error);
      }
    );
  }

  onGetNextSchedule() {
    this.working = true;
    this.hasData = false;
    this.api.getShedule(this.routeId, this.stopId, this.direction).pipe(
      finalize(() => this.working = false)
    ).subscribe(
      (res: Response<ScheduleResource>) => {
        const now = new Date();
        this.schedules = res.data;
        this.hasData = true;
        this.schedule = this.schedules.find(x => new Date(x.attributes.departure_time).getTime() > now.getTime())
        console.log(this.schedule);
      },
      (error: ErrorResponse) => {
        console.log(error);
      }
    );
  }

}
