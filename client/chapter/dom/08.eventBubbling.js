/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */


const section = getNode('section');
const article = getNode('article');
const p = getNode('p');


section.addEventListener('click', ({currentTarget:target})=>{
    console.log(target);
    console.log('%c section', 'color:dodgerblue'); // 콘솔도 꾸밀 수 있다
})

// article.addEventListener('click', ()=>{
//     console.log('%c article', 'color:hotpink;');
// })

// p.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     console.log('%c p', 'color:orange;');
  
    
// })
 


// mouseover, mouseout은 부모 요소에 들어갔을때 자식요소때도 이벤트가 발생하기 때문에
// 보통은 mouseenter, mouseleave를 많이쓴다
// 해당영역에 마우스가 들어갔을때, 담궈졌을때 발생하는 이벤트 = mouseover
section.addEventListener('mouseenter', (e)=>{
    console.log(e.type);
})

// mouseout = mouseleave
section.addEventListener('mouseleave', (e)=>{
    console.log(e.type);
})








/* 캡처링 ----------------------------------------------------------------- */