class Notebook {
    constructor(name, price, company) {
        this.name = name
        this.price = price
        this.company = company
    }
}

const a = new Notebook('Mac',200,'Apple')
console.log(a)
console.log(a.name)
console.log(a.price)
console.log(a.company)


// Quiz
class Cloth {
    constructor(color, size, price) {
        this.color = color
        this.size = size
        this.price = price
    }

    printInfo() {
    console.log(`색깔 : ${this.color}, 사이즈 : ${this.size}, 가격 : ${this.price}`)
    }
}
const cloth = new Cloth('blue',100,2000000)
cloth.printInfo()