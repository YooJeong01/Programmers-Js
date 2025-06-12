let a= 10;
switch (a) {
    case 4:
        console.log('계산이 맞습니다');
        break;

    // if( a==3 || a==5 ) 와 같은 구문이다
    case 3:
    case 5:
        console.log('계산이 틀립니다!');
        console.log('수학 수업을 다시 들어보는걸 권유 드립니다');
        break;
    default:
        console.log('계산 결과가 이상하네요');      
}

/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime;


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch(thisTime){
    case MORNING : console.log('뉴스 기사 글을 읽는다.'); break;
    case LUNCH : console.log('자주 가는 식당에 가서 식사를 한다.'); break;
    case DINNER : console.log('동네 한바퀴를 조깅한다.'); break;
    case NIGHT : console.log('친구에게 전화를 걸어 수다를 떤다.'); break;
    case LATE_NIGHT :
    case DAWN : console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'); break;
    default :  
}


/* switch문 → if문 변환 --------------------------------------------------- */


/* switch vs. if -------------------------------------------------------- */

console.clear();

// prompt를 통해 숫자를 입4력 받는다. ( 0~6 까지 )
// 받은 숫자를 사용해서 Switch case 사용
// .floor : 소숫점 내림처리
// .random() : 0~1 사이의 실수들을 랜덤하게 출력함
// .random() * @ : 원하는 값을 곱해주면 범위가 달라짐

function getRandomNumber(n){
    return Math.floor(Math.random()*n);
}

function getDay(num){
    //let num = +prompt('0~6까지의 숫자 입력');
    switch(num) {
        case 0 : return '일';
        case 1 : return '월';
        case 2 : return '화';
        case 3 : return '수';
        case 4 : return '목';
        case 5 : return '금';
        case 6 : return '토';
        default : 
    }
    return 0;
}

// getDay 함수를 가지고 주말/ 평일을 구분해주세요
// function isWeekend(day){
//     if(day=='토' || day=='일') return 1;
//     else return 0;
// }

// const n = prompt('숫자를 입력해주세요 0~7');
// const day = getDay(getRandomNumber(n));
// //console.log(`오늘은 ${day}요일입니다.`);


// if(isWeekend(day)==1) console.log(`오늘은 ${day}요일입니다. 그러므로 주말입니다.`);
// else console.log(`오늘은 ${day}요일입니다. 그러므로 평일입니다.`);


// 범쌤코드


// 뭐가 잘못됐는지 로그가 안찍힘!
function weekend(){
    const today = getDay(getRandomNumber(7));
    return today.includes('토') || today.includes('일') ?
            `오늘은 ${today}요일입니다. 그러므로 주말입니다.` :
            `오늘은 ${today}요일입니다. 그러므로 평일입니다.`
}

