//버튼을 클릭했을 때 실행할 함수를 설정한다.

const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', iamResult)


// iamResult 함수를 설정한다( input값을 text-result에 넣는 것이다. )
function iamResult() {
    const x = document.getElementById('text-input').value;
    document.getElementById('text-result').innerText = x;
}