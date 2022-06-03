// 화살표 함수 (arrow function)

// 일반 함수 표현식
// let add = function(num1, num2){
//     return num1 + num2;
// }
// console.log(add(3,5)) // 8

// 화살표 함수
// let add = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(add(3,5)) // 8

// 코드 본문이 한 줄인 {} + return 문은 ()로도 바꿀 수 있음.
// let add = (num1, num2) => (
//     num1 + num2
// )
// console.log(add(3,5)) // 8

// return문이 한 줄이라면 화살표 오른쪽 괄호도 생략 가능
// let add = (num1, num2) => num1 + num2;
// console.log(add(3,5)) // 8

// 인수가 하나라면 화살표 왼쪽 괄호도 생략 가능
// let sayHello = name => `Hello, ${name}`;
// console.log(sayHello('이주성')); // Hello, 이주성

// 인수가 없는 함수는 괄호를 생략할 수 없음
// let showError = () => {
//     console.log('error!');
// }
// showError(); // error!

// return문이 있다 해도 return 전에 여러 줄의 코드가 있을 경우 중괄호만 사용
// let add = function(num1, num2){
//     const result = num1 + num2;
//     return result;
// }
// console.log(add(3,5)) // 8

// let add = (num1, num2) => {
//     const result = num1 + num2;
//     return result;
// }
// console.log(add(3,5)) // 8