import React, { useRef, useState } from "react";
import "./CanvasWrapper.scss";

function CanvasWrapper() {
    const textRef = useRef(null);
    const canvasRef = useRef(null); //canvas에 대한 ref
    const log = () => {
        console.log(textRef.current.value);
    };
    return (
        <div className="CanvasWrapper">
            <div className="CanvasWrapper_text_container">
                <textarea
                    name=""
                    ref={textRef}
                    className="CanvasWrapper_text"
                    placeholder="여기에 텍스트를 입력하세요"
                    cols="120"
                    rows="10"
                    onChange={log}
                ></textarea>
            </div>
            <div className="CanvasWrapper_draw_container">
                <canvas className="CanvasWrapper_draw" ref={canvasRef}></canvas>
            </div>
        </div>
    );
}

export default CanvasWrapper;
