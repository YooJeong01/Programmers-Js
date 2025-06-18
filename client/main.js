import { diceAnimation, getNode, insertLast, attr, endScroll, clearContents } from './lib/index.js';

const [rollingButton, recordButton, resetButton] = document.querySelectorAll('.buttonGroup  button');
const recordListWrapper = getNode('.recordListWrapper');


/*
  1. 주사위 눈 가져오기
    #cube에 dice 비표준 속성 값

  2. 태그 만들고
      <tr>
        <td>0</td> // 회차
        <td>5</td> // 주사위 눈 수
        <td>5</td> // 주사위 눈의 총 합
      </tr>

  3. 태그 렌더링하기
      insertLast
*/


let sumDiceNumber = 0;
let count = 0;

function createItem(value){
  return /*html*/`
          <tr>
            <td>${++count}</td>
            <td>${value}</td>
            <td>${sumDiceNumber += value}</td>
          </tr>
  `
}

function renderRecordItem(){
  const diceNumber = attr('#cube', 'dice')*1;
  console.log('주사위 눈 : ',diceNumber);

  insertLast('tbody', createItem(diceNumber));
}


/* 
  1. 주사위 굴리기 버튼을 선택
      - querySelector or getNode

  2. 클릭 이벤트 바인딩
      - click 

  3. 버튼 클릭시 diceAnimation 애니메이션 동작
      - setInterval diceAnimation

  4. 같은 버튼을 눌렀을 때 토글 처리
      - 상태 변수 만들기
        - isClicked = false;

        - isClicked = !isClicked;

      - 조건 처리 

  5. 애니메이션 재생 or 정지
      - setInterval
      - clearInterval 

  6. recordButton, resetButton 활성화/비활성화
      - target.disabled = true || false

*/

// 클로저 -> 변수에 담기 -> 화살표 함수로 바꾸기 -> 변수 실행해주기 -> 이벤트 리스너 콜백에 실행 지우기
const handleRollingDice = (() => {
  let isClicked = false;
  let id;

  return () => {
    if(!isClicked){
      id = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
      console.log('on');
      
    } else{
      clearInterval(id);
      recordButton.disabled = false;
      resetButton.disabled = false;
      console.log('off');
    }

    isClicked =!isClicked;
  }

})()


function handleRecord(){
  recordListWrapper.hidden = false;
  renderRecordItem();
  endScroll(recordListWrapper)
}

function handleReset(){
  recordListWrapper.hidden = true;
  clearContents('tbody')
  count = 0;
  sumDiceNumber = 0;
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);