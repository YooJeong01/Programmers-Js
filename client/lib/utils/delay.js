import { getNode } from '../dom/getNode.js'
import { isNumber, isObject } from './type.js'
import { xhrPromise } from './xhr.js';
import { insertLast } from '../dom/insert.js'

function delay(callback, timeout = 1000){
    setTimeout(callback, timeout)
}



const first = getNode('.first');
const second = getNode('.second');



// delay(()=>{
//     first.style.top = '-100px';
//     second.style.top = '100px';
//     delay(()=>{
//         first.style.transform = 'rotate(360deg)';
//         second.style.transform = 'rotate(360deg)';
//         delay(()=>{
//             first.style.top = 0
//             second.style.top = 0
//         })
//     })
    
// })


/*
Promise를 사용하는 이유?
- 콜백의 한계 (콜백 지옥)
- 가독성을 위해
- 비동기 작업을 순차적으로 처리
*/

const defaultOptions = {
    shouldRejected : false,
    data : '성공',
    errorMessage : '알 수 없는 오류',
    timeout : 1000,
}







function delayP(options) {
    let config = {...defaultOptions}
    // 전달받은 인자(=options)가 숫자인 경우
    if(isNumber(options)){
        // 타임아웃 시간 재할당
        config.timeout = options;
    }
    // 전달받은 인자(=options)가 객체인 경우
    if(isObject(options)){
        // config 객체 값 재할당
        config = {...defaultOptions, ...options};
    }
    const {shouldRejected, timeout, errorMessage, data} = config;


    // 실제로 promise 쓸 때는 setTimeout 안 쓴다
    // 서버와의 통신이 들어가겠죠?
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            if(!shouldRejected){
                //payload 내가 넣고주고 싶은거, 원하는 형태로 전달하면 됨 ㅇㅇ 
                resolve(data);
            } else {
                reject({message:errorMessage});
            }
        },timeout)
    })
}

// delayP(1000)

// delayP({errorMessage : '에러~~~'})




// delayP()
// .then(()=>{
//     first.style.top= '-100px',
//     second.style.top = '100px'

//     // 시간만큼 미뤄주기 위해서 계속 delayP를 반환함
//     // delayP가 promise를 리턴하기때문에 이렇게 사용할 수 있다
//     return delayP();
// })
// .then(()=>{
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';

//     return delayP();
// })
// .then(()=>{
//     first.style.top = 0;
//     second.style.top = 0;
// })




// async await
// async : 무 조 건 promise object를 리턴하는 함수
// await : 코드 실행 흐름 제어
//         result의 값을 꺼낼 수 있다

async function f(){
    return 10;
}

const a = await f();

// console.log(a)


// IIAFE
// (async()=>{
//     const a = await f();
// })


function delayA() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('성공')
        },2000)
    })
}
const result = await delayA();

// console.log(result);



async function 라면끓이기(){

    const a = await delayP({data:'물'})
    console.log(a);

    const b = await delayP({data:'불 켜기'})
    console.log(b);

    const c = await delayP({data:'스프'})
    console.log(c);


    console.log('면');
    console.log('계란');
    console.log('먹기');
    
}

// 라면끓이기();






async function getData(){
    const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/40')

    const src = data.sprites.other.showdown['front_default'];
    insertLast(document.body, `<img src="${src}" alt="" />`)
}

getData();


















