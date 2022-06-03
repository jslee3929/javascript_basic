// this : 객체와 메서드의 관계
// const user = {
//     name: 'Mike',
//     sayHello: function(){
//         console.log(`Hello, I'm ${user.name}`); // 문제 발생 가능
//     }
// }

// user.sayHello();

// const user = {
//     name: 'Mike',
//     sayHello: function(){
//         console.log(`Hello, I'm ${this.name}`); // this = user
//     }
// }

// user.sayHello();

// 같은 함수명에 다른 this가 적용됨
// let boy = {
//     name: 'Mike',
//     sayHello: function(){
//         console.log(`Hello, I'm ${this.name}`);
//     }
// }

// let girl = {
//     name: 'Jane',
//     sayHello: function(){
//         console.log(`Hello, I'm ${this.name}`);
//     }
// }

// boy.sayHello(); // Hello, I'm Mike
// girl.sayHello(); // Hello, I'm Jane

// 하나의 객체에 man과 boy 2가지 방법으로 접근 가능
// let boy = {
//     name: 'Mike',
//     showName: function(){
//         console.log(boy.name)
//     }
// }
// boy.showName(); // Mike

// let man = boy;
// man.name = 'Tom' // man.name을 Tom으로 변경하면
// console.log(boy.name) // boy.name = Tom
// man.showName(); // Tom

// boy = null; // boy를 없애버림
// man.showName(); // boy.name을 출력해야 하는데 boy = null이므로 에러 발생

// this 활용
let boy = {
    name: 'Mike',
    showName: function(){
        console.log(this.name) // boy.name => this.name으로 변경
    }
}
let man = boy;
boy = null; // boy를 없애도
console.log(man) // man은 정상적으로 출력됨
console.log(boy) // boy는 null
man.showName(); // man.showName()는 this.name이므로 Mike 출력