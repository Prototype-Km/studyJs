//typescript설치 명령어


//npm install typescript --save-dev
//npm install -g typescript
//npm install -g ts-node @types/node
//npx tsc
//오류 발생 시 :Set-ExecutionPolicy Unrestricted (관리자 권한으로 실행)
//tsc --init

//JS는 오버로딩을 지원하지 않는다. 함수의 이름은 무조건 다르게 선언해야한다. 
//위에서 아래로 실행되니 덮어 씌워진다.

// 가변인자  , 길이에 제한이 없는 List타입

// let result= add(1,2,4,1);
// console.log(result);
// function add(...numbers ){
//     let result =0;
//     for(let i=0; i<numbers.length; i++){
//         result += numbers[i];
//     }
//     return result;
// }
let result: number = 10;


//가변인자 
intro("한동석","남자",20);

function intro(name: string, ...args: any[]){
    console.log(`이름 : ${name}`);
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }
}




//함수  호출 호이스팅 , 밑에 선언되어 있지만 호이스팅
// let result = add(1,2,3);
// let result= add(1,2);
// console.log(result);

// function add(number1, number2, number3){
//     return number1 + number2 + number3;
// }
// function add(number1, number2){
//     return number1 + number2;
// }


