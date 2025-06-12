/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const people = [
    {
        id : 0,
        name : 'kim',
        age : 38,
        job : '프로게이머',
        imgSrc : 'https://randomuser.me/api/portraits/med/men/75.jpg',
        imgAlt : '대체 텍스트입니다...'
    },
    {
        id : 1,
        name : 'park',
        age : 15,
        job : '공주님',
        imgSrc : 'https://randomuser.me/api/portraits/med/women/72.jpg',
        imgAlt : '대체 텍스트입니다...'
    },
    {
        id : 2,
        name : 'choi',
        age : 41,
        job : '회사원',
        imgSrc : 'https://randomuser.me/api/portraits/med/men/10.jpg',
        imgAlt : '대체 텍스트입니다...'
    },
]


/* 요소 순환 ---------------------------- */

// forEach

function user(user){
    console.log(user);
    
}

people.forEach(user);

// people.forEach((i)=>{
//     user(i)
// })

const spans = document.querySelectorAll('span');

spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => {
        e.currentTarget.style.color = 'orange';
        console.log();
    })
})



console.clear();



/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift

// const reverse = people.reverse()
const reverse = people.toReversed();
console.log(reverse);
console.log(people);



// const splice = people.splice(1, 1, {name:'Yoo'})
const splice = people.toSpliced(1, 1, {name:'Yoo'});
console.log(splice);
console.log(people);


const arr = [5,4,7,3,8,3,1];
function compare(a,b){
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

// const sort = arr.sort(compare)
const sort = arr.toSorted(compare)
console.log(sort);
console.log(arr);



/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

// 사람들의 직엄만을 모아놓은 배열 반환
const jobs = people.map(user=>user.job)
console.log(jobs);

// 현재 나이에서 전부 +2 해서 새로운 배열 반환
const newAge = people.map(user=>user.age+2)
console.log(newAge);

const tags = people.map((user)=> {
  
  const template = /* html */ `
    <li>
      <figure>
        <img src="${user.imgSrc}"/>
        <figcaption>${user.imgAlt}</figcaption>
      </figure>
      <ul>
        <li>이름 : ${user.name}</li>
        <li>나이 : ${user.age}</li>
        <li>직업 : ${user.job}</li>
      </ul>
    </li>
  `
  return template

})
tags.forEach((li)=> document.querySelector('ul').insertAdjacentHTML('beforeend',li))


/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

// find는 대상의 자료형을 반환한다
// 하나만 찾는다
const az = people.find((user)=>{
    return user.age > 40
})
console.log(az);

/* 요소 걸러내기 --------------------------- */

// filter
const mz = people.filter( user => user.age < 30  );
console.log(mz);


/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

const sumAge = people.reduce((acc, cur)=>{
    return acc + cur.age
}, 0)
console.log(sumAge);


const template = people.reduce((htmlCode, user) => {
    return htmlCode + `<li>${user.name}, ${user.age}, ${user.job}</li>`
}, '')

console.log(template); // 문자로 반환함

// 문자로 반환했으니 바로 랜더링 해줄수 있다 => 문자 아니면 안되나?
document.querySelector('ul').insertAdjacentHTML('beforeend', template);




/* string ←→ array 변환 ------------------ */
const _arr = '안/녕/하/세/요';

// split
// join

const stringToArray = _arr.split('/');
console.log(stringToArray);

const arrayToString = stringToArray.join('');
console.log(arrayToString);

console.clear();




// ========== 함수형 프로그래밍 ================


const products = [
    {name:'냉동 만두', price: 10000, brand: '비비고'},
    {name:'냉동 피자', price: 15000, brand: '오뚜기'},
    {name:'냉동 새우', price: 12000, brand: '하림'},
    {name:'냉동 치킨', price: 11000, brand: '곰곰'},
]



const _forEach = (f,i) => {
    for( const a of i ) f(a);
}

_forEach((item) => {
    console.log(item);
    
},products)





// 콜백함수(f)와 이터레이터(i)를 받는다
// 콜백함수가 인자로 들어올땐 실행이 되는게 아니라 함수 자체를 받는거다
// 그래서 안에서 또 실행을 해줘야한다
const _map = (f, i) => {
    const arr = [];

    for (const a of i){
        arr.push(f(a));
    }

    return arr;
}


/*
보통 다용성을 높이기위해서는 콜백을 인자로 받는다
*/

const newArray = _map(item => item.brand, products) ; // 콜백함수, 이터레이터 넣어주기
console.log(newArray);



const _filter = (f,i) => {
    const arr = [];

    for(const a of i){
        if(f(a)) arr.push(a);
    }

    return arr;
}

// 화살표 함수에 {} 이거 치면 결과값 안나온다!
const product = _filter((item)=>item.price < 12000, products);
console.log(product);
