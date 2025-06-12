const first = document.querySelector('.first');
//console.log(first.nextElementSibling);


// let second = first;
// do {
//    second = second.nextSibling;
// } while( second.nodeType !== 1)

// console.log(second);


function next(node) {
    // validation => type guard
    // 들어오는 입력값의 타입에 따라 적절하게 코드사용

    if (typeof node === 'string'){
        node = document.querySelector(node);
    }
    do {
        node = node.nextSibling;
    } while( node.nodeType !== 1)
    return node;
}


console.log(next('.first'));
console.log(next(first));

