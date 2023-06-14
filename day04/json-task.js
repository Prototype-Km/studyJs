//상품명과 가격을 JSON으로 만든다.
//위 JSON을 JS Object객체로 변환한다.
//각 프로퍼티를 출력한 뒤 다시 JSON으로 변환한다.


//JSON으로 만들기 ㅋㅋ 
let productJSON = `{"name":"감자", "price":"1000"}`;
console.log(productJSON);

//JSON을 JS Object객체로 변환
productObject = JSON.parse(productJSON);
console.log(productObject);
console.log(productObject.name);
console.log(productObject['price']);
console.log(productObject["price"]);
productObject.name = "사과";
console.log(productObject);

//다시 JSON으로 바꿀게
productJSON = JSON.stringify(productObject);

console.log(productJSON);








// function Product(name, price){
//     this.name=name;
//     this.price=price;
// }

// let product = new Product('감자',1000);
// console.log(product);

// //JSON으로 변환
// let productJSON = JSON.stringify(product);
// console.log(productJSON);  //JSON 임 

// productJSON = JSON.parse(productJSON);
// console.log(productJSON); // 객체임