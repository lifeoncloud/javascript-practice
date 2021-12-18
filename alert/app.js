//버튼
const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', iamResult)

//input값을 alert창으로 띄우는 함수
function printInputValue()  {
    const value = document.getElementById('text-input').value;
    alert(value)
}

// 최종 실행 함수
function iamResult(){
    alert('iamResult 여깃슴다!!')
}
