import {Component, Input, OnInit} from "@angular/core";
import {MatDialog} from '@angular/material/dialog';
import {AlertDialogComponent} from "../Common/alert-dialog.component";
import {CommonUtils} from "../../utils/common.utils";
import { AuthService } from 'src/app/services/App/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-page',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  isShowSuccessMessage = false;
  isShowErrorMessage = false;
  isLoading = false;
  isLoginProcess = true;
  errorMessage = '';

  lblSignInEmail;
  lblSignInPassword;

  lblSignUpFirstName;
  lblSignUpLastName;
  lblSignUpEmail;
  lblSignUpPassword;
  lblSignUpReTypePassword;


  constructor(
    public dialog: MatDialog,
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) 
    {
      // redirect to home if already logged in
      if (this.authService.currentUserObj) { 
        this.router.navigate(['/dashboard']);
      }
  }

  redirect(isSignIn) {
    console.log(isSignIn);
    this.router.navigate(['/authanticate'], { queryParams: { isRegister: !isSignIn }});
  }

  ngOnInit(): void {
    CommonUtils.smoothScroll();
    this.route.queryParams.subscribe(params => {
      if (params['isRegister']) {
        let register: String = params['isRegister'];
        const isRegister = register.toLowerCase() == 'true';
        this.isLoginProcess = isRegister;
        if(isRegister){
          //This is a login process
          const session = sessionStorage.getItem('user');
          if(session) {
            this.router.navigate(['/dashboard']);
          }
        }
      } else {
        this.isLoginProcess = true;
      }
    });
  }

  validateEmail(email) {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
   }

  signIn() {
    if (this.lblSignInEmail && this.lblSignInPassword) {
      if(!this.validateEmail(this.lblSignInEmail)) {
        this.lblSignInPassword = '';
        this.openAlertDialog('Please input a valid email and try again');
        return;
      }
      this.isLoading = true;
      const user = {
        email: this.lblSignInEmail,
        password: this.lblSignInPassword
      }
      user.password = btoa(user.password);
      this.authService.postSignIn(user).subscribe({
        next: data => {
            this.clear();
            sessionStorage.setItem('user', JSON.stringify(data)) ;
            this.authService.emitUserStatus(data);
            this.router.navigate(['/dashboard']);
        },
        error: error => {
          this.isShowErrorMessage = true;
          if(typeof error == "string") {
            this.errorMessage = error;
          }else{
            if(error != null) {
              this.errorMessage = 'Email and password is not match. Please try again';
            } else {
              this.performError(error);
            }
          }
          this.isLoading = false;
          this.lblSignInPassword = '';
        }
      })
    } else {
      this.openAlertDialog('Please input all the required fields and try again');
    }
  }

  signOut() {
    this.authService.emitUserStatus(null);
  }

  performError(error) {
    let isErrorMsgUpdated = false;
    if(error != null && error.error != null) {
      isErrorMsgUpdated = true;
      this.errorMessage = error.error.message;
    } else if(error != null && error.message != null) {
      isErrorMsgUpdated = true;
      this.errorMessage = error.message;
    }
    if(!isErrorMsgUpdated){
      this.errorMessage = 'There was an error while submitting your information. Please try again!';
    }
  }

  signUp() {
    if (this.lblSignUpFirstName && this.lblSignUpLastName
      && this.lblSignUpEmail && this.lblSignUpPassword && this.lblSignUpReTypePassword) {
      this.isLoading = true;
      const user = {
        firstName: this.lblSignUpFirstName,
        lastName: this.lblSignUpLastName,
        email: this.lblSignUpEmail,
        password: this.lblSignUpPassword
      }
      user.password = btoa(user.password);
      if(this.lblSignUpReTypePassword != user.password) {
        this.isShowErrorMessage = true;
        this.errorMessage = "Password is not match correctly";
        this.isLoading = false;
        this.lblSignUpPassword = '';
        this.lblSignUpReTypePassword = '';
        return;
      }
      console.log(user);
      this.authService.postSignUp(user).subscribe({
        next: data => {
          this.clear();
          this.router.navigate(['/authanticate'], { queryParams: { isRegister: true }});
        },
        error: error => {
          this.isShowErrorMessage = true;
          if(typeof error == "string") {
            this.errorMessage = error;
          }else{
            if(error != null && error.status === 409) {
              this.errorMessage = 'User already exist for \'' + this.lblSignUpEmail + '\'';
            } else {
              this.performError(error);
            }
          }
          this.isLoading = false;
          this.lblSignUpPassword = '';
          this.lblSignUpReTypePassword = '';
        }
      })
    } else {
      this.openAlertDialog('Please input all the required fields and try again');
    }
  }

  clear() {
    this.isLoading = false;
    this.isShowErrorMessage = false;
    this.isShowSuccessMessage = false;

    this.lblSignUpFirstName = '';
    this.lblSignUpLastName = '';
    this.lblSignUpEmail = '';
    this.lblSignUpPassword = '';
    this.lblSignUpReTypePassword = '';

    this.lblSignInEmail = '';
    this.lblSignInPassword = '';
  }

  setSuccess(isSuccess) {
    this.isShowSuccessMessage = isSuccess;
    this.isShowErrorMessage = !isSuccess;
  }

  openAlertDialog(message) {
    this.dialog.open(AlertDialogComponent, {
      data:{
        message: message,
        buttonText: {
          cancel: 'Ok'
        }
      },
    });
  }
}
