export var BookingEventService = (function () {
    function BookingEventService($rootScope) {
        this.$rootScope = $rootScope;
        this.subscriber = [];
    }
    BookingEventService.prototype.subscribe = function (f) {
        console.debug('BookingEventService.subscribe');
        this.subscriber.push(f);
    };
    BookingEventService.prototype.publish = function (f) {
        console.debug('BookingEventService.publish', f);
        for (var _i = 0, _a = this.subscriber; _i < _a.length; _i++) {
            var s = _a[_i];
            s(f);
        }
    };
    return BookingEventService;
}());
//# sourceMappingURL=booking-event.service.js.map