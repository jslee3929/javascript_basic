console.log(10>5); // true
console.log(10 == 5); // false
console.log(10 != 5); // true

// 동등 연산자 : 값만 비교
const a = 1;
const b = "1";
console.log(a == b); // true (숫자 = 문자)

// 일치 연산자 : type까지 비교함
// 일치 연산자를 쓰는 것이 좋음
console.log(a === b); // false
