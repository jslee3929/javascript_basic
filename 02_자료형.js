// 문자열 String
const name = "Mike";
const name1 = "Mike";
const name2 = 'Mike';
const name3 = `Mike`; // ~ 밑에 있는 바로 그것

const message = "I'm a boy.";
const message2 = 'I\'m a boy'; // 같은 종류 따옴표를 이용하고 싶다면 백슬래시를 붙여줌
const message3 = `My name is ${name}`; // 이건 `로만 가능
const message4 = `나는 ${30+1}살 입니다.`

console.log(message3);
console.log(message4);

// 숫자형 Number
const age = 30;
const PI = 3.14;

console.log(1 + 2) // 더하기
console.log(10 - 3) // 빼기
console.log(3 * 2) // 곱하기
console.log(6 / 3) // 나누기
console.log(6 % 4) // 나머지

const x = 1/0;
console.log(x) // Infinity

const y = name/2;
console.log(y) // NaN (Not a Number)

// Boolean

const a = true; // 참
const b = false; // 거짓

console.log(name == 'Mike') // true
console.log(age > 40) // false

// null과 undefined

let age1;
console.log(age1) // undefined

let user = null;
console.log(user) // null (존재하지 않는다)

// 객체형 (나중에 다룸)
// 심볼형 (나중에 다룸)

// typeof 연산자 : 자료형 출력

console.log(typeof 3); // number
console.log(typeof name); // string
console.log(typeof true); // boolean
console.log(typeof "xxx"); // string
console.log(typeof null); // object
console.log(typeof undefined); // undefined

// 문자형, 숫자형 간 더하기

const c = "나는 ";
const d = " 입니다.";

console.log(c + name + d); // 나는 Mike 입니다.
console.log(c + age + '살' + d); // 나는 30살 입니다. (숫자형이 문자형으로 변환됨)