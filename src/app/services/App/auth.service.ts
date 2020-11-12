import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, of} from "rxjs";
import { HttpClient } from '@angular/common/http';
import {CONSTANTS} from "../../config/app.config.js";
import {CommonUtils} from "../../utils/common.utils";
import { User } from "../../models/user";

@Injectable()
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User> (
            JSON.parse(sessionStorage.getItem('user')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserObj(): User {
        return this.currentUserSubject.value;
    }

    public emitUserStatus(user) {
        this.currentUserSubject.next(user);
        if(!user){
            sessionStorage.removeItem('user');
        }
    }

    public postSignIn(data): Observable<any> {
        const url = CommonUtils.getURL(CONSTANTS.USER_LOGIN_URL);
        const postData = {
            'email': data.email,
            'password': data.password,
        }
        return this.http.post<any>(url, postData);
    }

    public postSignUp(data): Observable<any> {
        const url = CommonUtils.getURL(CONSTANTS.USER_REGISTER_URL);
        const postData = {
            'firstName': data.firstName,
            'lastName': data.lastName,
            'email': data.email,
            'password': data.password,
        }
        return this.http.post<any>(url, postData);
    }
}
