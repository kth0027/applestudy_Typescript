class Person {
    constructor(a) {
        // this.name = 'kim';
        this.name = a;
    }
    함수(a) {
        console.log('안녕' + a);
    }
}
// Person.prototype.함수 = function(){}
let 사람1 = new Person('kim');
let 사람2 = new Person('park');
// 사람1.함수();
사람1.함수('안녕');
//# sourceMappingURL=09calss.js.map