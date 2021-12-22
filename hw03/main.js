function calu(a) {
    if (a > 999) {
        console.log('Число больше чем 999');
        return null
    };
    let hundred = Math.floor(a / 100);
    a = a - hundred * 100;
    let ten = Math.floor(a / 10);
    let unit = a - ten * 10;
    return {
        hundred: hundred,
        ten: ten,
        unit: unit,
    }
}
let numb = parseInt(prompt())
console.log(calu(numb))

function addProductBasket(arr, name, price, quantity) {
    arr.push({
        product: name,
        price: price,
        quantity: quantity,
        total: totalSum
    });
}

function totalSum() {
    return this.price * this.quantity;
}

var basket = [{
        product: 'shirt',
        price: 200,
        quantity: 2,
        total: totalSum
    },
    {
        product: 'shorts',
        price: 700,
        quantity: 1,
        total: totalSum
    },
    {
        product: 'dress',
        price: 1100,
        quantity: 3,
        total: totalSum
    },
    {
        product: 'socks',
        price: 150,
        quantity: 5,
        total: totalSum
    },
]

function countBasketPrice(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].total();
    }
    return sum;
}

function descBasketPrice(arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        str += (i + 1) + '. ' + arr[i].product + ' - ' + arr[i].price + ' * ' + arr[i].quantity + ' = ' + (arr[i].total()) + '\n';
    }
    return str;
}

console.log('В корзину добавлены следующие товары:\n' + descBasketPrice(basket) + '\nОбщая стоимость составляет: ' + countBasketPrice(basket));