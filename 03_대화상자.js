// alert 알려줌
// prompt 입력 받음

// const name = prompt("이름을 입력하세요.");
// alert("환영합니다. " + name + "님");
// alert(`안녕하세요, ${name}님. 환영합니다.`);
// 취소를 누르면 null 값이 들어감 (아무 내용도 없다는 뜻)

// 인수 = 함수를 실행하는 괄호 안에 들어가는 값
// 인수를 2개 입력하면 뒤의 것이 기본값으로 들어감.
// const name = prompt("이름을 입력하세요.", "이주성");

// confirm 확인 받음
const isAdult = confirm('당신은 성인입니까?')
console.log(isAdult) // 콘솔에 확인 = true, 취소 = false 출력

// 단점
// 1. 알림창이 떠있는 동안 스크립트 일시정지
// 2. 스타일링이 불가능 (위치와 모양 정할 수 없음)