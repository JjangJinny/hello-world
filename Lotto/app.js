// 로또 번호를 선정하는 함수
function getLotto() {
    let selectedNum = [];           // 로또 번호를 저장할 배열 선언
    while (selectedNum.length < 7) {            // 선택된 로또번호의 수가 7개 미만일 경우 반복
        let randomNum = Math.floor(Math.random() * 45) + 1;     // 0 이상 45 미만 난수에 1을 더해 1~45 숫자가 나오도록
        if (!selectedNum.includes(randomNum)) {                 // 이미 선택된 로또번호와 겹치지 않도록 배열에 존재하는지 확인
            selectedNum.push(randomNum);                        // 존재하지 않을 경우 배열에 삽입
        }
    }
    return selectedNum;             // 선택된 로또 번호 배열 리턴
}

// 버튼 클릭 이벤트에 연결
const btn = document.getElementById("buttonId");        // 버튼 id 설정
const result1 = document.getElementById("result1");     // 로또 번호를 한자리씩 가져올 요소의 id 설정
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");
const result4 = document.getElementById("result4");
const result5 = document.getElementById("result5");
const result6 = document.getElementById("result6");
const result7 = document.getElementById("result7");
const result8 = document.getElementById("result8");
btn.addEventListener("click", function () {             // 버튼이 click 될 경우 실행할 이벤트 정의
    // 이전에 추가된 모든 자식 요소를 반복을 통해 제거
    while (result1.firstChild) {                        // 자식노드가 있을 경우 반복
        // result_ 부모요소에 대해 첫 번째 자식 노드를 삭제
        result1.removeChild(result1.firstChild);
        result2.removeChild(result2.firstChild);
        result3.removeChild(result3.firstChild);
        result4.removeChild(result4.firstChild);
        result5.removeChild(result5.firstChild);
        result6.removeChild(result6.firstChild);
        result7.removeChild(result7.firstChild);
        result8.removeChild(result8.firstChild);
    }

    const lottoNumbers = getLotto(); // getLotto 함수를 호출하여 결과 배열을 받음
    
    // 선택된 로또 번호를 하나씩 보여줄 span 정의하여 result1의 자식노드에 추가
    const span1 = document.createElement("span");
    span1.innerText = lottoNumbers[0];      // 1번 로또 번호
    result1.appendChild(span1);

    const span2 = document.createElement("span");
    span2.innerText = lottoNumbers[1];      // 2번 로또 번호
    result2.appendChild(span2);

    const span3 = document.createElement("span");
    span3.innerText = lottoNumbers[2];      // 3번 로또 번호
    result3.appendChild(span3);

    const span4 = document.createElement("span");
    span4.innerText = lottoNumbers[3];      // 4번 로또 번호
    result4.appendChild(span4);

    const span5 = document.createElement("span");
    span5.innerText = lottoNumbers[4];      // 5번 로또 번호
    result5.appendChild(span5);

    const span6 = document.createElement("span");
    span6.innerText = lottoNumbers[5];      // 6번 로또 번호
    result6.appendChild(span6);

    const span7 = document.createElement("span");
    span7.innerText = "+";                  // 보너스 번호를 구분할 문자 삽입
    result7.appendChild(span7);

    const span8 = document.createElement("span");
    span8.innerText = lottoNumbers[6];      // 7번(보너스) 로또 번호
    result8.appendChild(span8);

});