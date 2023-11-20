/*eslint-disable*/ //WARNING 메세지 지우는 기능

import { useState } from "react";
import "./App.css";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);

  let [따봉, 따봉변경] = useState(0);
  let [따봉2, 따봉변경2] = useState(0);
  let [따봉3, 따봉변경3] = useState(0);
  let [modal, setModal] = useState(false);

  // 자주 변경될거 같은 html부분은 state로 만들기

  [1, 2, 3].map(function (a) {
    return;
  });

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자코트추천";
          글제목변경(copy);
          //state변경함수 특징
          // 기존state == 신규state의 경우 변경안해줌

          //array / object 특징
          //array / object 담은 변수엔 화살표만 저장됨

          //state가 array / object면 독립적인 카피본(shallow copy)을 만들어서 수정해야함
        }}
      >
        글수정
      </button>  글제목 변경하는 버튼 */}

      {/* <button
        onClick={() => {
          let copy = [...글제목]; // state 안에 있는 배열을 가져와서 독립적인 카피본으로 만든다
          copy.sort(); // copy의 값을 sort()함수를 사용해서 오름차순으로 만들어준다
          글제목변경(copy); // 글제목변수를 글제목변경함수를 사용해서 바꿔준다 => 글제목을 가나다순으로 바꿔줌
        }}
      >
        가나다순
      </button>{" "}
      가나다순 변경하는 버튼 */}

      {/* <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4
          onClick={() => {
            {
              setModal(true);
              {
                modal == true ? setModal(false) : <Modal />;
              }

              // console.log(modal);
            }
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}
      {글제목.map(function (a, i) {
        // 첫번째 자리는 array에 있던 데이터,
        // 두번째 자리는 반복문 돌때마다 0부터 1씩 증가하는 정수
        return (
          <div className="list" key={i}>
            <h4>
              {a}
              <span
                onClick={() => {
                  따봉변경(따봉 + 1);
                }}
              >
                👍
              </span>
              {[따봉, 따봉2, 따봉3]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {/* map()함수
      1. 왼쪽 array 자료만큼 내부코드 실행해줌
      2. return 오른쪽에 있는걸 array로 담아줌
      3. 유용한 파라미터 2개 사용가능 */}
      {modal == true ? <Modal /> : null}
      {/* 컴포넌트 장점  
      1. 반복적인 html축약 
      2. 큰 페이지틀 
      3. 자주 변경되는것 */}
      {/* 컴포넌트 단점
      state 가져쓸떄 문제생김 */}
      {/* 동적인 ul만드는 step
      1. html css로 미리 디자인 완성
      2. ul의 현재 상태를 state로 저장됨
      3. state에 따라 ul가 어떻게 보일지 작성
      ex)
      {modal == true ? <Modal /> : null} 
      */}
    </div>
  );

  function Modal() {
    return (
      <div className="modal">
        <h4>제목</h4>
        <p>날씨</p>
        <p>상세내용</p>
      </div>
    );
  }
}

export default App;
