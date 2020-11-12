import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { CONSTANTS } from "../../config/app.config.js"
import { CommonUtils } from "../../utils/common.utils";

@Injectable()
export class StatService {
    constructor(private http: HttpClient) {}

    public getAllStatistics(): Observable<any> {
        const url = CommonUtils.getURL(CONSTANTS.STATISTICS_GET_URL);
        return this.http.get<any>(url);
    }

    public getStatTotalCount(): Observable<any> {
        const url = CommonUtils.getURL(CONSTANTS.STATISTICS_COUNT);
        return this.http.get<any>(url);
    }

    public postCreateStatistic(clientIp): Observable<any> {
        const url = CommonUtils.getURL(CONSTANTS.STATISTICS_CREATE_URL);
        const postData = {
            'clientIp': clientIp
        }
        return this.http.post<any>(url, postData);
    }

    public getIPAddress()  
    {  
        return this.http.get(CONSTANTS.IP_RETREVE_URL);  
    }  
}


