function makeObject(name, age){
    return{
        name,
        age,
        hobby: 'football',
    };
}

const Mike = makeObject('Mike', 30)
console.log(Mike); // { name: 'Mike', age: 30, hobby: 'football' }

console.log('age' in Mike); // true
console.log('birthday' in Mike); // 존재하지 않기 때문에 false

// function isAdult(user){
//     if(user.age < 20){
//         return false;
//     }
//     return true;
// }

// const Jane = {
//     name: "Jane",
// }

// console.log(isAdult(Mike)); // true
// console.log(isAdult(Jane)); // 나이를 입력하지 않았는데 true가 나옴
// Jane.age = undefined, undefined < 20 = false이므로 true가 return됨.

function isAdult(user){
    if(!('age' in user) || // user에 age가 없거나
    user.age < 20){ // 20살 미만이면
        return false; // false를 return
    }
    return true;
}

const Jane = {
    name: "Jane",
}

console.log(isAdult(Mike)); // true
console.log(isAdult(Jane)); // false