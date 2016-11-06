import * as angular from 'angular';
import {Flight} from '../shared/flight';
import {BookingEventService} from '../services/booking-event.service';

class ShoppingCardController {
    flight: Flight;

    constructor(bookingEventService: BookingEventService) {
        bookingEventService.subscribe((f: Flight) => {
            this.flight = f;
        });
    }
}


export var ShoppingCardComponent: angular.IComponentOptions = {
    controller: ShoppingCardController,
    template: `
        <div class='panel panel-default'>

          <div class='panel-heading'>Your Shopping Basket</div>

            <ul class='list-group' ng-if='$ctrl.flight'>

                <li class='list-group-item'>
                    #{{$ctrl.flight.id}}, {{$ctrl.flight.from}} - {{$ctrl.flight.to}}
                </li>
            </ul>

            <ul class='list-group' ng-if='!$ctrl.flight'>

                <li class='list-group-item'>
                    Your basket is empty. Select a flight.
                </li>
            </ul>


          </div>
        </div>
    `
}