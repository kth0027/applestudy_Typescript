let 이름:string = 'kim';
// 이름 = 123; 에러

let 나이:number = 50;

let 결혼했니:boolean = true;

// undefined, null 타입도 있음


// array 자료에 타입지정 가능
let 회원들1 :string[] = ['kim', 'park']

// 혼용사용시 UnionType

// object 자료에도 타입 지정 가능
let 회원들2:{member1:string, member2:string} = {member1:'kim', member2:'park'}

// 타입지정 원래 자동으로 된다. 타입지정 문법 생략
let 회원들 = 'park'

let 회원들3 = 123;