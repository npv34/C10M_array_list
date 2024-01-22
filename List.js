"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var List = /** @class */ (function () {
    function List(limit) {
        this.container = [];
        this.size = 0;
        this.limit = limit;
    }
    List.prototype.clear = function () {
        this.container = [];
    };
    List.prototype.getElement = function (index) {
        return this.container[index];
    };
    List.prototype.insert = function (element) {
        this.size++;
        this.container.push(element);
    };
    List.prototype.listSize = function () {
        return this.size;
    };
    List.prototype.remove = function (index) {
        this.container.splice(index, 1);
        this.size--;
    };
    List.prototype.showList = function () {
        console.table(this.container);
    };
    return List;
}());
exports.default = List;
