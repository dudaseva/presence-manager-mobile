import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import {AppStateService} from "~/app-state.service";
import {HttpService} from "~/services/authentication.service";
require( "nativescript-localstorage" );
import * as Toast from 'nativescript-toast';


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css'],
    providers: [HttpService]
})
export class HomeComponent implements OnInit {
    email: string = "";
    password: string = "";
    isUserLoggedIn: boolean;


    constructor(page: Page, private httpService: HttpService, private appStateService: AppStateService) {
        page.actionBarHidden = true;
        this.appStateService.isUserLoggedIn.subscribe(value => this.isUserLoggedIn = value);
    }

    ngOnInit(): void {
    }

    onButtonTap(): void {
        this.makePostRequest();
    }

    onButtonTap2(): void {
        this.makeGetRequest();
    }

    private makePostRequest() {
        this.httpService
            .login({ email: this.email, password: this.password })
            .subscribe(() => {
                Toast.makeText('Sikeres bejelentkezés!').show();
                this.appStateService.isUserLoggedIn.next(true);
            }, (err) => {
                if (err.status === 400) {
                    Toast.makeText('Rossz e-mail cím vagy jelszó!').show();
                }
            });
    }

    private makeGetRequest() {
        this.httpService
            .checkIn()
            .subscribe(res => {
                Toast.makeText('Sikeresen becsekkoltál!').show();
            }, (err) => {
                if (err.status === 503) {
                    Toast.makeText('A külső szerver nem elérhető. Próbáld meg később.').show();
                }
            });
    }
}
