// 반복문
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

for (let i = 0; i < rainbowColors.length; i++) {
    console.log(rainbowColors[i])
}

console.log('================================')

for (const color of rainbowColors) {
    console.log(color)
}

// Quiz

const priceList = [1000, 2000, 5000, 7000, 10000, 9000, 3000, 15000, 20000, 17000]
let sum = 0

for (const price of priceList) {
    sum += price
}
const avg = sum / priceList.length
console.log(`합계 : ${sum}, 평균 : ${avg}`)