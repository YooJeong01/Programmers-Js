/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a&&b;
console.log(AandB);

// Logical AND Assignment;
// a &&= b
// console.log(a); // 공백 출력


// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// Logical OR Assignment;
// a ||= b;
// console.log(a); // 10



// 부정 연산자
let reverseValue = value;
console.log(reverseValue);



// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
// let whichFalsy = true && ' ' && [] && {thisIsFalsy : false};


// 첫번째 Truthy를 찾는 연산 (||)
// let whichTruthy = false || '' || [2,3].length || {thisIsTruty : true};

console.clear();

// 내 코드
let userName = prompt("who's there?",'');
if (userName!=null){
    userName = userName.toLowerCase();   
}
if (userName == 'admin') {
    let password = prompt("Password?");
    if (userName!=null) {password = password.toLowerCase();}
    if (password == 'themaster'){
        console.log('Welcome!');
        // else if ( userName === null || userName.replace(/\s*/g,'') === '')
    } else if (password!=null && password.length > 0) {
        console.log('Wrong password');
    } else {
        console.log('Canceled');
        
    }
} else if (userName!=null && userName.length > 0) { 
    console.log("I don't know you");
} else {
    console.log('Canceled');
    
}


// 범쌤 코드

const userName2 = prompt('누구십니까?');


// ver1. 옵셔널 체이닝을 사용해 에러 방지
if(userName2?.toLowerCase() === 'admin'){
    const password = prompt('비밀번호는?');

    if(password?.toUpperCase() === 'THEMASTER') {
        console.log('로그인 성공');
         
    } else if (password === null) {
        console.log('취소했습니다!');
        
    }
    else {
        console.log('로그인 실패');
        
    }
}
else if(userName2 === null || userName2.replace(/\s*/g,'')===''){
    console.log('취소했습니다!');
    
} else {
    console.log('로그인 실패');
    
}


// ver2. function return 활용
function logIn(){
    const userName2 = prompt('누구십니까?');
    if (!userName2) return;

    if(userName2.toLowerCase() === 'admin'){
        const password = prompt('비밀번호는?');

        if(password.toUpperCase() === 'THEMASTER') {
            console.log('로그인 성공');
            
        } else if (password === null) {
            console.log('취소했습니다!');
            
        }
        else {
            console.log('로그인 실패');
            
        }
    }
    else if(userName2 === null || userName2.replace(/\s*/g,'')===''){
        console.log('취소했습니다!');
        
    } else {
        console.log('로그인 실패');
        
    }
}