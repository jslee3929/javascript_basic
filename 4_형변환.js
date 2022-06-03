// const mathScore = prompt("수학 몇점?"); // 100
// const engScore = prompt("영어 몇점?"); // 80
// const result = (mathScore + engScore) / 2;
// console.log(result) // 5040, 이상한 값이 나옴

// const mathScore = 100; // 100
// const engScore = 80; // 80
// const result = (mathScore + engScore) / 2;
// console.log(result) // 90, 정상적인 값이 나옴

// prompt를 통해 입력받은 값은 문자형임
// 100과 80을 prompt로 입력받아 더하면 10080이 됨
// 10080을 2로 나누니 5040이 됨
// 문자형을 나눗셈하면 자동으로 숫자형으로 변환, 오류 X (자동 형변환)

// String() : 문자형으로 변환
// console.log(
//     String(3),
//     String(true),
//     String(false),
//     String(null),
//     String(undefined)
// )

// Number() : 숫자형으로 변환
// console.log(
//     Number("1234"), // 1234
//     Number("123abcd4"), // NaN
//     Number(true), // 1
//     Number(false), // 0
//     Number(null), // 0
//     Number(undefined) // NaN
// )

// Boolean() : true와 false로 변환
// false가 되는 경우 : 0, 빈 문자열(""), null, undefined, NaN
console.log(
    Boolean(1), // true
    Boolean(123), // true
    Boolean("javascript"), // true
    Boolean('0'), // true
    Boolean(" "), // true
    Boolean(0), // false
    Boolean(""), // false
    Boolean(null), // false
    Boolean(undefined), // false
    Boolean(NaN) // false
)