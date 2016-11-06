import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-messages';
import {FlightService} from './services/flight.service';
import {createCityFilter} from './fliters/city.filter';
import {FlightCardComponent} from './flight-search/flight-card.directive';
import {createCityValidatorDDO} from './validation/city-validator';
import {createCityAsyncValidatorDDO} from './validation/city-async-validator';
import {HomeComponent} from './home/home.component';
import {PassengerSearchComponent} from './passenger-search/passenger-search.component';
import {AppComponent} from './app.component';
import {FlightEditComponent} from './flight-edit/flight-edit.component';
import {FlightBookingComponent} from './flight-booking/flight-booking.component';
import { OAuthService} from 'angular2-oauth2/oauth-service';
import {BookingEventService} from './services/booking-event.service';
import {ShoppingCardComponent} from './shopping-card/shopping-card.component';
import {PassengerService} from './services/passenger.service';
import tabs from './tabs/tabs.module';
import {PassengerCardComponent} from "./passenger-search/passenger-card.component";
import {FlightSearchComponent} from "./flight-search/flight-search.component";

import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';

var app = angular.module('flight-app',
                            ['ngMessages',
                                'ui.router',
                                tabs]);

app.service('flightService', FlightService);
app.service('bookingEventService', BookingEventService );
app.service('oauthService', OAuthService);
app.constant('baseURL', 'http://www.angular.at')
app.filter('city', createCityFilter);
app.directive('city', createCityValidatorDDO);
app.directive('cityAsync', createCityAsyncValidatorDDO);
app.component('home', HomeComponent);
app.component('passengerSearch', PassengerSearchComponent);
app.component('passengerCard', PassengerCardComponent);
app.component('app', AppComponent);
app.component('flightEdit', FlightEditComponent);
app.component('flightBooking', FlightBookingComponent);
app.component('shoppingCard', ShoppingCardComponent);
app.component('flightCard', FlightCardComponent);

app.directive('flightSearch', <any>downgradeComponent({ component: FlightSearchComponent }));
app.factory('passengerService', downgradeInjectable(PassengerService));

app.component('ng1', { template: '<b>**ng1**</b>'});