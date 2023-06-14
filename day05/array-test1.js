// let datas = [];
// datas[0]  = 10;
// datas[4] = 20;

// console.log(datas);

//push() : 가장 마지막에 값 추가 
// let datas = [20,3,5,7,1];
// datas.push(21);
// console.log(datas);

// // join() : 원하는 구분점을 문자열로 전달하여 각 요소를 구분한 뒤 문자열로 리턴
// let jo = datas.join(":");
// console.log(jo);

// //slice(begin, end) :원하는 부분을 추출하기 위해 시작 인덱스(inclusive)와 마지막 인덱스(exclusive)를 전달
// console.log(datas.slice(0,3));
// console.log(datas.slice(2));

// // 값에 || 연산자를 사용하면 false값일 경우 뒤에 있는 값으로 대체 된다.
// // let data = "test";
// // let data = "";
// // let result = data || 1;
// // console.log(result);    //페이징 처리 전달되면 true없음 false 

// //indexOf(value): 값을 해당 Array에서 조회 후 인덱스 번호 리턴, 조회 실패 시 -1 리턴
// console.log("ABC".indexOf("A"));
// console.log(datas.indexOf(21));


// // split("구분점")
// let weekOfDay = "월.화.수.목.금.토.일";
// console.log(weekOfDay);
// console.log(weekOfDay.split("."));


// //forEach(callback) : 반복문 
// datas.forEach(function(data){console.log(data);});
// datas.forEach(data => console.log(data));
// datas.forEach(function(data,i,datas){
//     console.log(data, i ,datas);
// });
// datas.forEach((data,i,datas) => {console.log(data,i , datas)});


// console.log("============================================");
// //기존 값을 제곱으로 변경, Math.pow(값, 승)
// console.log(datas);
// datas.forEach(data => console.log(Math.pow(data,2)));

// console.log("=====");
// datas.forEach(function(data ,i, datas){
//     datas[i] = Math.pow(data,2);
// });
// console.log(datas);

// //map(callback) : 변경 
// console.log(datas);
// datas.map(data => data/2).forEach(data => console.log(data));

//모든 칸에 값을 (초기값을) 다 담고 forEach로 돌릴수있다.
let numbers = new Array(5).fill(0);
console.log(numbers);


// numbers.map(function(number){return number+3}).forEach(function(number){console.log(number);});
// //위의 식을 Arrow Expression으로 변경하기 
// numbers.map(number => number + 3).forEach(number => console.log(number));

//filter(callback) : 리턴값이 true일 경우 수집
numbers.forEach((number,i,numbers) => numbers[i] = i + 1 );
console.log(numbers);
numbers.filter(number => number %2 ==0 ).forEach(number => console.log(number));