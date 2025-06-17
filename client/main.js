import {
  copy,
  shake,
  addClass,
  getRandom,
  showAlert,
  insertLast,
  removeClass,
  getNode as $,
  clearContents,
  isNumericString,
} from './lib/index.js';

import data from './data/data.js';

/* 

[phase-1]

1. 주접 떨기 버튼을 클릭하는 함수
    - 주접 떨기 버튼 가져오기
    - 이벤트 연결 'click'

2. input 값 가져오기 
    - input.value

3. data 함수에서 주접 이름 넣고 꺼내기 => [] 리턴값 확인
    - n번째 주접 랜덤 pick 하기 

4. result에 렌더링 하기
    - insertLast 

[phase-2]
5. 예외 처리
    - 이름이 없을 경우 에러
    - 숫자만 들어오면 에러

*/

const submit = $('#submit');
const nameField = $('#nameField');
const result = $('.result');


function handleSubmit(e) {
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];


  if(!name || name.replaceAll(' ','') === ''){

    showAlert({
      target:'.alert-error',
      message:'공백은 허용되지 않습니다.',
      timeout:2000,
      className:'is-active'
    })

    shake(nameField)
    return;
  }

  if(!isNumericString(name)){
    showAlert({
      target:'.alert-error',
      message:'정확한 이름을 입력해 주세요.',
      timeout:2000,
      className:'is-active'
    })

    shake(nameField)
    return;
  }

  clearContents(result);
  insertLast(result, pick);
}

function handleCopyClipboard(){
  
  const text = this.textContent;
  
  
  copy(text)
  .then(()=>{
    showAlert({
      target:'.alert-success',
      className:'is-active',
      message:'클립보드 복사 완료!!',
      timeout:2000,
    })
  })
  
  
}

submit.addEventListener('click', handleSubmit);

result.addEventListener('click',handleCopyClipboard)
















