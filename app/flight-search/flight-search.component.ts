import {FlightService} from "../services/flight.service";
import {BookingEventService} from "../services/booking-event.service";
import {Flight} from "../shared/flight";
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'flight-search', // <flight-search>
    templateUrl: 'flight-search.component.html'
})
export class FlightSearchComponent {

    constructor(
        private flightService: FlightService,
        private bookingEventService: BookingEventService) {
    }

    public from: string = 'Hamburg';
    public to: string = 'Graz';
    public selectedFlight: Flight = null;

    public getFlights() {
        return this.flightService.flights;
    }

    public search() {

        return this
            .flightService
            .find(this.from, this.to)
            .catch(function (resp) {
                console.debug(resp);
            });
    }

    public select(f: Flight) {
        this.selectedFlight = f;
        this.bookingEventService.publish(f);
    }
}