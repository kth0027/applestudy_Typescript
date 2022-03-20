class Person {
    // constructor(){
    //     this.name = 'kim'
    // }
    // data = 0;

    name:string;

    constructor (a:string){
        // this.name = 'kim';
        this.name = a;
    }

    함수(a:string){
        console.log('안녕'+ a);
    }
}

// Person.prototype.함수 = function(){}

let 사람1 = new Person('kim');
let 사람2 = new Person('park');

// 사람1.함수();

사람1.함수('안녕')