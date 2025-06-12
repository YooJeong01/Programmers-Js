let user = {name : "John"};
let permissions1 = {canView : true};
let permissions2 = {canEdit : true};


// 얕은 복사
// 복사 내용에 객체가 있다면 그건 참조만 됨 (안쪽까지 되지 않았다)
// 첫 파라미터에 뒤에 나오는 모든 파라미터를 합침
// 원본을 훼손하는 위험이 있기때문에 보통 빈 객체를 처음으로 넣음
let clone = Object.assign({}, user,permissions1, permissions2);
console.log(clone);

// 깊은 복사
// 안쪽의 객체까지 다 복사









/* ------------------------- */
/* Copy object by reference  */
/* ------------------------- */


// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao'
};

let text = message;
let conversationTool = messenger;


// 비교 (복사 vs. 참조)
console.log(message == text); // 값 비교
console.log(message === text); // 값 주소 비교
console.log(messenger == conversationTool); // 값 비교
console.log(messenger === conversationTool); // 값 주소 비교


// 객체 복사
// 1. for ~ in 문을 사용한 복사

const cloneObject = {};
for (const key in messenger){
    cloneObject[key] = messenger[key];
}

console.log(cloneObject);




// 2. Object.assign()을 사용한 복사
const copyObject = Object.assign({}, messenger);


// 3. 전개 연산자(...)를 사용한 복사
const spreadObject = {...messenger};


// 4. 객체를 복사해주는 유틸 함수 
function copiedObject(obj){
    return Object.assign({}, obj);
}

const _copiedObject = o => Object.assign({}, o);
const __copiedObject = o => Object.assign({...o});

const copy = copiedObject(messenger);
const copy1 = _copiedObject(messenger);
const copy2 = __copiedObject(messenger);






// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

// 동일한 키 값을 가지고 있을때는
// 뒤에 나오는 파라미터가 우선순위를 가져서
// 오버라이드 해버린다
let combinedCssMap = Object.assign({}, cssMapA, cssMapB);
let _combinedCssMap = {...cssMapA, ...cssMapB};


// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140
  },
};

// 객체 프로퍼티를 spread해서 다시 복사하겠다
// 깊은 복사가 된다
// 보통 2단계까지의 복사는 spread로 처리하는 경우가 많다
let copiedContainerStyles = {
    ...containerStyles,
    ['max-width'] : {
        ...containerStyles['max-width']
    }
};


// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries( // 배열 -> 객체로 반환
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}

const deep = cloneDeep(containerStyles);


/*
1. 참조에 의한 객체 복사 (객체나 배열은 전부다 참조 복사가 됩니다) => 리액트에서 지양
2. 얕은 복사 (보통 얘를 많이 함)
3. 깊은 복사
*/


// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
