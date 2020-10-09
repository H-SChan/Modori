import React from "react";
import "./CanvasToolBar.scss";
import {
    BiBold,
    BiItalic,
    BiUnderline,
    BiFontColor,
    BiAlignLeft,
    BiAlignMiddle,
    BiAlignRight,
} from "react-icons/bi";
import { ImFontSize, ImStrikethrough } from "react-icons/im";
import { MdFormatColorFill, MdSpellcheck } from "react-icons/md";
import { AiOutlineLine } from "react-icons/ai";

function CanvasToolBar() {
<<<<<<< HEAD
    return (
        <div className="CanvasToolBar">
            <div className="CanvasToolBar_textOption">
                <button className="CanvasToolBar_button" title="폰트 크기 변경">
                    <ImFontSize></ImFontSize>
                </button>
                <button className="CanvasToolBar_button" title="폰트 굵기 변경">
                    <BiBold></BiBold>
                </button>
                <button
                    className="CanvasToolBar_button"
                    title="폰트 기울기 설정"
                >
                    <BiItalic></BiItalic>
                </button>
                <button className="CanvasToolBar_button" title="밑줄 표시">
                    <BiUnderline></BiUnderline>
                </button>
                <button className="CanvasToolBar_button" title="취소선 표시">
                    <ImStrikethrough></ImStrikethrough>
                </button>
                <button className="CanvasToolBar_button" title="폰트 색 변경">
                    <BiFontColor></BiFontColor>
                </button>
                <button className="CanvasToolBar_button" title="글 왼쪽 정렬">
                    <BiAlignLeft></BiAlignLeft>
                </button>
                <button className="CanvasToolBar_button" title="글 가운데 정렬">
                    <BiAlignMiddle></BiAlignMiddle>
                </button>
                <button className="CanvasToolBar_button" title="글 오른쪽 정렬">
                    <BiAlignRight></BiAlignRight>
                </button>

                <select id="change_font">
                    <option value="">기본서체</option>
                    <option value="">Noto Sans KR</option>
                </select>
                <button
                    className="CanvasToolBar_button"
                    title="폰트 배경색 변경"
                >
                    <MdFormatColorFill></MdFormatColorFill>
                </button>
                <button className="CanvasToolBar_button" title="구분선 생성">
                    <AiOutlineLine></AiOutlineLine>
                </button>
                <button
                    className="CanvasToolBar_button"
                    title="맞춤법 확인"
                    spellCheck="true"
                >
                    <MdSpellcheck></MdSpellcheck>
                </button>
                <div>
                    선호기능-↓
                    <p>Cntl C, Cntl V</p>
                </div>
            </div>
            <div className="CanvasToolBar_drawOption">
                <div>
                    필수-
                    <button>펜(사각)</button>
                    <button>펜(둥근)</button>
                    <button>지우개</button>
                    <button>색 변경</button>
                    <button>두께조절</button>
                </div>
                <div>
                    선호-
                    <button>선지우개</button>
                    <button>페인트통</button>
                    <button>붓</button>
                    <button>에어브러쉬</button>
                    <button>색 저장</button>
                    <button>스포이드</button>
                    <button>사각형 그리기 툴</button>
                    <button>삼각형 그리기 툴</button>
                    <button>원 그리기 툴</button>
                    <button>되돌리기(전)</button>
                    <button>되도리기(후)</button>
                </div>
                <div>
                    추가기능-↓
                    <p>한 점을 찍고 Shift키를 누른채로 점을 찍으면 직선이 그이게 하기</p>
                    <p>Cntl Z</p>
                    <p>Cntl C, Cntl V</p>
                </div>
            </div>
        </div>
    );
=======
    return <div className="CanvasToolBar">
        버튼은 아니지만 Cntl C+Cntl V해서 사진 붙여넣기랑 드래그앤 드랍으로 해야됨. 정 안되면 버튼으로 만들어서 하면 좋을듯<p></p>
        필요-
        <button>폰트 크기</button><button>굵게</button><button>기울임꼴</button><button>밑줄</button>
        <button>취소선</button><button>글씨 색 변경</button><p></p>
        <button>좌측정렬</button><button>중앙정렬</button><button>우측정렬</button>
        <p></p>
        선호-
        <button>폰트 변경</button><button>글씨 바탕색 변경</button><button>표 만들기</button>
        <button>인용(박스를 하나 생성해서 그 안에 글을 써 강조될수 있도록)</button>
        <button>구분선</button>
    </div>;
>>>>>>> b866f9b69b58bbb9814cdfff786f1f5835757cef
}

export default CanvasToolBar;
