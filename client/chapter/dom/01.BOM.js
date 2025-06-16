/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/


/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window;


/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title


const { href, protocol, host, port, search, hash, replace, reload, pathname } = location;

/*
href : http://localhost:5500/index.html?type=listing&page=2#title
protocol : http: / https:
host : localhost:5500
serach : ?type=listing&page=2 // 검색어
hash : #title // 이정표. 어디에 머물겠다(목차)
*/




const urlParams = new URLSearchParams(location.search);

// for (const [key, value] of urlParams) {
//   console.log(`${key}:${value}`);
// }


/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;


// callback => promise API


// 콜백함수 용례
// 비동기 데이터를 안전하게 꺼내야할때
// 안쪽 정보를 바깥쪽으로 꺼내야할때
function getGeolocation(success){
    navigator.geolocation.getCurrentPosition((data)=>{

        const {latitude:lat, longitude:long} = data.coords;

        success({ lat, long })
    });
}

getGeolocation((data)=>{
    console.log(data);
    
})

function _getGeolocation(){

    // promise 객체를 반환
    return new Promise((resolve, reject)=>{
            navigator.geolocation.getCurrentPosition((data)=>{
            const {latitude:lat, longitude:long} = data.coords;
            resolve({lat,long});
        });
    })

}

_getGeolocation()
.then((data)=>console.log(data))



// async await
// const {lat, long} = _getGeolocation();

// 아래는 프로미스를 반환함
// navigator.mediaDevices.getUserMedia({video:true})
// .then((stream)=>{
//     console.log(stream);
//     document.querySelector('#videoElement').srcObject = stream;
// })




/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;





/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;

// 주소창을 이동해줌 /about으로
// history에 기록됨
// replaceState는 history에 남지 않는다 (앞,뒤로가기 안됨)
// 주소만 바뀌고 그 어떤것도 요청하지 않았기때문에 에러가 발생하지 않는다 
// => SPA (Single Page Application)
// 다만, 새로고침하면 에러난다
// history.pushState(null,'','/about');


const links = document.querySelectorAll('a');


function about(){
  
  return `
    <h1>About PAGE 입니다!</h1>
    <div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias provident expedita aspernatur cupiditate amet repellat magni? Numquam minima exercitationem ratione? Consectetur doloribus incidunt iste nam odio nihil exercitationem eaque magnam.</p>
    </div>
  `
}


const routes = {
  '/': '<h1>Home PAGE 입니다~!~!</h1>',
  '/about': about(),
  '/contact': '<h1>Contact PAGE 입니다!</h1>',
}

const app = document.querySelector('#app');

function router(){
  const path = location.pathname;
  app.innerHTML = routes[path] || `<h1>404 not found</h1>`;
}



links.forEach((a)=>{
    a.addEventListener('click', function(e){
        e.preventDefault(); // a태그 누르면 페이지 이동하는 기본동작을 막음
        console.log('clicked!');
        console.log(this.href);
        
        // @param1 : 해당 페이지에 전달할 데이터 ex. 이전 스크롤 위치 저장할때 많이 사용함
        // @param2 : 사용안함
        // @param3 : 던져줄 url
        history.pushState(null,'',this.href);
        router();
    })
})

// DOM객체가 모두 로드 됐을때 실행
window.addEventListener('DOMContentLoaded', ()=>{

})
 