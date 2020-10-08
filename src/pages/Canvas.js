import React from "react";
import CanvasTemplate from "../components/CanvasTemplate"; //총 캔바스를 감싸는 컴포넌트입니다.
import CanvasToolBar from "../components/CanvasToolBar"; //CanvasTemplate의 상단에 위치하는 툴바를 의미합니다.
import CanvasWrapper from "../components/CanvasWrapper"; //CanvasTemplate의 하단에 위치하는 캔버스를 의미합니다.

function Canvas() {
    return (
        <>
            <CanvasTemplate>
                <CanvasToolBar></CanvasToolBar>
                <CanvasWrapper></CanvasWrapper>
            </CanvasTemplate>
        </>
    );
}

export default Canvas;
