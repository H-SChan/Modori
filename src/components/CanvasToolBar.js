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
import { MdFormatColorFill } from "react-icons/md";
import { AiOutlineLine } from "react-icons/ai";

function CanvasToolBar() {
    return (
        <div className="CanvasToolBar">
            <div className="CanvasToolBar_textOption">
                <button className="CanvasToolBar_button">
                    <ImFontSize></ImFontSize>
                </button>
                <button className="CanvasToolBar_button">
                    <BiBold></BiBold>
                </button>
                <button className="CanvasToolBar_button">
                    <BiItalic></BiItalic>
                </button>
                <button className="CanvasToolBar_button">
                    <BiUnderline></BiUnderline>
                </button>
                <button className="CanvasToolBar_button">
                    <ImStrikethrough></ImStrikethrough>
                </button>
                <button className="CanvasToolBar_button">
                    <BiFontColor></BiFontColor>
                </button>
                <button className="CanvasToolBar_button">
                    <BiAlignLeft></BiAlignLeft>
                </button>
                <button className="CanvasToolBar_button">
                    <BiAlignMiddle></BiAlignMiddle>
                </button>
                <button className="CanvasToolBar_button">
                    <BiAlignRight></BiAlignRight>
                </button>
                <div>
                    <select id="change_font">
                        <option value="">기본서체</option>
                        <option value="">Noto Sans KR</option>
                    </select>
                    <button className="CanvasToolBar_button">
                        <MdFormatColorFill></MdFormatColorFill>
                    </button>
                    <button className="CanvasToolBar_button">
                        <AiOutlineLine></AiOutlineLine>
                    </button>
                </div>
            </div>
            <div className="CanvasToolBar_drawOption"></div>
        </div>
    );
}

export default CanvasToolBar;
