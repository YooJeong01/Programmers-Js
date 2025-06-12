// prompt에 기본값을 넣어줄 수 있다
// 하지만 값을 지우고 취소를 누르면 null이 들어간다
// let test = prompt('문장', '2');
// console.log(test);

/* ---------------- */
/* Condition        */
/* ---------------- */

// const input = prompt('자바스크립트의 \'공식\' 이름은 무엇일까요?', '');

// if (input == 'ECMAScript') {
//     console.log('정답입니다!');
// } else {
//     console.log('모르셨나요? 정답은 ECMAScript입니다!');
// }



// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie =prompt('그 영화 봤니?','');

// 영화 볼거니?
let goingToWatchMovie=prompt('영화 볼거니?');

// if (didWatchMovie) {
//     console.log('Yes');
// } else if (!didWatchMovie) {
//     if (goingToWatchMovie) {
//         console.log('Yes');
//     } else if (!goingToWatchMovie){
//         console.log('No');
//     }
// }



// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
// didWatchMovie ? console.log('Yes') : goingToWatchMovie ? console.log('Yes') : console.log('No')

const message = didWatchMovie.includes('yes') ? '영화 재밌더라 한번 봐바' : goingToWatchMovie.includes('yes') ? '언제 볼까? 재밌겠다!!' : '그래...'

console.log(message);



// 조건부 렌더링
function render(node, isActive){
    const template = `
    <div>${isActive ? '안녕' : '잘가~'}</div>
    `
    node.insertAdjacentHTML('beforeend', template);
}






