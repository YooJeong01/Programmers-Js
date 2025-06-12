/* ---------------- */
/* Operators        */
/* ---------------- */

// prompt는 취소를 누르면 null을 반환한다
// 띄어쓰기 -> 빈 문자
// const first = prompt('첫 번째 값') * 1;
// const second = prompt('두 번째 값') * 1;

// console.log(first + second);




// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자
let unary = +a;
console.log(unary);


// 이항 연산자
let binary = a*1 + b/1;
console.log(binary);


// 삼항 연산자
let ternary = a > 5 ? '네' : '아니오';
console.log(ternary);
console.log(`안녕 ${ a > 5 ? '반가워' : '반갑다'}`);


// 산술 연산자: 덧셈
let addition = 6+4;
console.log(addition);


// 산술 연산자: 뺄셈
let subtraction = 6-4;
console.log(subtraction);


// 산술 연산자: 곱셈
let multiplication = 6*4;
console.log(multiplication);


// 산술 연산자: 나눗셈
let division = 6/4;
console.log(division);


// 산술 연산자: 나머지
let remainder = 6%4
console.log(remainder);


// 산술 연산자: 거듭 제곱
let power = 6**2;
console.log(power);

console.clear();

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';
console.log(coercionTypeConversion);


// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6];
// [1,2,3].toString() + [4,5,6].toString() 한 꼴이다
// '1,2,3'+'4,5,6' = 1,2,34,5,6
console.log(onlyWorkDefaultValues);

let first = [1,2,3];
let second = [4,5,6];

// 전개 구문 spread syntax
// 전개 연산자 spread operator
console.log( [...first,...second], first.concat(second));

// rest parameter : 정해지지 않은 수(갯수)의 인자를 배열로 받을 수 있다
// 사용할땐 항상 매개변수 나열의 마지막에 적어야 함
// 인자가 배열로 전달된다
// (a,b, ... args)
function sum (...rest){

}



// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)


// 선,후 증감 연산자
// ++, --


// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // ?
// 2*5 + 5**3 = 10 + 125 = 135(5*5*5)
