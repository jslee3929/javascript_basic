// 메서드 (Method) : 객체 프로퍼티로 할당된 함수
const superman = {
    name: 'clark',
    age: 33,
    fly: function(){
        console.log('날아갑니다.')
    }
}

superman.fly();

// 단축 구문
// const superman = {
//     name: 'clark',
//     age: 33,
//     fly(){
//         console.log('날아갑니다.')
//     }
// }

// superman.fly();