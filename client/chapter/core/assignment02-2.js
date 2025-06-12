// // 과목

// // 한 과목이라도 40점 미만이면 미달
// // 평점 60점 미만 시 평점 미달
// // 정수 아니면 0~100 출력


// function resultExam(score1, score2){
//     if(!Number.isInteger(score1) || score1 < 0 ||  score1 > 100) {
//         console.log('점수는 0부터 100 사이의 정수여야 합니다');
//         return 0;
//     }

//     if(!Number.isInteger(score2) || score2 < 0 ||  score2 > 100) {
//         console.log('점수는 0부터 100 사이의 정수여야 합니다');
//         return 0;
//     }

//     if(  (score1 < 40 || score2 < 40) && ((score1+score2)/2 < 60) ) {
//         console.log('불합격 : 최저점수 미달, 평점 미달');
//         return 0;
//     }

//     if(score1 < 40 || score2 < 40) {
//         console.log('불합격 : 최저점수 미달');     
//         return 0;
//     }

//     if((score1+score2)/2 < 60) {
//         console.log("불합격 : 평점 미달");      
//         return 0;  
//     }
//     console.log('합격');
// }

// resultExam(42,32);
// resultExam(40, 60);
// resultExam(35,100);
// resultExam(55,70);
// resultExam(110,70);


// // 약수의 개수
// function NumOfDivisor(value){
//     if( typeof value !== "number" ) {
//         console.log('숫자를 입력해주세요'); 
//         return 0;
//     }

//     if( !Number.isInteger(value) || value <= 0 ){ // 음의 정수. 소수 등
//         console.log('자연수만 입력해주세요');
//         return 0;
//     }

//     let cnt = 0;
//     for(let i=0; i<Math.sqrt(value); i++){
//         if(value % i == 0) { // 나누어 떨어진다면
//             if(i==value/i){ // 몫과 나누는 값이 같은 경우
//                 cnt += 1; // ex. 16의 약수 4-4인 경우
//             } else { // 몫과 나누는 값이 다른 경우 
//                 cnt += 2; // ex. 16의 약수 1-16, 2-8인 경우
//             }
//         }
//     }
//     return console.log(cnt);
// }

// NumOfDivisor("안녕");
// NumOfDivisor(-5);
// NumOfDivisor(12);

function resultExam(sub1, sub2) {
    let average = (sub1 + sub2) / 2;
    if (
        !Number.isInteger(sub1) || sub1 < 0 || sub1 > 100 ||
        !Number.isInteger(sub2) || sub2 < 0 || sub2 > 100
    ) {
        console.log("점수는 0부터 100 사이의 정수여야 합니다");
        return;
    }

    if (Math.min(sub1, sub2) < 40) {
        console.log("최저점수 미달");
    } else if (average < 60) {
        console.log("평균 미달");
    } else {
        console.log("합격");
    }
    return;
}



console.log(resultExam(42, 32));
console.log(resultExam(40, 60)); 
console.log(resultExam(35, 100)); 
console.log(resultExam(55, 70)); 
console.log(resultExam(110, 70)); 
