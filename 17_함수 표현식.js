// 함수 선언문 : 어디서든 호출 가능 (호이스팅)
sayHello1();
function sayHello1(){
    console.log('Hello');
}

// 함수 표현식 : 호이스팅 X
let sayHello2 = function(){
    console.log('Hello');
}
sayHello2();