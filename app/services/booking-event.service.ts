import {Flight} from '../shared/flight';
import * as angular from 'angular';

export class BookingEventService {

    private subscriber = [];

    constructor(private $rootScope: angular.IRootScopeService) {
    }

    subscribe(f: Function) {
        console.debug('BookingEventService.subscribe');
        this.subscriber.push(f);
    }

    publish(f: Flight) {
        console.debug('BookingEventService.publish', f);
        for(let s of this.subscriber) {
            s(f);
        }
    }

}