import {Component, OnInit} from "@angular/core";
import {UserService} from "../../services/App/user.service";
import {Observable, of} from "rxjs";
import {delay, mergeMap} from 'rxjs/internal/operators';

@Component({
  selector: 'footer',
  templateUrl: "./footer.component.html",
  styleUrls: ['./footer.component.css'],
  providers: [UserService]
})
export class FooterComponent implements OnInit {
  userDetails: any;
  userFooterDetails: any;

  userService: UserService;

  constructor(
    _userService: UserService
  ) {
    this.userService = _userService;
  }

  ngOnInit(): void {
    this.userService.getUserDetails().pipe(
      mergeMap(userResponse => {
        if (userResponse != null) {
          this.userDetails = userResponse;
          return this.userService.getUserFooterDetails().pipe(
            mergeMap(userFooterInfo => {
              return of(userFooterInfo)
            })
          )
        } else {
          return of(null);
        }
      })
    ).subscribe(
      (returnValue) => {
        if (returnValue) {
          this.userFooterDetails = returnValue;
        } else {
          console.log("Unable to get the required values for the footer")
        }
      }
    )
  }
}
