"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var app_state_service_1 = require("~/app-state.service");
var authentication_service_1 = require("~/services/authentication.service");
require("nativescript-localstorage");
var Toast = require("nativescript-toast");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(page, httpService, appStateService) {
        var _this = this;
        this.httpService = httpService;
        this.appStateService = appStateService;
        this.email = "";
        this.password = "";
        page.actionBarHidden = true;
        this.appStateService.isUserLoggedIn.subscribe(function (value) { return _this.isUserLoggedIn = value; });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onButtonTap = function () {
        this.makePostRequest();
    };
    HomeComponent.prototype.onButtonTap2 = function () {
        this.makeGetRequest();
    };
    HomeComponent.prototype.makePostRequest = function () {
        var _this = this;
        this.httpService
            .login({ email: this.email, password: this.password })
            .subscribe(function () {
            Toast.makeText('Sikeres bejelentkezés!').show();
            _this.appStateService.isUserLoggedIn.next(true);
        }, function (err) {
            if (err.status === 400) {
                Toast.makeText('Rossz e-mail cím vagy jelszó!').show();
            }
        });
    };
    HomeComponent.prototype.makeGetRequest = function () {
        this.httpService
            .checkIn()
            .subscribe(function (res) {
            Toast.makeText('Sikeresen becsekkoltál!').show();
        }, function (err) {
            if (err.status === 503) {
                Toast.makeText('A külső szerver nem elérhető. Próbáld meg később.').show();
            }
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css'],
            providers: [authentication_service_1.HttpService]
        }),
        __metadata("design:paramtypes", [page_1.Page, authentication_service_1.HttpService, app_state_service_1.AppStateService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IseURBQW9EO0FBQ3BELDRFQUE4RDtBQUM5RCxPQUFPLENBQUUsMkJBQTJCLENBQUUsQ0FBQztBQUN2QywwQ0FBNEM7QUFVNUM7SUFNSSx1QkFBWSxJQUFVLEVBQVUsV0FBd0IsRUFBVSxlQUFnQztRQUFsRyxpQkFHQztRQUgrQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUxsRyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFLbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLEVBQTNCLENBQTJCLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTyx1Q0FBZSxHQUF2QjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLFdBQVc7YUFDWCxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JELFNBQVMsQ0FBQztZQUNQLEtBQUssQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoRCxLQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxFQUFFLFVBQUMsR0FBRztZQUNILEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDckIsS0FBSyxDQUFDLFFBQVEsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNELENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTyxzQ0FBYyxHQUF0QjtRQUNJLElBQUksQ0FBQyxXQUFXO2FBQ1gsT0FBTyxFQUFFO2FBQ1QsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLEtBQUssQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyRCxDQUFDLEVBQUUsVUFBQyxHQUFHO1lBQ0gsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixLQUFLLENBQUMsUUFBUSxDQUFDLG1EQUFtRCxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDL0UsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQTdDUSxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxTQUFTLEVBQUUsQ0FBQyxvQ0FBVyxDQUFDO1NBQzNCLENBQUM7eUNBT29CLFdBQUksRUFBdUIsb0NBQVcsRUFBMkIsbUNBQWU7T0FOekYsYUFBYSxDQThDekI7SUFBRCxvQkFBQztDQUFBLEFBOUNELElBOENDO0FBOUNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge0FwcFN0YXRlU2VydmljZX0gZnJvbSBcIn4vYXBwLXN0YXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7SHR0cFNlcnZpY2V9IGZyb20gXCJ+L3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcbnJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiICk7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddLFxuICAgIHByb3ZpZGVyczogW0h0dHBTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlbWFpbDogc3RyaW5nID0gXCJcIjtcbiAgICBwYXNzd29yZDogc3RyaW5nID0gXCJcIjtcbiAgICBpc1VzZXJMb2dnZWRJbjogYm9vbGVhbjtcblxuXG4gICAgY29uc3RydWN0b3IocGFnZTogUGFnZSwgcHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UsIHByaXZhdGUgYXBwU3RhdGVTZXJ2aWNlOiBBcHBTdGF0ZVNlcnZpY2UpIHtcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmFwcFN0YXRlU2VydmljZS5pc1VzZXJMb2dnZWRJbi5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy5pc1VzZXJMb2dnZWRJbiA9IHZhbHVlKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBvbkJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tYWtlUG9zdFJlcXVlc3QoKTtcbiAgICB9XG5cbiAgICBvbkJ1dHRvblRhcDIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWFrZUdldFJlcXVlc3QoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1ha2VQb3N0UmVxdWVzdCgpIHtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZVxuICAgICAgICAgICAgLmxvZ2luKHsgZW1haWw6IHRoaXMuZW1haWwsIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkIH0pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dCgnU2lrZXJlcyBiZWplbGVudGtlesOpcyEnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZVNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4ubmV4dCh0cnVlKTtcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KCdSb3NzeiBlLW1haWwgY8OtbSB2YWd5IGplbHN6w7MhJykuc2hvdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgbWFrZUdldFJlcXVlc3QoKSB7XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2VcbiAgICAgICAgICAgIC5jaGVja0luKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dCgnU2lrZXJlc2VuIGJlY3Nla2tvbHTDoWwhJykuc2hvdygpO1xuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuc3RhdHVzID09PSA1MDMpIHtcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQoJ0Ega8O8bHPFkSBzemVydmVyIG5lbSBlbMOpcmhldMWRLiBQcsOzYsOhbGQgbWVnIGvDqXPFkWJiLicpLnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=