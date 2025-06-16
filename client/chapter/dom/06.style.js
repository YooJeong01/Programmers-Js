/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

const nav = getNode('nav');
console.log(nav.className);
console.log(nav.className = 'nav');
nav.classList.add('hello');



function addClass(node, classname){
    if (isString(node)) node = getNode(node)

    if ( isObject(classname)) {
        classname = Object.values(classname);
    }
    if (classname.includes(',')){
        classname = classname.split(',')
    }
    if ( isArray(classname)) {
        classname.forEach((name)=>{
            node.classList.add(name);
        })
        return;
    }
    node.classList.add = classname;
}


// 범쌤코드 & 내가 약간 수정

/**
 * @function DOM Element에 클래스를 추가하는 함수
 * @autor 범쌤
 * @param {HTMLElement | string} node 
 * @param {string | string[] | object} className 
 * @return {void}
 */

function _addClass(node, className){
    if(isString(node)) node = getNode(node);

    if(isObject(className)) {
        className = Object.values(className);
    }
    if(className.includes(',')) {
        className = className.replace(/\s*/g,'').split(',');
    }
    if(Array.isArray(className)) {
        className.forEach((c)=>node.classList.add(c));
    }
    else {
        node.classList.add(className);
    }
}

_addClass('.second', ['a', 'b', 'c']);
_addClass('.second', {first:'d', second:'e'});
_addClass('.second','f,g,h');


/**
 * @function DOM Element에 클래스를 삭제하는 함수
 * @autor 유짱
 * @param {HTMLElement | string} node 
 * @param {string | string[] | object} className 
 * @return {void}
 */

function removeClass(node,className){
    if(isString(node)) node = getNode(node);
        if(isObject(className)) {
        className = Object.values(className);
    }
    if(className.includes(',')) {
        className = className.replace(/\s*/g,'').split(',');
    }
    if(Array.isArray(className)) {
        className.forEach((c)=>node.classList.remove(c));
    }
    if(!className) {
        node.className = '';
    }
    else {
        node.classList.remove(className);
    }
}

removeClass('.first', ['a', 'b', 'c']);
removeClass('.first', {first:'d', second:'e'});
removeClass('.first','f,g,h');

removeClass('.second', ['a', 'b', 'c']);
removeClass('.second', {first:'d', second:'e'});
removeClass('.second','f,g,h');


/**
 * @function DOM Element에 클래스를 추가하거나 삭제하는 함수
 * @autor 유짱
 * @param {HTMLElement | string} node 
 * @param {string | string[] | object} className 
 * @return {void}
 */

function toggleClass(node,className){
    if(isString(node)) node = getNode(node);
        if(isObject(className)) {
        className = Object.values(className);
    }
    if(className.includes(',')) {
        className = className.replace(/\s*/g,'').split(',');
    }
    if(Array.isArray(className)) {
        className.forEach((c)=>node.classList.toggle(c));
    }
    else {
        return node.classList.toggle(className);
    }
}

toggleClass('.first', ['a', 'b', 'c']);
toggleClass('.first', {first:'d', second:'e'});
toggleClass('.first','f,g,h');
toggleClass('.second', ['a', 'b', 'c']);
toggleClass('.second', {first:'d', second:'e'});
toggleClass('.second','f,g,h');













/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`