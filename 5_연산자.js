// 연산자 : + - * / %

// 홀수 : X % 2 = 1
// 짝수 : Y % 2 = 0

// 어떤 값을 입력해도 결과가 5를 넘기면 안될 때
// X % 5 = 0 ~ 4

// 거듭제곱
// const num = 2 ** 3;
// console.log(num); // 8

// 연산자 줄여서 쓰기
let num = 10;
// num = num + 5;
// num += 5; // 동일한 기능

// 아래의 것들 다 가능
// num -= 5;
// num *= 5;
// num /= 5;
// num %= 5;

// 증가 연산자, 감소 연산자
// num++
// console.log(num); // 11
// num--
// console.log(num); // 10

// let result = num++;
// console.log(result); // 10 (값이 증가하지 않음)
let result = ++num;
console.log(result); // 11 (값이 증가함)