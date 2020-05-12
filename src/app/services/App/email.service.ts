import {Injectable, OnInit} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, of, throwError} from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import {BLOG_CONSTANTS} from "../../config/app.config.js"

@Injectable()
export class EmailService {
  private emailUrl;
  constructor(private http: HttpClient) {}

  sentEmail(user): Observable<any> {
    this.init();
    return this.http.post<any>(this.emailUrl, {
      first_name: user.lblFirstName,
      last_name: user.lblLastName,
      email: user.lblEmail,
      telephone: user.lblTelephone,
      comment: user.lblComment
    })
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }


  init(): void {
    if (BLOG_CONSTANTS.DEBUG_ENABLE) {
      this.emailUrl = BLOG_CONSTANTS.EMAIL_SERVICE_DEBUG_URL;
    } else {
      this.emailUrl = BLOG_CONSTANTS.EMAIL_SERVICE_URL
    }
    console.log(this.emailUrl);
  }
}


