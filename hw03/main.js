let basket = [{
        product: "notebook",
        price: 30,
    },
    {
        product: "pen",
        price: 30,
    },
];

for (let prod of basket) {
    console.log("product " + prod.product + " price: " + prod.price);
}

function countBasketPrice(basket) {
    let funBasketPrice = 0;
    for (let prod of basket) {
        funBasketPrice += prod.price;
    }
    return funBasketPrice;
}
console.log("Стоимость корзины: " + countBasketPrice(basket) + "$");




let nums = 2;
while (nums <= 100) {
    let check = true;
    for (let i = 2; i < nums; i++) {
        if (nums % i === 0) {
            check = false;
            break;
        }
    }
    if (check) console.log(nums);
    nums++;
}