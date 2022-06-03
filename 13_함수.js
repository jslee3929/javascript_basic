// 함수

// 함수 함수명(매개변수,인수)
// 1.매개변수가 없는 함수
function showError(){
    alert('에러가 발생했습니다. 새로고침 해주세요.')
}
showError();


// 2. 매개변수가 있는 함수

// let msg = 'Hello'; // 이 위치에 선언하면 전역변수 (global variable)
function sayHello(name){
    // console.log(name);
    let msg = 'Hello'; // 지역변수 (local variable) msg 선언
    if(name){
        msg += `, ${name}.`;
    } else {
        msg += '.'
    }
    console.log(msg);
}
sayHello('Mike');
sayHello('Tom');
sayHello('Jane');
sayHello();

console.log(msg) // 지역변수이므로 함수 밖에서 사용 불가