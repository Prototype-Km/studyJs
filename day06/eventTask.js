
//이름을 입력하고 등록버튼을 클릭한다.
// 각 사각형을 클릭하면 순서대로 성, 이름이 나오게 된다.
// 입력 예 ) 한동석
// 출력 예 ) 한 동 석 

// 이름이 두 글자라면, 마지막 사각형에는 *를 출력한다
// 입력 예 ) 이찬 
// 출력 예 ) 이 찬 * 
const btn1 = document.querySelector("input[type=button]");
const arDiv = document.querySelectorAll(".square");
globalThis.inputName;

arDiv.forEach((div,i) => div.addEventListener('click',function(){
    console.log(globalThis.inputName[i]);
}))

btn1.addEventListener('click',function(){
    globalThis.inputName = document.querySelector("input[name=name]").value.split("");
    //이름 가져와서 값 저장하고 클릭하면 이름 인덱스로 보여줄거임change함수
    //Array로 바꿔서 인덱스
    // inputName.forEach((n , i) => arDiv[i].innerHTML = n);
    });
        


