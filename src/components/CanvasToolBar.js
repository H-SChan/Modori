import React from "react";
import "./CanvasToolBar.scss";

function CanvasToolBar() {
    return (
        <div className="CanvasToolBar">
            버튼은 아니지만 Cntl C+Cntl V해서 사진 붙여넣기랑 드래그앤 드랍으로
            해야됨. 정 안되면 버튼으로 만들어서 하면 좋을듯<p></p>
            필요-
            <button>폰트 크기</button>
            <button>굵게</button>
            <button>기울임꼴</button>
            <button>밑줄</button>
            <button>취소선</button>
            <button>글씨 색 변경</button>
            <p></p>
            <button>좌측정렬</button>
            <button>중앙정렬</button>
            <button>우측정렬</button>
            <p></p>
            선호-
            <button>폰트 변경</button>
            <button>글씨 바탕색 변경</button>
            <button>표 만들기</button>
            <button>
                인용(박스를 하나 생성해서 그 안에 글을 써 강조될수 있도록)
            </button>
            <button>구분선 </button>
        </div>
    );
}

export default CanvasToolBar;
