// for ... in 반복문
const superman = {
    name : 'clark',
    age : 33,
}

for(let key in superman){
    console.log(key) // name, age
    console.log(superman[key]) // clark, 33
} // name, clark, age, 33

const Mike = {
    name: "Mike",
    age : 30,
}

for(x in Mike){
    console.log(x) // name, age
    console.log(Mike[x]) // Mike['name'], Mike['age']
}