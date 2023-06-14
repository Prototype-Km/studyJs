let account = {
    owner : "한동석",
    age : 20,
    password: "1234",
    account : "110-112-123123412",
    address1 :"서울시",
    address2: "강남구"
};

console.log(account);
console.log(account.owner);
console.log(account["age"]);

account.age = 25;
console.log(account);
account.bank = "우리은행";
console.log(account);
console.log(account.bank);

console.log(account["password"]);

for(let i=1;i<3; i++){
    console.log(account[`address${i}`]);
}

account["money"] = 10000;
account.deposit = function(money){
    this.money += money;
}

console.log(account.money);
account.deposit(30000);
console.log(account.money);
console.log(account);

console.log(`${account.money}원`);


// let account = new Object(); //프로토타입 