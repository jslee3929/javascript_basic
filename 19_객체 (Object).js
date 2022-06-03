const superman = {
    name : 'clark',
    age : 33,
}

// 접근
console.log(superman) // { name: 'clark', age: 33 }
console.log(superman.name); // 'clark'
console.log(superman['age']); // 33

// 추가
superman.gender = 'male';
superman['hairColor'] = 'black';

// 삭제
delete superman.hairColor;

// 프로퍼티 존재 여부 확인
console.log(superman.hairColor); // 존재하지 않는 프로퍼티 = undefined
console.log('birthDay' in superman); // false
console.log('age' in superman); // true