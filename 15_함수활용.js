// OR 연산자 활용
function sayHello1(name){
    let newName = name || 'friend'; // name이 false면 friend 출력
    let msg = `Hello, ${newName}`;
    console.log(msg)
}

sayHello1(); // Hello, friend
sayHello1('Jane'); // Hello, Jane

// 매개변수 기본값 활용 (default value)
function sayHello2(name = 'friend'){ // 매개변수 입력이 없다면 name = friend
    let msg = `Hello, ${name}`;
    console.log(msg)
}

sayHello2(); // Hello, friend
sayHello2('Jane'); // Hello, Jane