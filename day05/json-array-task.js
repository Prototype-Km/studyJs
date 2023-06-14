//상품명,가격,재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.

//같은 프로퍼티를 포함하니까 프로토타입을 만든다.
function Product(name, price, stock){
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let potato = new Product("감자",1000,50);
let apple = new Product("사과",2000,10);
let iceAmericano = new Product("아이스아메리카노",3500,40);
console.log(potato);
console.log(`potato객체 : ${potato.name}`);

let productList = new Array(potato,apple,iceAmericano);
console.log("=======")
console.log("===Array로 감싼 객체====")
console.log(productList);

let productListJSON = JSON.stringify(productList);


console.log(productListJSON);