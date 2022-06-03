// 화살표 함수에서 this 사용
// 화살표 함수는 일반 함수와 달리 자신만의 this를 가지지 않음
// 화살표 함수 내부에서 this를 사용하면 그 this는 외부에서 값을 가져옴
// 객체의 메소드를 작성할 때는 화살표 함수로 작성하지 않아야 함.
let boy = {
    name: 'Mike',
    sayHello: () => {
        console.log(this); // this != boy
    }
}

boy.sayHello(); // this = 전역 객체
// 브라우저 환경 전역 객체 : window
// Node js 전역 객체 : global