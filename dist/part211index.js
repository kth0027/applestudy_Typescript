// //
// let obj = { name : 'kim', age:20}
// // 
// Object.keys(obj)
// // key 값을 전부 가져오는 keyof
// interface Person {
//     // age : number,
//     // name : string
//     [key : string] : number
// }
// type PersonKeys = keyof Person;
// let a : PersonKeys = 'name'
// type Car = {
//     color : boolean,
//     model : boolean,
//     price : boolean | number
// }
// // 전부 string 으로 바꿀려면..
// // Mapping A => B
// type TypeChanger<MyType> = {
//     [key in keyof MyType] : string
//             // 'color' | 'model' | 'price'
// }
// type 새로운타입 = TypeChanger<Car>
//# sourceMappingURL=part211index.js.map