// return 으로 값 반환

function add(num1, num2){
    return num1 + num2; // num1 + num2를 반환
}
const result1 = add(2,3); // 2 + 3
console.log(result1)

// return 문이 없는 함수는 undefined를 반환
function showError(){
    alert('에러가 발생했습니다.');
    return // 다른 말 없이 return 만 있어도 undefined
    alert('이 코드는 절대 실행되지 않습니다.')
}
const result2 = showError();
console.log(result2); // undefined

// return을 통해 결과를 반납하고 나면 함수 실행이 즉시 종료됨
// 함수를 종료할 목적으로 return을 사용하기도 함.

// TIP
// 1. 하나의 함수는 하나의 작업만 하는 것이 좋음.
// 2. 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍
// ex) showError, getName, createUserData, checkLogin