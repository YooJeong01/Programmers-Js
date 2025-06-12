/* --------- */
/* Object    */
/* --------- */
// import {isObject} from '../utils/type.js'

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;



// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position : 'fixed',
  ['z-index'] : 10000,
  top : '50%',
  left : '50%',
  width : '60vw',
  maxWidth : 800,
  height : '40vh',
  minHeigt : 280,
  transform : 'translate(-50%, -50%)'
};


// authentication
// authorization

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uuid : crypto.randomUUID(),
  name : 'tiger',
  email : 'seonbeom2@gamil.com',
  isSignTn : false,
  permission: 'paid',
}




// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.


// 객체의 key만을 모아서 배열로 반환하는 객체의 static method => Object.keys();
const keys = Object.keys(authUser);

function getKeys(obj){
  let arr = [];
  for(const key in obj){
    if(Object.hasOwn(obj, key)){
      arr.push(key)
    }
  }
  return arr;
}

getKeys(authUser)




// 객체의 value만을 모아서 배열로 반환하는 객체의 static method => Object.values();
const values = Object.values(authUser);

function getValues(obj){
  let arr = [];
  for(const key in obj){
    if(Object.hasOwn(obj, key)){
      arr.push(obj[key])
    }
  }
  return arr;

}
getValues(authUser);





// 객체의 key,value를 모아서 배열로 반환하는 객체의 static method => Object.entries();
const entries = Object.entries(authUser);

function getEtries(obj){
  let arr = [];
  for (const key in obj){
    if(Object.hasOwn(obj, key)){
      arr.push([key, obj[key]])
    }
  }
  return arr;
}

getEtries(authUser);




// 제거 remove vs. 삭제 delete
//   비워두기       메모리 제거

// 제거
// authUser.email = null;

// 삭제
// delete authUser.email






function removeProperty(obj, key){
  // ex. 타입을 조사하고 그 타입 결과에서 [Object string] string 부분만 잘라서 그게 object와 같은지 비교
  if(isObject(obj)){
    obj[key] = null;
  } else {
    throw new Error('removeProperty 함수의 첫 번째 인수는 객체 타입만 사용할 수 있습니다.')
  }

}

removeProperty(authUser, 'email')













// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function createUser(name, age, phone){
  return {
    name,
    age,
    [calculateProperty + '번호'] : phone,
  }
}


// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


const student = {
  name,
  email,
  authorization,
  isLogin
}







// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}
console.clear();



/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
const arr = [10, 100, 1000, 10_000];
const [a1, , a3, a4, a5, a6=999] = arr;
console.log(a1, a3, a4, a5, a6);



const spans = document.querySelectorAll('span');
console.log(spans);

const [first, second] = document.querySelectorAll('span');
console.log(first, second);


console.clear();


for(const [k,v] of Object.entries(authUser)){
  console.log(k,v);
}

Object.entries(authUser).forEach(([k,v]) => console.log(k,v));



// 사용하지 않는 변수는 언더스코어로 보통 표시함
const mapArray = Object.entries(authUser).map(([_,v]) => v);
console.log(mapArray);


console.clear();























/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */


const salaries = {
  Apple : 400,
  Banana : 80,
  Carrot : 130,
}

// 앞에 salaries. 을 하지 않고도 변수처럼 사용이 가능하다
const {  Carrot:c, Apple:a, Banana:b, Donut:d = 30} = salaries
const {  Carrot, Apple, ...나머지 } = salaries
console.log(나머지);
console.log( a, b, c, d );

const {log:g} = console;
g('aa')

const data = {
  name : '홍길동',
  age : 28,
  address : '신사',
  phone : '010-1234-5678',
  job : '디자이너'
}

function createUserObject({ 
  name, 
  age = 30, // 기본값 주기
  address : _address,  // 별칭사용
  phone, 
  job, 
  ...rest // 파라미터 추가
  } = {} ){
  return {
    name, 
    age, 
    _address, 
    phone, 
    job,
    ...rest
  }
}


const user = createUserObject(data);

g(user);











