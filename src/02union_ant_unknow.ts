
// // Uniotype (2개이상 타입)
// let 회원 : number | string = 123;

// let 회원들:(number|string)[] = [1,'2',3];

// let 오브젝트 : {a:string|number} = {a:123}

// // any타입 >> 모든 자료형 허용해줌 (그럼 타입스크립티는 쓰는 의미가 없음?)
// // => 타입실드 해제문법
// // let 이름 : any;
// // 이름 = 123;
// // 이름 = [];

// // unknow형 = any >> 모든자료형 허용
// // any보다 안전함
// let 이름 : unknown;
// // 이름 = 123;
// // 이름 = {};
// let 나이 : unknown = 1;

// // typescript는 엄격함

// // string + 1 (허용)
// // number + 1 (허용)
// // string|number + 1 (안됌)
// 나이 - 1;

// // 향후 Narrowing / Assertion 씀

