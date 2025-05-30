// // 호이스팅 : 선언부가 최상단으로 끌어올려지는 현상
// // 이 코드는 a가 먼저 선언만 되고, 그 상태에서 log가 실행된다 
// // 그리고 나서 값이 할당 된다
// // console.log(a);
// // var a = 10;

// // 반면에 let, const는 TDZ에 들어가 undefined로 값이 할당 되는게 아니라 아예 빈 공간이 되어서 error가 발생한다
// // console.log (b);
// // console.log (c);
// // let b = 20;
// // let c = 30;


// // 함수2()는 함수 자체는 내용까지 전부 다 호이스팅 되기 때문에 실행되지만, 함수 내부적으로 호이스팅이 변수의 선언부만 호이스팅이 일어나 let 안녕='Hello'전에 console.log(안녕)을 실행하게 되면 에러가 발생한다. var의 경우는 잘 나온다 (why? 전역이니까)
// 함수1();
// function 함수1() {
//     let 안녕 = 'Hello';
//     console.log(안녕);
//     return '리턴';
// } 

// 함수2();
// function 함수2() {
//     console.log(안녕);
//     let 안녕 = 'Hello!';
//     return '리턴';
// } 


// /* -------------------------------------------- */
// /*                  Legacy var                  */
// /* -------------------------------------------- */

// // var로 선언한 변수의 스코프는 함수 스코프이거나 전역 스코프입니다.

// var temp = 5;
// console.log(temp);

// function test(){
//     var temp2 = 6;
//     console.log(temp);
//     console.log(temp2);
// }
// test();
// console.log(temp2);

// // 블록 기준으로 스코프가 생기지 않기 때문에 블록 밖에서 접근 가능합니다.

// var temp = 1;
// console.log(temp);
// {
//     temp = 3;
//     console.log(temp);
// }

// // var는 변수의 중복 선언을 허용합니다

// var temp = 5;
// console.log(temp);


// // 선언하기 전 사용할 수 있는 var

// temp = 6;
// console.log(temp);


