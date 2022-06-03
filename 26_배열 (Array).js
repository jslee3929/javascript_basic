// 배열(Array) : 순서가 있는 리스트 (파이썬의 리스트와 비슷)
// 배열은 문자, 숫자, 불린, 객체, 함수 등을 다 포함할 수 있음.
// (예시)
let arr = [
    '민수', // 문자
    3, // 숫자
    false, // 불린
    { // 객체
        name: 'Mike',
        age: 30,
    },
    function(){ // 함수
        console.log('TEST');
    }
]

let days = ['월', '화', '수'];
// length : 배열의 길이 (배열이 가지고 있는 요소의 개수 반환)
console.log(days.length); // 3

// index : 배열의 index번째 요소 반환
console.log(days[1]);

// push() : 배열 끝에 추가
days.push('목');
console.log(days); // [ '월', '화', '수', '목' ]
days.push('금', '토'); // 여러 개 한번에 추가 가능
console.log(days); // [ '월', '화', '수', '목', '금', '토' ]

// pop() : 배열 끝 제거
days.pop();
console.log(days); // [ '월', '화', '수', '목', '금' ]
for (let i = 0; i < 2; i++) {
    days.pop();
}
console.log(days); // [ '월', '화', '수' ]

// unshift() : 배열 앞에 추가
days.unshift('일');
console.log(days); // [ '일', '월', '화', '수' ]
days.unshift('금', '토') // 여러 개 한번에 추가 가능
console.log(days); // [ '금', '토', '일', '월', '화', '수' ]

// shift() : 배열 앞 제거
for (let i = 0; i < 3; i++) {
    days.shift();
}
console.log(days); // [ '월', '화', '수' ]

// 반복문 for : 배열의 모든 요소 출력
for(let index = 0; index < days.length; index++){
    console.log(days[index]); // 월 화 수
}

// for ... of 문법 : for문보다 간단하나, index를 얻을 수 없음
for(let day of days){
    console.log(day)
}