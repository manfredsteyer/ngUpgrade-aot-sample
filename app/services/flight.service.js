export var FlightService = (function () {
    function FlightService($http, baseURL) {
        this.$http = $http;
        this.baseURL = baseURL;
        this.flights = [];
    }
    FlightService.prototype.save = function (flight) {
        var url = this.baseURL + "/api/flight";
        return this
            .$http
            .post(url, flight)
            .then(function (resp) { return resp.data; });
    };
    FlightService.prototype.getById = function (id) {
        var url = this.baseURL + "/api/flight";
        var params = {
            id: id
        };
        return this
            .$http
            .get(url, { params: params })
            .then(function (resp) { return resp.data; });
    };
    FlightService.prototype.find = function (from, to) {
        var _this = this;
        var url = this.baseURL + "/api/flight";
        var params = {
            from: from,
            to: to
        };
        return this
            .$http
            .get(url, { params: params })
            .then(function (resp) { return resp.data; })
            .then(function (flights) {
            _this.flights = flights;
            return flights;
        });
    };
    return FlightService;
}());
//# sourceMappingURL=flight.service.js.map