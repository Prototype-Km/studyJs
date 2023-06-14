//기차에 등급별 좌석을 구현하자 !
// 3명의 고객이 있으며, 각 고객별 정보는 다음과 같다.

// [1]
// 이름 : 홍길동
// 나이 : 20
// 등급 : 1

//[2]
//이름: 이순신
//나이: 40
//등급: 2

//[3]
//이름: 장보고
//나이: 19
//등급: 3

// 3명은 기차 한 대에 모두 탑승한다.
// 기차 객체를 만들고 각 손님들을 프로퍼티로 선언한다.

let train = new Object();

//프로토타입 
//new 뒤에 나오는 생성자를 자바스크립트에서는 프로토타입이라고 부른다.
//프로토타입은 함수로 선언하여 사용하며 반드시 대문자로 시작한다.
function User(name, age , grade){
    this.name = name;
    this.age = age;
    this.grade =grade;
}

let people =new User("홍길동",20, 1);
let people2 = new User("이순신",40,2);
let people3 = new User("장보고", 19, 3);


train.passenager = people;
train.passenager2 = people2;
train.passenager3 = people3;

console.log(train.passenager.name);
console.log(train.passenager2.name);