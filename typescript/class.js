var Vinit = /** @class */ (function () {
    function Vinit() {
        this.num = 12;
    }
    Vinit.prototype.myfun = function () {
        var num1 = 12;
    };
    return Vinit;
}());
var ab = new Vinit();
console.log("the number is " + ab.num);
