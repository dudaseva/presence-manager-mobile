"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
require("nativescript-localstorage");
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.serverUrl = "http://10.0.3.2:3000";
    }
    HttpService.prototype.login = function (data) {
        var _this = this;
        var options = this.createLoginHeader();
        return this.http.post(this.serverUrl + "/users/login", data, { headers: options })
            .pipe(operators_1.tap(function (authResult) { return _this.setSession(authResult); }));
    };
    HttpService.prototype.checkIn = function () {
        var options = this.createCheckInHeader();
        return this.http.get(this.serverUrl + "/users/presence/manual", { headers: options });
    };
    HttpService.prototype.createLoginHeader = function () {
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json"
        });
        return headers;
    };
    HttpService.prototype.createCheckInHeader = function () {
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json",
            "x-auth": localStorage.getItem('id_token')
        });
        return headers;
    };
    HttpService.prototype.setSession = function (authResult) {
        localStorage.setItem('id_token', authResult.idToken);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQStEO0FBQy9ELDRDQUFtQztBQUNuQyxPQUFPLENBQUUsMkJBQTJCLENBQUUsQ0FBQztBQUd2QztJQUdJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRjVCLGNBQVMsR0FBRyxzQkFBc0IsQ0FBQztJQUVILENBQUM7SUFFekMsMkJBQUssR0FBTCxVQUFNLElBQVM7UUFBZixpQkFJQztRQUhHLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsU0FBUyxpQkFBYyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUM3RSxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELDZCQUFPLEdBQVA7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLFNBQVMsMkJBQXdCLEVBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTtJQUN4RixDQUFDO0lBRU8sdUNBQWlCLEdBQXpCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzFCLGNBQWMsRUFBRSxrQkFBa0I7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRU8seUNBQW1CLEdBQTNCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzFCLGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMsUUFBUSxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQzdDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVPLGdDQUFVLEdBQWxCLFVBQW1CLFVBQVU7UUFDekIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFqQ1EsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUlpQixpQkFBVTtPQUgzQixXQUFXLENBa0N2QjtJQUFELGtCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge3RhcH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5yZXF1aXJlKCBcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIiApO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xuICAgIHByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwOi8vMTAuMC4zLjI6MzAwMFwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICAgIGxvZ2luKGRhdGE6IGFueSkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY3JlYXRlTG9naW5IZWFkZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuc2VydmVyVXJsfS91c2Vycy9sb2dpbmAsIGRhdGEsIHsgaGVhZGVyczogb3B0aW9ucyB9KVxuICAgICAgICAgICAgLnBpcGUodGFwKGF1dGhSZXN1bHQgPT4gdGhpcy5zZXRTZXNzaW9uKGF1dGhSZXN1bHQpKSk7XG4gICAgfVxuXG4gICAgY2hlY2tJbigpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmNyZWF0ZUNoZWNrSW5IZWFkZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5zZXJ2ZXJVcmx9L3VzZXJzL3ByZXNlbmNlL21hbnVhbGAseyBoZWFkZXJzOiBvcHRpb25zIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVMb2dpbkhlYWRlcigpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQ2hlY2tJbkhlYWRlcigpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIngtYXV0aFwiOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTZXNzaW9uKGF1dGhSZXN1bHQpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgYXV0aFJlc3VsdC5pZFRva2VuKTtcbiAgICB9XG59Il19