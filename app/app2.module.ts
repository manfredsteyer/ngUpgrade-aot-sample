import {Directive, Input, Output, EventEmitter, ElementRef, Injector, NgModule} from "@angular/core";
import {UpgradeComponent} from "@angular/upgrade/static";
import {Flight} from "./shared/flight";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {FlightSearchComponent} from "./flight-search/flight-search.component";
import {PassengerService} from "./services/passenger.service";
import {FlightService} from "./services/flight.service";
import {BookingEventService} from "./services/booking-event.service";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {UpgradeModule} from "@angular/upgrade/static";


// Upgrade flight-card to angular 2
@Directive({selector: 'flight-card'})
export class FlightCard extends UpgradeComponent {

    @Input() item: Flight;
    @Input() selectedItem: Flight;
    @Output() selectedItemChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, injector: Injector) {
        super('flightCard', elementRef, injector);
    }
}

@Directive({selector: 'ng1'})
export class Ng1 extends UpgradeComponent {

    constructor(elementRef: ElementRef, injector: Injector) {
        super('ng1', elementRef, injector);
    }
}

export function createFlightService(injector) {
    return injector.get('flightService');
}

export function createBookingEventService(injector) {
    return injector.get('bookingEventService');
}

@NgModule({
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
})
export class AppModule {
    ngDoBootstrap() {}
}
