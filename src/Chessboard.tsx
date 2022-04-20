import React from "react";
import randomColor from 'randomcolor'
import "./Chessboard.css";
import Square from "./Square";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function Chessboard() {    

    let board = [];
    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const color = randomColor()
            board.push(
                <Square key={`${i}${j}`} value={`${i + 1}${j + 1}`} color={color} ></Square>
            );
        }
    }
    return <div id="chessboard">{board}</div>;
}