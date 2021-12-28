let main = document.getElementById('main')



function basket() {
    let localId = 0;
    let obj = {
        products: [],
        add: function (prod, price) {

            // for (let i = 0; i < this.products.length; i++) {
            //     if (this.products[i].prod == prod) {
            //         this.products[i].inc();
            //         return;
            //     }
            // }

            // let findProduct = this.products.filter(p => p.prod == prod);
            // if (findProduct.length > 0) {
            //     findProduct[0].inc();
            //     return;
            // }
            for (let p of this.products) {
                if (p.prod == prod) {
                    p.inc();
                    return
                }
            }
            localId++;
            let numberId = 'number' + localId;
            let plusId = 'plus' + localId;
            let minusId = 'minus' + localId;
            let deleteId = 'deleteId' + localId;
            newTovar = document.createElement('div')
            newTovar.innerHTML = `<div class="tovar1"><div><h3>${prod}</h3></div><div class="tovarItem"><div><button id='${minusId}'>-</button> <span id='${numberId}'>1</span> <button id='${plusId}'>+</button></div><span>${price}$</span> <button id='${deleteId}'>x</button></div></div>`
            main.appendChild(newTovar);

            let product = {
                owner: this,
                el: newTovar,
                id: localId,
                prod: prod,
                price: price,
                count: 1,
                inc: function () {
                    this.count++;
                    document.getElementById(numberId).innerText = this.count;
                    this.owner.show()
                },
                dec: function () {
                    if (this.count > 0) {
                        this.count--;
                        document.getElementById(numberId).innerText =
                            this.count;
                    }
                    this.owner.show()
                },
                totalPrice: function () {
                    return this.count * this.price
                },
                delete: function () {
                    let myId = this.id;
                    let selfOwner = this.owner;
                    main.removeChild(this.el);
                    this.owner.products.forEach(function (item, index) {
                        if (item.id === myId) {
                            selfOwner.products.splice(index, 1);
                        }
                    })
                    this.owner.show()
                }

            };
            document.getElementById(deleteId).addEventListener('click', () => {
                product.delete();
            });

            document.getElementById(plusId).addEventListener('click', () => {
                product.inc();
            });

            document.getElementById(minusId).addEventListener('click', () => {
                product.dec();
            });

            this.products.push(product);
            this.show();
        },
        show: function () {
            // alert(products.length)
            if (this.products.length == 0) {
                document.getElementById('totalSpan').innerText =
                    'корзина путса'
            } else {
                let sum = 0;
                let count = 0;
                for (let product of this.products) {
                    sum += product.totalPrice();
                    count += product.count;
                }
                document.getElementById('totalSpan').innerText =
                    `в корзине ${count}  товар на сумму  ${sum} $`
            }
        }
    };
    return obj
}

let myBasket = basket();

myBasket.add('MacBook', 1500)
myBasket.add('Ipad', 700)
myBasket.add('IphoneXr', 459)

let btnBasket = document.createElement('button')
btnBasket.innerText = 'далее'
btnBasket.setAttribute('id', 'btnBasket')
main.appendChild(btnBasket)


document.getElementById('btnBasket').addEventListener('click', () => {
    document.getElementById('main').style.display = 'none'
    document.getElementById('deliveryClose').style.display = 'block'
})



document.getElementById('btnDelivery').addEventListener('click', () => {
    document.getElementById('main').style.display = 'block'
    document.getElementById('deliveryClose').style.display = 'none'
})

let tovars = [{
        name: 'samsung',
        price: 100
    },
    {
        name: 'galaxy',
        price: 200
    },
    {
        name: 'lenovo',
        price: 1300
    },

];

function addTovar(i) {
    myBasket.add(tovars[i].name, tovars[i].price)
}
let tovarDivEl = document.getElementById('tovar2');

for (let i = 0; i < tovars.length; i++) {
    let tovarDiv = document.createElement('div');
    tovarDiv.innerHTML = `<h3>${tovars[i].name}</h3><span>${tovars[i].price} $</span> <button id="btnadd" onclick='addTovar(${i})'>купить</button>`;
    tovarDivEl.appendChild(tovarDiv)

}