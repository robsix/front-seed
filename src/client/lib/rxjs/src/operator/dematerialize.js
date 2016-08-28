var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber'], function (require, exports, Subscriber_1) {
    "use strict";
    /**
     * Returns an Observable that transforms Notification objects into the items or notifications they represent.
     *
     * @see {@link Notification}
     *
     * @return {Observable} an Observable that emits items and notifications embedded in Notification objects emitted by the source Observable.
     * @method dematerialize
     * @owner Observable
     */
    function dematerialize() {
        return this.lift(new DeMaterializeOperator());
    }
    exports.dematerialize = dematerialize;
    var DeMaterializeOperator = (function () {
        function DeMaterializeOperator() {
        }
        DeMaterializeOperator.prototype.call = function (subscriber, source) {
            return source._subscribe(new DeMaterializeSubscriber(subscriber));
        };
        return DeMaterializeOperator;
    }());
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var DeMaterializeSubscriber = (function (_super) {
        __extends(DeMaterializeSubscriber, _super);
        function DeMaterializeSubscriber(destination) {
            _super.call(this, destination);
        }
        DeMaterializeSubscriber.prototype._next = function (value) {
            value.observe(this.destination);
        };
        return DeMaterializeSubscriber;
    }(Subscriber_1.Subscriber));
});
//# sourceMappingURL=dematerialize.js.map