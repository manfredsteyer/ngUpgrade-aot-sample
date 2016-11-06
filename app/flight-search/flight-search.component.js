import { FlightService } from "../services/flight.service";
import { BookingEventService } from "../services/booking-event.service";
import { Component, Inject } from '@angular/core';
export var FlightSearchComponent = (function () {
    function FlightSearchComponent(flightService, bookingEventService) {
        this.flightService = flightService;
        this.bookingEventService = bookingEventService;
        this.from = 'Hamburg';
        this.to = 'Graz';
        this.selectedFlight = null;
    }
    FlightSearchComponent.prototype.getFlights = function () {
        return this.flightService.flights;
    };
    FlightSearchComponent.prototype.search = function () {
        return this
            .flightService
            .find(this.from, this.to)
            .catch(function (resp) {
            console.debug(resp);
        });
    };
    FlightSearchComponent.prototype.select = function (f) {
        this.selectedFlight = f;
        this.bookingEventService.publish(f);
    };
    FlightSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'flight-search',
                    templateUrl: 'flight-search.component.html'
                },] },
    ];
    /** @nocollapse */
    FlightSearchComponent.ctorParameters = [
        { type: FlightService, decorators: [{ type: Inject, args: ['flightService',] },] },
        { type: BookingEventService, decorators: [{ type: Inject, args: ['bookingEventService',] },] },
    ];
    return FlightSearchComponent;
}());
//# sourceMappingURL=flight-search.component.js.map