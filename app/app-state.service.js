"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AppStateService = /** @class */ (function () {
    function AppStateService() {
        this.isUserLoggedIn = new rxjs_1.BehaviorSubject(false);
    }
    AppStateService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AppStateService);
    return AppStateService;
}());
exports.AppStateService = AppStateService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAtc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBcUM7QUFLckM7SUFJSTtRQUZPLG1CQUFjLEdBQTZCLElBQUksc0JBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUd0RixDQUFDO0lBTFEsZUFBZTtRQUgzQixpQkFBVSxDQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQzs7T0FDVyxlQUFlLENBTzNCO0lBQUQsc0JBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBcHBTdGF0ZVNlcnZpY2Uge1xuXG4gICAgcHVibGljIGlzVXNlckxvZ2dlZEluOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxufVxuIl19