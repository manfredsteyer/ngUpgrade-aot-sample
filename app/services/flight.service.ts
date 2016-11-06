import * as angular from 'angular';
import {Flight} from '../shared/flight';

export class FlightService {

    constructor(
        private $http: angular.IHttpService,
        private baseURL: string) {
    }

    flights: Flight[] = [];

    save(flight: Flight) {
        var url = this.baseURL + "/api/flight";

        return this
            .$http
            .post(url, flight)
            .then(resp => resp.data);
    }

    getById(id) {
        var url = this.baseURL + "/api/flight";

        var params = {
            id: id
        };

        return this
            .$http
            .get(url, { params })
            .then(resp => resp.data);

    }

    find(from: string, to: string): angular.IPromise<Flight[]> {

        var url = this.baseURL + "/api/flight";

        var params = {
            from: from,
            to: to
        };

        return this
                .$http
                .get(url, { params })
                .then(resp => resp.data)
                .then((flights: Flight[]) => {
                    this.flights = flights;
                    return flights;
                 });

    }

}