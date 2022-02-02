const computer = {
    name : 'Apple Macbook',
    price : 20000,
    priceInfo : function() {
        console.log(`상품명 : ${this.name}, 가격 : ${this.price}원`)
    }
}
computer.priceInfo()