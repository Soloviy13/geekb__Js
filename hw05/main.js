let field = document.createElement('div');
document.body.appendChild(field);

for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
        let css = x ? {} : {
            clear: 'left'
        };
        let content = '';
        if (y == 0 || y == 9)
            content = x > 0 && x < 9 ? 'ABCDEFGH'.charAt(x - 1) : null;
        else if (x == 0 || x == 9)
            content = 9 - y;
        else css.background = (x + y) % 2 ? '#000' : '#fff';

        let node = document.createElement('div');
        css.width = '20px';
        css.height = css.width;
        css.textAlign = 'center';
        css.float = 'left';
        for (let i in css) node.style[i] = css[i];
        if (content)
            node.innerHTML = content;
        field.appendChild(node);
    }
}
let main = document.getElementById('main')



function basket() {
    let localId = 0;
    let obj = {
        products: [],
        add: function (prod, price) {
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
                    console.log(product)
                }
                document.getElementById('totalSpan').innerText =
                    `в корзине ${count}   на сумму  ${sum} товаров`
            }
        }
    };
    return obj
}

let myBasket = basket();

myBasket.add('MacBook', 1500)
myBasket.add('Ipad', 700)
myBasket.add('IphoneXr', 459)