import {Component, Input, OnInit} from "@angular/core";
import {UserService} from "../../services/App/user.service";

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  providers: [UserService]
})
export class BreadcrumbComponent implements OnInit {
  @Input() inputParam;
  userService: UserService;
  userDetails: any;

  constructor(
    private _userService: UserService
  ) {
    this.userService = _userService;
  }

  ngOnInit() {
    this.userService.getUserDetails().subscribe(
      (userDetails) => {
        console.log(userDetails);
        this.userDetails = userDetails;
      },
      (error) => {
        console.log("Error getting user details: ", error);
      }
    )
  }
}
