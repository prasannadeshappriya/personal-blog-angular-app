import {Component, OnInit} from "@angular/core";
import {UserService} from "../../services/App/user.service";
import {CommonUtils} from "../../utils/common.utils";

@Component({
  selector: 'home-page',
  templateUrl:'./home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [UserService]
})
export class HomePageComponent implements OnInit{
  userService: UserService;
  userDetails: any;
  userSkillDetails: any;
  constructor(
    private _userService: UserService
  ) {
    this.userService = _userService;
  }
  ngOnInit(): void {
    CommonUtils.smoothScroll();

    this.userService.getUserDetails().subscribe(
      (userDetails) => {
        this.userDetails = userDetails;
      },
      (error) => {
        console.log("Error getting user details: ", error);
      }
    );
    this.userService.getUserSkillDetails().subscribe(
      (userSkillDetails) => {
        this.userSkillDetails = userSkillDetails;
      },
      (error) => {
        console.log("Error getting user skill details: ", error);
      }
    )
  }
  showArticlePage() {
    location.href = "/articles/host-nodejs-server";
  }
}
