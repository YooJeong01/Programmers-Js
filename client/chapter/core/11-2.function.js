// // 콜백 함수

// function ok(){

// }

// function cancel(){

// }

// function ask(question, yes, no, callback){
//     // let question = '동의합니까?' 
//     // let yes = function ok(){ } // 콜백함수
//     // let no = function cancel() { } // 콜백함수

//     yes(); // 함수 자체를 전달받았기 때문에 함수처럼 쓸 수 있다
//     no();

// }

// // 콜백함수는 보통 이름이 없는 형태로 함수를 전달한다
// ask('동의합니까?', ok, cancel, function(){});

/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function(){
    // 집합 데이터
    // 함수 안에서만 접근 가능한 인수들의 집합 객체 : arguments (반복가능한 유사 배열)

    let total = 0; // 여기에 0을 할당하지 않으면 return값이 NaN으로 나온다
    // for...of
    // for(const value of arguments){
    //     total += value;
    // }


    // 배열의 메서드
    // forEach, reduce, map, filter ...

    // 배열 아닌것을 배열로 만드는 방법
    // arguments 자체가 배열이 아닌데 instance method를 쓰려고 하니
    // 빌려쓰는 구조 .call()을 붙여준다
    const arr = Array.prototype.slice.call(arguments); // array instance method
    //console.log(arr);
    
    // static method라 call을 붙여줄 필요가 없다 (모든 대상이기 때문에)
    const arr2 = Array.from(arguments); // array static method
    //console.log(arr2);

    // spread syntax;
    const arr3 = [...arguments];
    //console.log(arr3);


    // forEach
    // arr3.forEach(function(value, index){
    //     console.log(index, value);
    //     total+=value;
    // })
    // console.clear();


    // reduce
    // 0은 초기값을 설정한 것이다
    // 초기값을 설정하지 않으면 defualt로 처음 요소가 previous가 된다
    // reduce는 값을 내보내야하기때문에 return 꼭 해주기!
    // 누산기처럼 작동한다
    // 초기값에 따라서 반환하는 값의 타입이 달라진다({}, [] 등)
    // total = arr.reduce(function(prev,curr,index){
    //     // console.log('prev :'+ prev);
    //     // console.log('curr :'+ curr);
    //     return prev + curr;         
    // },0);

    // // reduce를 arrow function 형태로 많이 쓴다
    // return arr.reduce((prev,curr)=> {return prev+curr});


    // 유사배열을 한 번만 쓰고 반환할거라면? forEach 빌려쓰기(.call)
    // argu1 : 빌리는 대상
    // argu2 : 인수
    // forEach는 원래 콜백함수를 인자로 갖는데, .call을 사용하게 되어서 인자를 못받기 때문에
    // call() 안에 넣어준다
    // Array.prototype.forEach.call(arguments, function(value){
    //     total+=value;
        
    // });  



    // 부모 바꿔치기
    // arguments.__proto__ = Array.prototype;
    // console.log(arguments); // [[Prototype]] : Array();

    return total;

};
const result = calculateTotal(1000, 3000, 5000, 2300);
console.log(result);


// .map(function(){})
// 규칙이 적용된 새로운 배열을 반환. 값을 꼭 return해주자
const friends = ['a','b','c','d'];
const front = friends.map(function(name, index){
    console.log(index, name);
    return `[FE6]${name}`;
});
console.log(front);



console.clear();







// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){};
anonymousFunctionExpression();


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello(){};
namedFunctionExpression();
// 함수 이름은 함수 내부에서만 쓸 수 있다 hello()로 사용 불가능


// 콜백 함수 (표현)식
let cb = function(condition, success, fail){
  console.log(condition);
  console.log(success);
  console.log(fail);
  success();
  fail();
};

cb(
  true, 
  function (){console.log('성공입니다.');},
  function (){console.log('실패입니다.');}
);
console.clear();



// 콜백함수 예제1
// 안쪽의 변수를 밖으로 뽑아쓸때 콜백함수를 많이 쓴다

function movePage(url, success, fail){
  if(url.includes('https')){
    // 1. 안쪽 변수를
    success(url)
  } else{
      fail()
  }  
}

movePage(
  'https://www.naver.com',
  function(url){
    // 2. 밖으로 뽑음
    console.log(`3초 뒤 ${url}로 이동합니다.`);
    // setTimeout(()=>{
    //   location.href = url
    // },3000);
  },

  function(){
    console.log('잘못된 url 정보를 입력하셨습니다.');
  }
)

// 콜백함수 예제2
// function getGeolocation(success){
//   navigator.geolocation.getCurrentPosition(function(so){
//     // 웹브라우저에서 받아오는거라 시간 소요됨
//     const data = so.coords.latitude;
//     success(data);
//   })
// }

// getGeolocation(function(value){
//   console.log(value);
  
// })



console.clear();


// 함수 선언문 vs. 함수 (표현)식






// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;
// 오늘날 캡슐화에는 많이 쓰지 않는다
// 클로저에 자주쓴다

// encapsulation 캡슐화

// 만듦과 동시에 실행이 된다
const MASTER = (function(g){
  console.log(g); // 변수 던진거 alias 가능
  
  var uuid = 'safsdf@asdfsadf'
  return {
    getKey(){
      return uuid
    },
    setKey(value){
      uuid = value;
    }
  }
})(window)


console.log(MASTER);
console.log(MASTER.getKey());
console.log(MASTER.setKey('@#!@#!$asdf'));
console.log(MASTER.getKey());

console.clear();


// 범쌤 코드
function rem2 (pxValue, base = 16) {

  if(!pxValue){
    throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값입니다.');
  }
  if(typeof base === 'string'){
    throw new TypeError('rem 함수의 두 번째 인수는 숫자 타입이어야 합니다.')
  }
  if(typeof pxValue === 'string'){
    pxValue = parseInt(pxValue);
  }
  return pxValue/base + 'rem';
}


// 내 코드
function rem(value, base = 16){
  if(!parseInt(value)){
    throw new Error ("값을 잘못 입력하셨습니다");
  }
  if(typeof value === 'string' && parseInt(value)) {
    value = parseInt(value);
  }
  return `${value/base}rem`
}

// console.log(rem('안녕'));


console.assert(rem(20) === '1.25rem')
console.assert(rem('25px') === '1.5625rem')
console.assert(rem('30px',10) ==='3rem')

console.log(rem('20px'));
console.log(rem(25));
console.log(rem('30px',10));


console.assert(rem2(20) === '1.25rem')
console.assert(rem2('25px') === '1.5625rem')
console.assert(rem2('30px',10) ==='3rem')

console.log(rem2('20px'));
console.log(rem2(25));
console.log(rem2('30px',10));


console.clear();






// 범쌤코드
function setCss(node,prop,value){

  if(typeof node === 'string') node = document.querySelector(node);
  
  if(!(prop in document.body.style)) {
    throw new ReferenceError('setCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.');
  }
  if(!value) throw new Error('setCss 함수의 세 번째 인수는 필수 입력 값 입니다.');
  
  node.style[prop] = value;

}



// 내 코드
function setCss2(element, prop, value){
  // element가 셀렉된 채로 건내질 수 있기때문에, 아닌 경우에 대해서 처리
  if(typeof element === 'string') {
    if(!document.querySelector(element)){ // 타겟이 존재하는게 아닌 경우
      throw new Error('존재하는 엘리먼트를 입력해주세요');
    } else {
      element = document.querySelector(element);
    }
  }

  if(!(prop in document.body.style)){
    throw new TypeError('setCss 함수의 두 번째 인수는 유효한 css 속성이어야 합니다.')
  }

  if(!value) throw new Error('setCSS 함수의 세 번째 인수는 필수 입력 값입니다.')

  // 점 표기법은 문자 안되니까
  // 대괄호 표기법을 쓰자!
  element.style[prop] = value;

}

setCss('.first', 'color', 'orange');
setCss2('.first', 'color', 'orange');

const second = document.querySelector('.second');
setCss(second, 'color', 'yellowgreen');
setCss2(second, 'color', 'yellowgreen');
//setCss('.fir', 'color', 'orange');


// 범쌤 코드
function getCss(node,prop){

  if(typeof node === 'string'){
    node = document.querySelector(node)
  }

  if(!(prop in document.body.style)){
    throw new ReferenceError('getCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.');
  }

  return getComputedStyle(node)[prop]
}


// 내 코드
function getCss2(element,prop){
  if(typeof element === 'string') {
    if(!document.querySelector(element)){
      throw new Error('존재하는 엘리먼트를 입력해주세요');
    } else {
      element = document.querySelector(element);
    }
  }

  if(!(prop in document.body.style)){
    throw new TypeError('setCss 함수의 두 번째 인수는 유효한 css 속성이어야 합니다.')
  }

  return getComputedStyle(element)[prop]
}

const fontSize = getCss('.first','font-size');
const background = getCss('.first','background-color');
console.log(fontSize);
console.log(background);


console.clear();







// set과 get 모두 수행하는 함수 만들기
// setCss와 getCss 차이는 value에서 결정난다
function css(node, prop, value){
  return !value ? getCss(node,prop) : setCss(node,prop,value)
}

const _css = (node, prop, value) => !value ? getCss(node,prop) : setCss(node,prop,value);



css('.first', 'color' );
css('.first', 'color', 'hotpink');
