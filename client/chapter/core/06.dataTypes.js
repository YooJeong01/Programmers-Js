/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(empty, typeof empty);

// 2. 값이 할당되지 않은 상태
let noValue;
console.log(noValue, typeof noValue);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let str1 = "str1"; // string literal
let str2 = 'str2';
let str3 = `str3 ${str2} ${str1}`; 
const str4 = new String('hello'); // string constructor function
console.log(str3, typeof str3, str4, typeof str4);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let int = 123; // number literal
let float = 123.2345;
const num = new Number(20); // number constructor function
console.log(typeof int, typeof float, num, typeof num);


// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let bigint = 123n;
console.log(typeof bigint);

// 6. 참(true, yes) 또는 거짓(false, no)
let isTrue = Boolean(1==2);
console.log(isTrue, typeof(isTrue));

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const test = function(){
    console.log('test1');
}
console.log(test, typeof test);

const newObj = new Object({}); // object constructor function으로 생성하기


// 8. 고유한 식별자(unique identifier)
const uuid1 = Symbol('uuid');
const uuid2 = Symbol('uuid');
console.log(uuid1, typeof uuid1);
console.log(uuid1 === uuid2);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

console.clear();


// Object

const obj = {
    // property = {key:'value'}
    name : 'tiger',
    age :  30,

    // normal function method
    sayHi : function(){
        console.log('sayHi',this);
    },
    // 얘는 arrow function이라 this 호출시 window를 가리키게 된다
    sayHi2: () => {
        console.log('sayHi2', this);
    },
    //concise method, 얘를 제일 많이 씀!!
    sayHi3(){
        console.log(this);
    }
}
// obj.sayHi(); 
// obj.sayHi2();
const test1 = obj.sayHi;
const test2 = obj.sayHi2;
console.log(test1());
console.log(test2()); //=> undefined;

console.log(obj);
// Array

// const arr = ['a','b','c',[1,2,3],123,{name:'tiger'}]
// const arr2 = new Array([]);
// console.log(arr, arr2);

// // function
// // 함수는 무조건 값을 반환한다. undefined라도. 안보일뿐이다!

// function a() {
//     console.log(' a 함수가 실행됐습니다. ');
// }

// function 붕어빵들(재료) {
//     return `따끈하고 맛있는 ${재료} 맛 붕어빵입니다.`
// }

// const 슈붕 = 붕어빵들('슈크림');
// const 피붕 = 붕어빵들('피자');

// console.log(슈붕, 피붕);



// this


