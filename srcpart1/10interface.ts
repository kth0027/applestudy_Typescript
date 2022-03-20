// type Square = {color : string, width : number}

// let 네모 : Square = {color : 'red', width : 100}

type Animal = {
    name : string
}

type Cat = {
    age : number
} & Animal

interface Student {
    name : string
}

interface Student {
    score : number
}

interface Teacher extends Student {
    name : string,
    age : number
}

let 학생 = {
    name : 'kim'
}

let 선생 = {
    name : 'kim',
    age : 20
}

// 인터페이스 사용시 장점? : extends 로 복사 가능하다.