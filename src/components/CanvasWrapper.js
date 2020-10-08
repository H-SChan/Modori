import React from "react";
import "./CanvasWrapper.scss";

function CanvasWrapper() {
    return (
        <div className="CanvasWrapper">
            <div className="CanvasWrapper_text_container">
                <textarea
                    name=""
                    className="CanvasWrapper_text"
                    placeholder="여기에 텍스트를 입력하세요"
                    cols="120"
                    rows="10"
                ></textarea>
            </div>
            <div className="CanvasWrapper_draw_container">
                <canvas></canvas>
            </div>
        </div>
    );
}

export default CanvasWrapper;
