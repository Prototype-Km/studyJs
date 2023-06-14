let user = {id: 'hds',
            pw : '1234',
            name: '한동석'
        };

        // js객체를 
        // json형식으로 바꿈 
let userJSON = JSON.stringify(user);
let userparse = JSON.parse(userJSON);

console.log("josn을 js객체로")
console.log(userparse);
console.log(" -----그냥 js 객체-------")
console.log(user);
console.log(" -----JS를 JSON으로 바꾼거-------")
console.log(userJSON);