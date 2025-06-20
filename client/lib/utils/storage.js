import {isString} from '../utils/type.js'

console.log('storage');
const {localStorage:storage} = window;






const obj = {
    name : 'tiger',
    age : 30,
    do(){
        return 'nice'
    }
}






// storage.setItem('user', JSON.stringify(obj));
// console.log(JSON.parse(storage.getItem('user')));


export function setStorage(key, value){
    return new Promise((resolve, reject)=>{
        if(isString(key)){
            storage.setItem(key,JSON.stringify(value));
            resolve()
        } else {
            reject({message:'setStorage 함수의 첫 번째 인수는 문자 타입이어야 합니다.'})
        }
    })
}
// setStorage('user',obj)
// .then(()=>{
//     console.log('저장성공');
// })


export function getStorage(key){
    return new Promise((resolve, reject)=>{
        if(isString(key)){
            const value = JSON.parse(storage.getItem(key));
            resolve(value);
        } else {
            reject({message:"getStorage 함수의 첫 번째 인수는 문자타입이어야 합니다."})
        }
    })
}

// const {name,age} = await getStorage('user')
// console.log(name,age);

// getStorage('user')
// .then((res)=>{
//     console.log(res)
// })



export function deleteStorage(key){
    return new Promise((resolve, reject)=>{
        !key ? storage.clear() : storage.removeItem(key);
        resolve()
    })
}


deleteStorage('user')
.then(()=>{
    console.log('삭제 성공')
})





