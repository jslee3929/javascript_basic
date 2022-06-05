// 우선순위 : AND가 OR보다 먼저 평가됨.
const gender = 'F';
const name = 'Jane';
const isAdult = true;

if(gender === 'M' && name === 'Mike' || isAdult){
// if((gender === 'M' && name === 'Mike') || isAdult){
    console.log('통과') // (false) or true가 되므로 true
} else {
    console.log('돌아가.')
}

if(gender === 'M' && (name === 'Mike' || isAdult)){
    console.log('통과')
} else {
    console.log('돌아가.') // false & (true)가 되므로 false
}

if(gender === 'F' || name === 'Mike' && !isAdult){
    console.log('통과') // true or (false)가 되므로 true
} else {
    console.log('돌아가.')
}

if((gender === 'F' || name === 'Mike') && !isAdult){
    console.log('통과')
} else {
    console.log('돌아가.') // (true) & false가 되므로 false
}