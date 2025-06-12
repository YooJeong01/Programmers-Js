function makeTeam(name, fail, win) {
    const regexp = /^[A-Z]+$/;
    if(!regexp.test(name)){
        name = name.toUpperCase();
    }
    return {
        name,
        win,
        fail,
    }
}
let LOTTE = makeTeam("LOTTE", 74, 66);
let KIA = makeTeam("KIA", 55, 87);
let NC = makeTeam("nc", 81, 61);
let DUSAN = makeTeam("Dusan", 68, 74);
let LG = makeTeam("lG", 66, 76);
let SAMSUNG = makeTeam("saMSunG", 64, 78);
let SSG = makeTeam("SSg", 70, 72);
let KT = makeTeam("kt", 70, 72);
let KIWOOM = makeTeam("KIWooM", 86, 58);




function postSeason(team){  
   const WINNING_RATE = (team.win/(team.win+team.fail))
   // console.log(WINNING_RATE);

  if (WINNING_RATE >= 0.5) {
    return `${team.name} 진출 성공`;
  } else {
    return `${team.name} 진출 실패`;
  }
}

console.log(postSeason(LOTTE)); // 실행 결과
console.log(postSeason(KIA));
console.log(postSeason(NC));
console.log(postSeason(DUSAN));
console.log(postSeason(LG));
console.log(postSeason(SAMSUNG));
console.log(postSeason(SSG));
console.log(postSeason(KT));
console.log(postSeason(KIWOOM));










// // 팀원 문제 풀이
// // 전어회 이벤트
// // 100,000당 1접시
// // 중 40000
// // 5번에 1접시

// // 서비스로 받을 최대 접시수

// let service = 0;
// function getMaxDishes(orders){
//     let service = Math.floor(orders.length/5);
//     for(let order of orders){
//         if ( Math.floor(order/100000) ) {
//             service += Math.floor(order/100000);
//         }
//     }
//     return service;
// }

// const  orders = [
//   40000, 80000, 160000, 40000, 200000, 40000, 40000, 40000, 40000, 120000, 40000, 40000, 40000, 40000, 120000, 40000, 40000, 40000, 40000, 40000
// ]
// console.log(getMaxDishes(orders));


// // 가을 야구 가자!

// function postSeason(team,win) {
//     if (win*0.01 >= 0.5) {
//         return console.log(`${team} 진출 성공`);
//     } else {
//         return console.log(`${team} 진출 실패`);
//     }
// }

// postSeason('SSG', 45);
// postSeason('LOTTE', 70);


