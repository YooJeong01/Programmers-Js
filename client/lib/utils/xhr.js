export const END_POINT = 'https://jsonplaceholder.typicode.com/users';

/* 
  [readyState]
  0: uninitialized
  1: loading
  2: loaded
  3: interactive
  4: complete   성공 | 실패
*/


// callback

function xhr({
  method = 'GET',
  url = '',
  success = null,
  fail = null,
  body = null,
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
} = {}){
  
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([k,v])=>{
    xhr.setRequestHeader(k,v);
  })
  

  xhr.addEventListener('readystatechange',()=>{
    
    const {readyState, status, response} = xhr;

    if(readyState === 4){
      
      if(status >= 200 && status < 400){
        
        const data = JSON.parse(response);

        success(data)
        
      }else{
        console.error('데이터 로드 실패!');
        fail({message:'오류가 발생했습니다!'})
      }
    }
  })

  xhr.send(JSON.stringify(body));
}

 
const obj = {
  name:'tiger',
  age:30,
  email:'tiger@gmail.com'
}

// 하 범쌤코드인데 서버에서 500 에러가 난다
// xhr({
//   method:'DELETE',
//   url:`${END_POINT}/4`,
//   success: (data)=> console.log(data),
//   fail: ({message})=> console.log(message),
// })



// compound pattern
xhr.get = (url, success, fail)=> {
    xhr({ url, success, fail })
}


xhr.post = (url, body, success, fail) => {
    xhr({
        method : 'POST',
        url,
        body,
        success,
        fail
    })
}


xhr.delete = (url,success,fail) => {
  xhr({method:'DELETE',url,success,fail})
}


xhr.put = (url,body,success,fail) => {
  xhr({
    method:'PUT',
    body,
    success,
    fail
  })
}

xhr.patch = (url,body,success,fail) => {
  xhr({
    method:'PATCH',
    body,
    success,
    fail
  })
}

// -------------------- 06.19 ------------------------------

const defaultOptions = {
  method:'GET',
  url:'',
  body:null,
  errorMessage:'서버와의 통신이 원활하지 않습니다.',
    headers:{
    'Content-Type':'application/json',
    'Access-Controll-Allow-Origin':'*'
  },
}



export function xhrPromise(options={}){

  // 객체 합성
  const {method, url, body, headers, errorMessage:message} = {
    ...defaultOptions, 
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  
  }

  // 구조 분해 할당
  // const {method, url, body, headers, errorMessage:message} = config;

  const xhr = new XMLHttpRequest();
  xhr.open(method, url);




  if (method !== 'DELETE') {
    Object.entries(headers).forEach(([k,v])=>{
      xhr.setRequestHeader(k,v);
    })
  }
  xhr.send(body ? JSON.stringify(body) : null);




  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', ()=>{
      
      const {readyState, status, response} = xhr;
      if(readyState === 4){
        if(status >= 200 && status < 400){
          resolve(JSON.parse(response));
          
        } else {
          reject({message});
        }
      }
    })
  })



}


// xhrPromise({
//   method:'POST',
//   url: END_POINT,
//   body: obj,
//   headers:{
//     'Content-Type':'application/json',
//     'Access-Controll-Allow-Origin':'*'
//   },
// }).then(
//   (res)=>{
//   console.log(res);
//   console.log(res.name);
// },(err)=>{
//   console.log(err);
  
// })


// compound method
xhrPromise.get = (url)=> xhrPromise({url})
xhrPromise.post = (url, body) => xhrPromise({method : 'POST',url, body})
xhrPromise.delete = (url) =>  xhrPromise({method:'DELETE',url})
xhrPromise.put = (url,body) => xhrPromise({url, method:'PUT', body})
xhrPromise.patch = (url, body) => xhrPromise({url, method:'PATCH', body});
