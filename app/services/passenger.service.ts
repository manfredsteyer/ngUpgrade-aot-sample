import {Passenger} from '../shared/passenger';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';


@Injectable()
export class PassengerService {

    constructor(
        private http: Http) {
    }

    find(name): Promise<Passenger[]> {
        console.debug('ng2 Passenger Service was here ... ;-)')
        var url = 'http://www.angular.at/api/passenger';

        // var urlParams = { name: name };
        let search = new URLSearchParams();
        search.set('name', name);

        let headers = new Headers();
        headers.set('Accept', 'text/json');

        return this
                .http
                .get(url, { search, headers })
                .map(resp => resp.json())
                .toPromise();

    }
}