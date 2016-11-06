var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Directive, Input, Output, ElementRef, Injector, NgModule } from "@angular/core";
import { UpgradeComponent } from "@angular/upgrade/static";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { FlightSearchComponent } from "./flight-search/flight-search.component";
import { PassengerService } from "./services/passenger.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { UpgradeModule } from "@angular/upgrade/static";
// Upgrade flight-card to angular 2
export var FlightCard = (function (_super) {
    __extends(FlightCard, _super);
    function FlightCard(elementRef, injector) {
        _super.call(this, 'flightCard', elementRef, injector);
    }
    FlightCard.decorators = [
        { type: Directive, args: [{ selector: 'flight-card' },] },
    ];
    /** @nocollapse */
    FlightCard.ctorParameters = [
        { type: ElementRef, },
        { type: Injector, },
    ];
    FlightCard.propDecorators = {
        'item': [{ type: Input },],
        'selectedItem': [{ type: Input },],
        'selectedItemChange': [{ type: Output },],
    };
    return FlightCard;
}(UpgradeComponent));
export var Ng1 = (function (_super) {
    __extends(Ng1, _super);
    function Ng1(elementRef, injector) {
        _super.call(this, 'ng1', elementRef, injector);
    }
    Ng1.decorators = [
        { type: Directive, args: [{ selector: 'ng1' },] },
    ];
    /** @nocollapse */
    Ng1.ctorParameters = [
        { type: ElementRef, },
        { type: Injector, },
    ];
    return Ng1;
}(UpgradeComponent));
export function createFlightService(injector) {
    return injector.get('flightService');
}
export function createBookingEventService(injector) {
    return injector.get('bookingEventService');
}
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.prototype.ngDoBootstrap = function () { };
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        HttpModule,
                        FormsModule,
                        UpgradeModule
                    ],
                    declarations: [
                        FlightSearchComponent,
                        FlightCard,
                        Ng1
                    ],
                    entryComponents: [
                        FlightSearchComponent
                    ],
                    providers: [
                        PassengerService,
                        {
                            provide: 'flightService',
                            useFactory: createFlightService,
                            deps: ['$injector']
                        },
                        {
                            provide: 'bookingEventService',
                            useFactory: createBookingEventService,
                            deps: ['$injector']
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app2.module.js.map