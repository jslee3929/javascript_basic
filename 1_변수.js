// 변하는 값은 let으로 선언
// 변하지 않는 값은 const로 선언
// 모든 변수를 const로 선언하고, 변경될 여지가 있는 변수만 let으로 바꿔줌

// 1. 변수명은 문자와 숫자, &와 _만 사용
// 2. 첫글자는 숫자가 될 수 없음
// 3. 예약어(이미 역할이 있는 단어)는 사용할 수 없음 ex) let let = 99;
// 4. 가급적 상수는 대문자로 선언
// 5. 변수명은 읽기 쉽고 이해할 수 있게 선언

Name = "Mike";
age = 30;

// console.log(Name); // code runner로 실행
alert(Name); // alert()는 web api라서 html(Live Server)로 실행시켜야 확인 가능

const PI = 3.14;

console.log(PI);