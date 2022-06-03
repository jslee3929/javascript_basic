// 전역 변수와 지역 변수

// 같은 이름으로 전역 변수와 지역 변수를 각각 설정할 수 있음
// 이 경우 둘 중 하나가 수정되어도 서로 간섭을 받지 않음
let msg = 'welcome'; // 전역 변수 선언
console.log(msg) // welcome

function sayHello1(name){
    let msg = 'Hello' // 동일한 이름으로 지역 변수 선언
    console.log(msg + ' ' + name); // Hello Mike
}

sayHello1('Mike')
console.log(msg) // welcome

// 매개변수로 받은 값은 복사된 후 함수의 지역변수가 됨
// 전체 코드에서 공통으로 사용하는 변수를 제외하고는 지역 변수로 선언하는 습관을 들여야 함.
// 전역 변수가 많아지면 관리가 어려워짐
let name = 'Mike'

function sayHello2(name){
    console.log(name)
}

sayHello2(); // undefined가 매개변수 (name이 선언되었다고 Mike가 들어가는 게 아님)
sayHello2(name); // Mike가 매개변수
sayHello2('Jane'); // Jane이 매개변수