/* eslint-disable no-undef */
const links = document.querySelectorAll('nav a');
const header = document.querySelector('#header');
const depthList = document.querySelectorAll('.depth');

/* 
1. 각 메뉴에 마우스를 올렸을 때 
2. 선택된 자식의 depth를 찾아서 
    - 대상의 마지막 자식 요소 (lastElementChild)

3. height = '100px'
    - element.style.height = '100px'

4. 선택된 대상의 depth가 아니면 나머지는 height = 0;
    - 나머지 = 전체

*/



function vanilla(){
    // helper function
    const h = t => t.style.height = 0;

    links.forEach((a)=>{
        a.addEventListener('mouseenter', (e)=>{
            const currentDepth = e.currentTarget.lastElementChild;
            depthList.forEach(h);
            currentDepth.style.height = '100px';
        })
    })

    header.addEventListener('mouseleave',()=>depthList.forEach(h));

}


// console.log(gsap);

// links.forEach((a)=>{
//     const currentDepth = a.lastElementChild;

//     // gsap은 기본적으로 애니메이션을 바로 실행시키기때문에 멈춰놓기
//     // transition 속성을 없애주고 gsap 넣기
//     const tl = gsap.timeline({paused:true})
//                 .to(currentDepth,{height:100, duration:0.5, ease:'power2.inOut'})

//     a.addEventListener('mouseenter',()=>{ tl.play() })
//     a.addEventListener('mouseleave',()=>{ tl.reverse() })
// })


// const tl = gsap.timeline({
//     defaults: {
//         duration:2,
//     }
// });

// tl.to('.logo', { x:100, })
// tl.to('.logo', { y:100, })

// tl.restart() // 다시 시작
// tl.reverse() // 역 재생
