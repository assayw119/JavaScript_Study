const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.log(rainbowColors.length) // 7을 출력
console.log(rainbowColors[rainbowColors.length - 1]) // length 를 응용하여 배열의 마지막 요소도 쉽게 찾아서 출력 가능!

rainbowColors.push('ultraviolet') // 배열의 마지막에 ultarviolet 추가
console.log(rainbowColors) // ultraviolet이 추가된 rainbowColors 출력

rainbowColors.pop() // 배열의 마지막 요소 ultraviolet을 제거
console.log(rainbowColors) // ultraviolet이 제거된 rainbowColors 출력

