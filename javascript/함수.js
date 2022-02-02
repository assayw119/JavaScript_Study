function calculateAvg(price1, price2) {
    const sum = price1 + price2
    console.log(`합계 : ${sum}`)
    const avg = sum / 2
    return avg
}

avg1 = calculateAvg(1000,2000)
avg2 = calculateAvg(3000,4000)

console.log(`두 상품의 평균 : ${avg1}`)
console.log(`두 상품의 평균 : ${avg2}`)