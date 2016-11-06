import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
export var PassengerService = (function () {
    function PassengerService(http) {
        this.http = http;
    }
    PassengerService.prototype.find = function (name) {
        console.debug('ng2 Passenger Service was here ... ;-)');
        var url = 'http://www.angular.at/api/passenger';
        // var urlParams = { name: name };
        var search = new URLSearchParams();
        search.set('name', name);
        var headers = new Headers();
        headers.set('Accept', 'text/json');
        return this
            .http
            .get(url, { search: search, headers: headers })
            .map(function (resp) { return resp.json(); })
            .toPromise();
    };
    PassengerService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PassengerService.ctorParameters = [
        { type: Http, },
    ];
    return PassengerService;
}());
//# sourceMappingURL=passenger.service.js.map