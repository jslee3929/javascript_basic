// AND, OR, NOT

// AND를 사용해서 코딩할 경우 작은 비중을 먼저 작성하는 것이 좋음
// 성능 최적화에 도움이 됨

// (예시) 운전면허가 있고 (80%) 시력이 좋은 (50%) 여군 (7%)
// 여군 여부를 먼저 평가하면 93%를 거르고 시작함

// OR : ||
// 이름이 TOM이거나, 성인이면 통과
const name = "Mike";
const age = prompt('나이가...?')
const isAdult = age > 19;

if(name === 'Tom' || age > 19){
    console.log('통과')
}

// AND : &&
// 이름이 TOM이고, 성인이면 통과
if(name === 'Tom' && age > 19){
    console.log('통과')
} else {
    console.log('돌아가.')
}

// NOT : !
if(!isAdult){
    console.log('돌아가...')
} else {
    console.log('통과!')
}