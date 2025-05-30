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
let str1 = "str1";
let str2 = 'str2';
let str3 = `str3 ${str2} ${str1}`
console.log(str3, typeof str3);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let int = 123;
let float = 123.2345;
console.log(typeof int, typeof float);


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

// 8. 고유한 식별자(unique identifier)
let sym = Symbol('uu');
console.log(typeof sym);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object

// Array

// function

// this


