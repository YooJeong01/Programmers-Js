let sum = (a,b) => a+b // 근데 여기 중괄호에 넣어버리면 값을 return하지 않겠다는 의미가 된다
/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...rest) => {
    // arrow function에서는 arguments(유사배열)가 존재하지 않는다 => 대신 rest(배열) 존재 (이름 바꿔 써도 됨)
    // console.log(arguments);  

    let total = 0;
    let total2 = 0;
    let total3 = 0;

     for(let value of rest){
         total += value;   
     }


    rest.forEach((a)=> total2 += a )

    total3 = rest.reduce((prev,curr)=> prev+curr, 0)


    return [total, total2, total3];
};

let _calcAllMoney = (...agrs) => agrs.reduce((acc, cur) => acc + cur, 0)

const result = calcAllMoney(1000, 3000, 5000, 2500);
console.log(result)


// 화살표 함수와 this

// 일반 함수는 나를 호출한 대상을 기준으로 this를 바인딩합니다.
function a(){
    console.log(this);
}

// window.a(); 랑 똑같음. this -> window가 된다
a();

// 화살표 함수는 this를 바인딩하지 않는다.
// 상위 컨텍스트에서 가져온다
const b = () => { console.log(this); }
b();



// 자바스크립트의 함수는 양면의 얼굴
// 1. 일반 함수 (normal function)
// 2. 생성자 함수 (constructor function)
// 일반 함수도 앞에 new 키워드만 붙여도 생성자 함수처럼 작동한다 => 무조건 객체 리턴
// 따라서 개발자끼리 규칙으로 생성자 함수의 이름 첫글자는 대문자로 작성한다
// 생성자함수랑 일반함수를 구분할 수 있게! -> 생성자 기능을 하는 함수는 class를 사용하자


function Button(text='empty'){
    return `<button>${text}</button>`
}
const btn1 = new Button();

class Button2 {
//~~
}

const btn2 = new Button2();

console.clear();




// this 찾기

const user = {
    name : '황유정',
    total : 0,
    grades : [50, 70, 40],
    totalGrades(){
        this.grades.forEach( g => this.total += g ); // total == 160;

        // 아래처럼 , 뒤에 this를 지정해주면 사용 가능하다
        this.grades.forEach(function(g){ this.total += g },this) // total == 320;

        this.total += this.grades.reduce((acc,cur) => acc+cur, 0); // total == 160;
        console.log(this.total);  
    },
    sayHi : function(){
        console.log(this);
        // constructor가 존재
    },
    sayHi2 : () => {
        console.log(this);
        // custructor X
    },
    sayHi3(){
        console.log(this);
        // custructor X
    }
}
user.totalGrades();



















/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (num, powerCount) => {
    let total = 1;
    for(let i=0; i<powerCount; i++){
        total = total * num
    }
    return total;
}

console.log(pow(2,53));

console.clear();









let _pow = (num, powerCount) => Array(powerCount).fill(null).reduce((acc)=> acc*num, 1)
console.log(_pow(2,53));
 



// repeat(text: string, repeatCount: number): string;
let repeat = (str,repeatCnt) => Array(repeatCnt).fill(str).reduce((acc,cur) => acc+cur )
console.log(repeat("Hello!👋 ",3))

// 범쌤 코드
let __repeat = (str, repeatCnt) => Array(repeatCnt).fill(null).reduce(acc => acc + str, '');
console.log(__repeat("Hello!👋 ",3))



let _repeat = (text, repeatCnt) => {
    let result = '';
    for(let i = 0; i<repeatCnt; i++){
        result += text;
    }
    return result;
}
console.log(_repeat("Hello!👋 ",3));