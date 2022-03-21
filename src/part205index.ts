// function 함수<MyType>(x: MyType[]):MyType {
//   return x[0];
// }

// let a = 함수<number>([4,2])
// let b = 함수<string>(['4','2'])
// console.log(a)

//
// function 함수<MyType extends number>(x: MyType) {
//   return x - 1;
// }

// let a = 함수<number>(100);


// interface LengthCheck {
//   length: number;
// }

// function 함수<MyType extends LengthCheck>(x: MyType) {
//   // return x - 1
//   return x.length;
// }

// let a = 함수<string[]>(['100']);
