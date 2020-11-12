import {Component, Input, OnInit} from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/App/auth.service';
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
  isAuthanticated = false;

  constructor(
    private _userService: UserService,
    private authService: AuthService,
    public router: Router
  ) {
    this.userService = _userService;
  }

  ngOnInit() {
    this.authService.currentUser.subscribe({
      next: user => {
        if(user) {
          this.isAuthanticated = true;
        } else {
          this.isAuthanticated = false;
        }
      },
      error: err => {console.log(err)} 
    });
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

  logOut(event){
    this.authService.emitUserStatus(null);
    this.router.navigate(['/authanticate'], { queryParams: { isRegister: true }});
  }
}
