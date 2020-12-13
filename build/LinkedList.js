"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListCollection = void 0;
var LinkedListCollection = /** @class */ (function () {
    function LinkedListCollection(data) {
        this.data = data;
    }
    Object.defineProperty(LinkedListCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedListCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    LinkedListCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    return LinkedListCollection;
}());
exports.LinkedListCollection = LinkedListCollection;
