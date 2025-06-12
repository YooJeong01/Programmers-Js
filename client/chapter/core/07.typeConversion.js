// 문자형 변환
// 문자형 명시적 변환
let str = 123;
str = String(str);
console.log(str, typeof str);

// 문자형 암시적 변환
const str2 = 123;
const str3 = str2+'';
const str4 = str2+'0'; // 단 이 경우는 문자 뒤에 0인 문자가 하나 더 붙는다
console.log(typeof str3, typeof str4);





// 숫자형 변환
// 숫자형 명시적 변환
const num = "123";
const num2 = Number(num);
console.log(typeof num2);

// 숫자형 암시적 변환을 명시적인것처럼 쓰기(코테 문제 풀이보면 종종 있음)
const num6 = '123'*1
const num7 = '123' / 1
const num8 = +'123'
console.log(num6, typeof num6);
console.log(num7, typeof num7);
console.log(num8, typeof num8);

// 숫자형 암시적 변환
const num3 = "12" / "2"
console.log (num3, typeof num3);

const num4 = "123" - "23"
console.log(num4, typeof num4);

// cf. 단 + 연산자만 문자로 계산된다 (문자 연결할때 + 쓰기 때문)
const num5 = "123" + "45"
console.log(num5, typeof num5);

// cf. 형변환이 안되는 케이스
console.log(Number('10a')); // undefined
console.log(Number('10a') + 10 ); // undefined + 10

// cf. null = 0 처럼 취급됨
console.log(null + 10);








// Boolean 형 변환
// 비어있지 않은 문자열은 언제나 true이다 (공백도 값으로 여긴다)

// Boolean의 명시적 형변환
console.log( Boolean(1) ); // t
console.log( Boolean(0) ); // f
console.log( Boolean("")); // f
console.log( Boolean("0")); // t
console.log( Boolean(' '));  // t
console.log( Boolean('hello')); // t
console.log( Boolean(-1)); // t
console.log( Boolean(-100)); // t
console.log( Boolean(23)); // t
console.log( Boolean({})); // t, 얘는 값이 없어도 생성을 했기 때문에 있다고 본다
console.log( Boolean([])); // t, 얘는 값이 없어도 생성을 했기 때문에 있다고 본다
console.log( Boolean(NaN)); // f
console.log( Boolean(undefined)); // f
console.log( Boolean(null)); // f

// Boolean의 암시적 형변환
console.log(!!''); // f
console.log(!!0); // f
console.log(!!1); // t
console.log(!!'0'); // t


console.clear();



/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2025;
console.log(YEAR);
const string1 = String(YEAR);
const string2 = YEAR+'';

console.log(string1, typeof string1);
console.log(string2, typeof string2);


// undefined, null
const day = null
console.log(day+'', typeof(day+''));
let udef;
console.log(undefined+'', typeof(undefined+''));

// boolean
const fail = false
console.log(fail+'', typeof(fail+''));

/* 데이터 → 숫자 ----------------------------------------------------------- */
// string
const tmp = '123';
console.log(Number(tmp), typeof(Number(tmp)));
console.log(tmp*1, typeof(tmp*1));
// undefined
console.log(udef/1, typeof(udef/1));

// null
console.log(day*1, typeof(day*1));
// boolean
console.log(fail/1, typeof(fail/1));

// numeric string
const width = '120.5px';
console.log(parseFloat(width));  // parse@() 로 숫자만 도출할수있다!
console.log(parseInt(width,8) + 'px'); // 8진수로 변환하기


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 
console.log(!!{}); // t
console.log(!![]); // t
console.log(!![false]); // t
console.log(Boolean(()=>{})); // t
console.log(!!(()=>{})); // t







