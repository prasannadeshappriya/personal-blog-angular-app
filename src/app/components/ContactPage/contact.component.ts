import {Component, Input, OnInit} from "@angular/core";
import {MatDialog} from '@angular/material/dialog';
import {AlertDialogComponent} from "../Common/alert-dialog.component";
import {EmailService} from "../../services/App/email.service";
import {CommonUtils} from "../../utils/common.utils";
import { CONSTANTS } from "../../config/app.config.js"

@Component({
  selector: 'contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [EmailService]
})
export class ContactComponent implements OnInit{
  isShowSuccessMessage = false;
  lblComment;
  lblFirstName;
  lblLastName;
  lblTelephone;
  lblEmail;
  isShowErrorMessage = false;
  isLoading = false;

  constructor(
    public dialog: MatDialog,
    private emailService: EmailService) {
  }

  sendEmail() {
    if (this.lblComment && this.lblFirstName
      && this.lblLastName && this.lblTelephone && this.lblEmail) {
      this.isLoading = true;
      const user = {
        lblFirstName: this.lblFirstName,
        lblLastName: this.lblLastName,
        lblTelephone: this.lblTelephone,
        lblEmail: this.lblEmail,
        lblComment: this.lblComment
      }

      if (!CONSTANTS.CONNECT_BACKEND) {
        this.openAlertDialog("Server is currently in maintanance");
        return;
      }

      this.emailService.sentEmail(user).subscribe(
        (retData) => {
          console.log(retData);
          this.setSuccess(true);
          this.isLoading = false;
          this.clear();
        },
        (error) => {
          console.log("Cannot send the required information to the server, ", error);
          this.setSuccess(false);
          this.isLoading = false;
        }
      )
    } else {
      this.openAlertDialog('Please input all the required fields and try again');
    }
  }

  clear() {
    this.lblFirstName = '';
    this.lblLastName = '';
    this.lblTelephone = '';
    this.lblEmail = '';
    this.lblComment = '';
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

  ngOnInit(): void {
    CommonUtils.smoothScroll();

    this.isShowSuccessMessage = false;
    this.isShowErrorMessage = false;
    this.isLoading = false;
  }
}
