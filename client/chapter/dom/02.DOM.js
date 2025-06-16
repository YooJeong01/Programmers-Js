/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* 문서 대상 확인 */
// - matches
// - contains


// 1. nav 태그 요소
const nav = document.querySelector('nav');
console.log(nav);



// 2. nav 태그 안에 있는 about li 태그 요소
const about = nav.querySelector('.about');
console.log(about);

// 3. data-name이 contact인 li 태그 요소
const contact = nav.querySelector('li[data-name="contact"]')
console.log(contact);



// 4. nav 요소 안에 있는 모든 자식 요소
const children = nav.children; // 자식 엘리먼트 반환
const children2 = nav.querySelectorAll('*');
console.log(children);

// children.forEach((a)=>console.log(a)) // 옛날메서드라 배열x [...children]
// children2.forEach((a)=>console.log(a));


const _childern = [...children];
_childern.forEach((li)=>{

})

const li = _childern.find((li)=>li.matches('.about'));
console.log(li);


console.clear();



// 재사용가능하게 노드 찾아주는 함수 만들어보기
function _getNode(target, parent=document) {
    if(parent.nodeType == 9){
        return document.querySelector(target);
    }
    const parentNode = document.querySelector(parent);
    return parentNode.querySelector(target);
}
console.log(_getNode('.about','nav'));

getNode('.about','nav');







