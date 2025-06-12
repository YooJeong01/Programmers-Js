/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;
console.log(stringTotalLength);


// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
console.log(extractCharacter);


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P' + message.slice(2,4);
console.log(immutableChangeCharacter);



// 부분 문자열 추출
let slice = message.slice();
let subString = message.substring(2,5);
let subStr = message.substr(2,5);
console.log('slice: ', slice, 'subString: ',subString, 'substr: ',subStr);



// 문자열 포함 여부 확인
let indexOf = message.indexOf('Less');
console.log(indexOf);


function checkBrowser(){
    const agent = navigator.userAgent.toLowerCase();
    let browserName;

    switch(true){
        case agent.indexOf('edg') > -1 : browserName = 'MS Edge' ; break;
        case agent.indexOf('chorme') > -1 && !! window.chrome : browserName = 'chorme' ; break;
        case agent.indexOf('safari') > -1 : browserName = 'safari' ; break;
        case agent.indexOf('firefox') > -1 : browserName = 'firefox' ; break;
        case agent.indexOf('trident') > -1 : browserName = 'trident' ; break;
        default : browserName = '모던 브라우저가 아닙니다!'
    }
    return browserName;
}

console.log(checkBrowser());











let lastIndexOf;
let includes = message.includes('Less');
let startsWith = message.startsWith('Less');
let endsWith = message.endsWith('more.');


let str = '                  a                 b     c  d     '
// 공백 잘라내기
let trimLeft = str.trimLeft();
let trimRight;


let trim = str.trim();
let replaceAll = str.replaceAll(' ','');
let replace = str.replace(/\s*/g, '');
console.log(replaceAll, replace);



// 텍스트 반복
let repeat;


// 대소문자 변환
let toLowerCase;
let toUpperCase;


// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}