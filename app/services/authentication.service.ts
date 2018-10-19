import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {tap} from "rxjs/operators";
require( "nativescript-localstorage" );

@Injectable()
export class HttpService {
    private serverUrl = "http://10.0.3.2:3000";

    constructor(private http: HttpClient) { }

    login(data: any) {
        let options = this.createLoginHeader();
        return this.http.post(`${this.serverUrl}/users/login`, data, { headers: options })
            .pipe(tap(authResult => this.setSession(authResult)));
    }

    checkIn() {
        let options = this.createCheckInHeader();
        return this.http.get(`${this.serverUrl}/users/presence/manual`,{ headers: options })
    }

    private createLoginHeader() {
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return headers;
    }

    private createCheckInHeader() {
        let headers = new HttpHeaders({
            "Content-Type": "application/json",
            "x-auth": localStorage.getItem('id_token')
        });
        return headers;
    }

    private setSession(authResult) {
        localStorage.setItem('id_token', authResult.idToken);
    }
}