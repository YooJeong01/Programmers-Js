/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

Object.prototype.nickName = 'tiger';
// console.log('nickName' in javaScript);



// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?


// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고있는지(has) 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// console.log(javaScript.hasOwnProperty.call('creator')); // true
// console.log(({}).hasOwnProperty.call(javaScript,'creator123')); // false
// console.log(Object.prototype.hasOwnProperty.call(javaScript,'nickName')); // false

console.log(Object.hasOwn(javaScript,'nickName'));
console.log(Object.hasOwn(javaScript,'creator'));





// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

for (const key in javaScript){
    //원본이 훼손됐을 여지가 있기 때문에! 아래처럼 2차 필터링을 사용한다

    //if(Object.prototype.hasOwnProperty.call(javaScript,key))
    if(Object.hasOwn(javaScript, key)){ // 확실한 필터링을 위해 사용함
        console.log(key);
        console.log(javaScript.key); // undefined => 이건 왜 접근이 안되는가?
        console.log(javaScript[key]);        
    }
}

const obj = {};

// 이렇게 프로퍼티 타입을 정해서 디테일하게 추가할 수 있음
// 아래 예시는 enumerable = false가 기본임
// writable : false는 값을 재할당하고 나면 바뀐것처럼 보이지만
// 다시 조회해보면 값이 바껴있지 않다
// configurable : false => 해당 키를 제거하지 못하게 함 (delete가 안먹힌다)
// .defineProperty() : 속성 하나만 정의하는 버전
Object.defineProperties(obj, {
    age: {
        value : 30,
        enumerable : true,
        writable : false,
    },
    email: {

    }

})

Object.defineProperty(obj, 'from',{
    value: "Korea",
    writable : true,
    configurable : true,
})