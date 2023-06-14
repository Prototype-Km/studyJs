// 상품명, 가격, 재고를 JS객체에 프로퍼티로 담는다.
// JSON 형식으로 변환한 뒤, product.json으로 출력한다.
// product.json에 있는 JSON형식을 JS Object 타입으로 변환하여 각 프로퍼티를 출력한다.
let file = require('fs');

function Product(name, price, stock){
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let potato = new Product("감자", 1000, 20);
let apple = new Product("사과", 2000, 10);
let chicken = new Product("치킨", 21000, 5);
//  근데 array로 담을래
let productList = new Array(potato,apple,chicken);
console.log(productList);
//JSON 형식으로 변환한 뒤 .product.json으로 출력 
let productJson = JSON.stringify(productList);
console.log(productJson);
// file.writeFile('product.json',productJson,'utf-8', error => {});



result = JSON.parse(file.readFileSync('product.json','utf-8',(error,content)=>{}));
console.log(result);
 
    


// let productObjectList =JSON.parse(productJson);
// console.log(productObjectList);
// console.log(productObjectList[0].name);
// console.log(productObjectList[1]['name']);
// console.log(productObjectList[2].price);