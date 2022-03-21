
// // 조건문으로 타입만들기 & infer
// 3 > 1 ? console.log('맞음') : console.log('아님')

// // 파마리터로 string 집어놓으면 string // 그게 아니면 unknown
// type Age<T> = T extends string ?  string : unknown

// let a : Age<string>
// let a2 : Age<number>

// // type if문은 삼항 연산자로

// type 타입추출<T> = T extends (infer R)[] ? R : unknown
// type a = 타입추출<string[]>

type 타입추출<T> = T extends ( () => infer R) ? R : unknown

type a = 타입추출<() => void>

type b = ReturnType< ()=> void >


