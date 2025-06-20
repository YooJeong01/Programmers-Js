const END_POINT = 'https://jsonplaceholder.typicode.com/users'

// promise 객체가 반환되고 그 안의 promiseresult를 이용하고싶다면 await을 붙여라
const response = await fetch(END_POINT);


// if(response.ok){
//     const data = await response.json();

//     console.log(data);
// }


const defaultOptions = {
    method: 'GET',
    url:'',
    body: null,
    headers : {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*'
    }
}

export const uzzang = async (options) => {

    // ...rest는 url 외의 것들을 객체로 넘겨줘야하니까 사용
    const {url, ...rest} = {
        ...defaultOptions, 
        ...options,
        headers:{
        ...defaultOptions.headers,
        ...options.headers
        }
    }
    
    const response = await fetch(url,rest);

    if(response.ok){
        response.data = await response.json()
    }

    return response;
   
}

const {data} = await uzzang({url:END_POINT});
// console.log(data);


uzzang.get = (url,options)=>{

    // promise 반환
    // promise를 반환해야 awiat을 붙일수있다
    return uzzang({
        url,
        ...options // 객체로 줘야하기때문에 풀어서 전달
    })
}

uzzang.post = (url, body, options) => {
    return uzzang({
        method:'POST',
        url,
        body: JSON.stringify(body),
        ...options
    })

}

uzzang.put = (url, body, options) => {
    return uzzang({
        method:'PUT',
        url,
        body: JSON.stringify(body),
        ...options
    })
}

uzzang.patch = (url, body, options) => {
    return uzzang({
        method:'PATCH',
        url,
        body: JSON.stringify(body),
        ...options
    })
}

uzzang.delete = (url, options) => {
    return uzzang({
        method:'DELETE',
        url,
        ...options
    })
}









