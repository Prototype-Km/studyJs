
//이름을 입력하고 등록버튼을 클릭한다.
// 각 사각형을 클릭하면 순서대로 성, 이름이 나오게 된다.
// 입력 예 ) 한동석
// 출력 예 ) 한 동 석 

// 이름이 두 글자라면, 마지막 사각형에는 *를 출력한다
// 입력 예 ) 이찬 
// 출력 예 ) 이 찬 * 
const btn1 = document.querySelector("input[type=button]");
const arDiv = document.querySelectorAll(".square");

function showCharacter(name){
    arDiv.forEach((div,i) => div.addEventListener('click',function(){
        console.log(i);
        console.log(name[i]);
        arDiv[i].innerHTML += name[i];

    }));
};

function register(callback){
    let text = "";
    let name = document.querySelector("input[name=name]").value;
    
    arDiv.forEach(div => div.innerHTML ="");
    
    for(let i=0; i<3-globalThis.name.length; i++){
        text += "♥︎";
    }
    name += text;
    callback(name);
}


        


