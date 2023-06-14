// let singer = {name :"아이유", age : 27, level :1};
// let actor = {name :"아이유", age : 27, level :1};
// let kim = {name :"김사과", age : 20, level :3};

function Passenger(name, age ,level){
    this.name= name;
    this.age = age;
    this.level = level;
}

let han = new Passenger("한동석", 32, 3);
let lee = new Passenger("이순신", 41, 2);
let kim = new Passenger("김사과", 25, 1);


//Array에 객체 담기
let train = new Array(han ,lee, kim);
console.log(train);


let trainJSON = JSON.stringify(train);
console.log(trainJSON);
//관리자 페이지, 서버에서 목록을 이래온다 , 게시글 목록 이래 온다 서버에서 
//js로 받고 HTML 태그안에 넣어준다.
