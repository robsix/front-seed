define(["require", "exports", '../observable/SubscribeOnObservable'], function (require, exports, SubscribeOnObservable_1) {
    "use strict";
    /**
     * Asynchronously subscribes Observers to this Observable on the specified Scheduler.
     *
     * <img src="./img/subscribeOn.png" width="100%">
     *
     * @param {Scheduler} the Scheduler to perform subscription actions on.
     * @return {Observable<T>} the source Observable modified so that its subscriptions happen on the specified Scheduler
     .
     * @method subscribeOn
     * @owner Observable
     */
    function subscribeOn(scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        return new SubscribeOnObservable_1.SubscribeOnObservable(this, delay, scheduler);
    }
    exports.subscribeOn = subscribeOn;
});
//# sourceMappingURL=subscribeOn.js.map