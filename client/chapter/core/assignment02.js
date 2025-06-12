// 알고리즘 문제 만들기
// 여기서 더 어렵게 할거면 아무것도 입력하지 않았을시, 없는 메뉴 주문시 다르게 처리하기
// 더 어려워지려면 주문 취소 및 변경도 넣기


// < 짱구의 정산 타임 >
// [ 문제 조건 및 난이도 ]
// level 1
// for, if

// [ 문제 설명 ]
// 늦은 밤, 짱구는 오늘 최대 3명의 손님까지만 주문을 받고 마감하려 합니다
// 손님은 없는 메뉴를 시킬수도 있습니다. 단, 없는 메뉴 주문시 주문으로 간주하지 않습니다
// 3명의 손님이 왔지만 음료를 주문하지 않을수도 있습니다.
// 짱구의 총 매출을 구해주세요

// [ 입출력 예시 ]
// 입력 : prompt 사용. 
// ex.americano 
// ex.ame
// ex. 
// 출력 : ex. 오늘 총 판매 금액은 10000원 입니다.

// [ 제한 조건 ]
// 오타 입력시 없는 메뉴로 간주합니다


const menu = {
    'americano' : 2000,
    'lemonade' : 4000,
    'latte' : 5000,
    'iceChoco' : 5000
} 



// ver4. q를 눌러 주문 종료. 없는 메뉴 주문시 주문 취소
// ( do...while, key 존재 확인, if문으로 key의 value 비교, 누적 연산, 후위 연산자 )
let orderCnt = 0;
let total = 0;
let order;
const MAX_ORDERS = 3;

do {
    order = prompt("음료를 주문해주세요. (종료를 원하시면 'q'를 눌러주세요)");
    if(menu[order]) {
        total += menu[order];
        orderCnt++;
    } else if (order == 'q') {
        alert('주문이 종료됐습니다.');
        orderCnt++;
        break;
    } 
    else {
        alert('없는 음료를 주문하여 해당 주문이 취소됐습니다.');
        orderCnt++;
    }
} while( order != 'q' && orderCnt < MAX_ORDERS)


// ver3. 없는 메뉴 주문시 주문 취소, q를 눌러 주문 종료
// ( for, break, 누적 연산, key 존재 확인, if문으로 key의 value 비교 )
// let total = 0;
// const MAX_ORDERS = 3;
// for (let i=0; i < MAX_ORDERS; i++){
//     const order = prompt("음료를 주문해주세요. (종료를 원하시면 'q'를 눌러주세요)");
//     if (order === 'q') {
//         alert('주문이 종료됐습니다'); 
//         break;
//     }

//     if(menu[order]) {total += menu[order]}
//     else {
//         alert('없는 음료를 주문하여 해당 주문이 취소됐습니다.');
//     }
// }



// ver2. 주문을 잘못하거나 없는 메뉴를 시켜 재주문 하는 경우, q를 눌러 주문 종료
// ( 함수 작성 및 위치에 따른 호출, confirm, continue, break )
// ( 누적 연산, key 존재 확인, if문으로 key의 value 비교 )
// 
// function orderMenu(order){
//     let price;
//     if(menu[order]) {
//         console.log(menu[order]);
//         price = menu[order];
//     } else return 0;
//     return price;
// }

// let total = 0;
// const MAX_ORDERS = 3;
// for (let i=0; i < MAX_ORDERS; i++){
//     const order = prompt("음료를 주문해주세요. (종료를 원하시면 'q'를 눌러주세요)");
//     if (order === 'q') {
//         alert('주문이 종료됐습니다'); 
//         break;
//     }
//     const price = orderMenu(order);

//     if(price) {total += price}
//     else {
//         let reOrder = confirm('없는 메뉴입니다. 다시 주문하시겠습니까? (확인/취소)');
//         if(reOrder) {
//             const order = prompt('음료를 재주문해주세요');
//             total += orderMenu(order);
//         } else {
//             alert('재주문에 실패하셨습니다');
//             continue;
//         }
//     }
// }


// ver1.
// const MAX_ORDERS = 3;
// for (let i=0; i < MAX_ORDERS; i++){
//     const order = prompt('음료를 주문해주세요');
//     if ( order == 'americano' ) {
//         total += menu.americano
//     } else if ( order == 'lemonade') {
//         total += menu.lemonade
//     } else if ( order == 'latte') {
//         total += menu.latte
//     } else if ( order == 'iceChoco') {
//         total += menu.iceChoco
//     } else if ( order == 'q' ) {
//         break;
//         alert('주문이 종료됐습니다.')
//     } else {
//         total += 0
//     }
// }

console.log(`오늘 총 판매 금액은 ${total}원입니다.`);











//---------------------짱구의 정산타임(상) 리스트, 객체선언--------------------------------------------------------------------------
// < 짱구의 정산 타임 >
// [ 문제 조건 및 난이도 ]
// level 2
// for, if, function(), .push() 사용

// [ 문제 설명 ]
// 늦은 밤, 짱구는 오늘 최대 3팀까지만 주문을 받고 마감하려 합니다.
// 한 팀당 최대 3명까지 손님이 올 수 있습니다. 3명의 손님이 왔지만 음료를 주문하지 않을수도 있습니다.
// 손님은 없는 메뉴를 시킬수도 있습니다. 단, 없는 메뉴 주문시 주문으로 간주하지 않습니다.
// 메뉴는 객체타입으로 4가지 메뉴가 있습니다 americano는 2000원, lemonade는 4000원, latte는 5000원 iceChoco는 5000원입니다.
// 짱구의 총 매출을 구해주세요.

// [ 입출력 예시 ]
// 입력 : prompt 사용
// ex.americano 
// ex.ame
// ex.
// 출력 : ex. 오늘 총 판매 금액은 10000원 입니다.

// [ 제한 조건 ]
// 오타 입력시 없는 메뉴로 간주합니다.

// const menu = {
//     'americano' : 2000,
//     'lemonade' : 4000,
//     'latte' : 5000,
//     'iceChoco' : 5000
// }

// function orderMenu(order){
//     let price = 0
//     for( let i=0; i<3; i++){
//         if ( order[i] == 'americano' ) {
//             price += menu.americano
//         } else if ( order[i] == 'lemonade') {
//             price += menu.lemonade
//         } else if ( order[i] == 'latte') {
//             price += menu.latte
//         } else if ( order[i] == 'iceChoco') {
//             price += menu.iceChoco
//         } else {
//             price += 0
//         }
//     }
//     return price;
// }


// let totalPrice = 0;
// for(let i = 0 ; i<2; i++){
//     let order = []
//     for(let j=0; j<3; j++){
//         order.push(prompt('음료 주문'));
//     }
//     totalPrice += orderMenu(order);
// }
// console.log(`오늘 총 판매금액은 ${totalPrice}원 입니다.`);
