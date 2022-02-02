// 문자 + 숫자 = 문자

console.log('My' + 'car') // My car
console.log('1' + 2) // 12

const shoesPrice = 200000
console.log(`이 신발의 가격은 ${shoesPrice}원입니다`)
// 템플릿 리터럴 (백틱 ` 사용)
// console.log('이 신발의 가격은 ' + shoesPrice + '원입니다') 와 동일


let count = 1
const preIncrement = ++count
// 증감연산자를 앞에 놓게 되면 아래 주석으로 처리한 두 줄의 코드와 같은 내용입니다.
// 먼저 자기 자신에게 1을 더해서 재할당 한 후, 이를 preIncrement 에 할당했다는 의미입니다.
// count = count + 1
// const preIncrement = count
console.log(`count: ${count}, preIncrement: ${preIncrement}`) // count: 2, preIncrement: 2

let count1 = 1
const postIncrement = count1++
// 증감연산자를 뒤에 놓게 되면 아래 주석으로 처리한 두 줄의 코드와 같은 내용입니다.
// postIncrement에 자기 자신의 값을 먼저 할당하고, 이후에 1을 더해서 재할당합니다. 
// const postIncrement = count
// count = count + 1
console.log(`count: ${count1}, postIncrement: ${postIncrement}`) // count: 2, postIncrement: 1
