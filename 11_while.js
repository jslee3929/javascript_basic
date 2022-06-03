// while
let i = 0;

while(i < 10){
    console.log(i);
    i++;
}

// do while
// 조건문을 아래로 옮길 수 있음
// i가 10보다 작으면 do 안의 코드를 실행
// 코드를 실행 후 조건을 체크하므로, 적어도 한 번은 실행함
i = 0;

do {
    console.log(i);
    i++;
} while(i < 10)

// break : 코드를 멈춤
while(true){
    let answer = confirm('계속 할까요?');
    if(!answer){
        break
    }
    console.log('계속 진행합니다.')
}

// continue : 해당 회차 코드를 멈추고 다음 회차 진행
// 짝수만 출력
for(let i = 0; i <10; i++){
    if(i%2){ // i가 존재하면 (나머지가 있으면, 홀수이면)
        continue;
    }
    console.log(i)
}