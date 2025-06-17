/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */
const nav = document.querySelector('.navigation');
const links = document.querySelectorAll('a');
console.log(links);

nav.addEventListener('click', (e)=>{
    e.preventDefault();
    const target = e.target.closest('li');
    if(target.classList.contains('about')){
        console.log('Hit');
    }    
    
    /* 속성을 사용한 위임 ------------------ */
    if(target.hasAttribute('data-name')){
        console.log('contact');
    }
    if(target.getAttribute('data-name')){
        console.log('contact2');
    }
    if(target.dataset.name === 'contact'){
        console.log('contact3');
    }
    
    /* 노드를 사용한 위임 ------------------ */
    if(target.nodeName === 'LI'){
        console.log('contact4');
        
    }

})






