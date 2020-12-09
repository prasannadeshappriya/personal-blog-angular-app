import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { switchMap } from 'rxjs/operators';
import { StatService } from "./services/App/statistics.service";
import { CONSTANTS } from "./config/app.config.js"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StatService]
})
export class AppComponent implements OnInit {
  title = 'PersonalBlog';

  constructor(private statService: StatService) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit(): void {
    if (!CONSTANTS.CONNECT_BACKEND) {
      console.log("Server is currently in maintanance");
      return;
    }
    let sessionStatLogStatus = sessionStorage.getItem("session-stored");
    if(!sessionStatLogStatus) {
      this.statService.getIPAddress().pipe(
        switchMap(data => {
          let _ip = '0.0.0.0';
          if(data && data['ip']) {
            _ip = data['ip'];
          }
          return this.statService.postCreateStatistic(_ip);
        })
      ).subscribe({
        next: (data) => {
          if(data && data.response){
            sessionStorage.setItem("session-stored", data.response);
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
}
