import React, { useRef } from "react";

type IProps = {
  value: string,
  color: string
}

let targetId: any;

export default function Square(props: IProps) {
  const { value, color } = props;

  const data = useRef<{originalId:string, targetId: string}>({originalId: '', targetId: ''});
  
  const onDragStart = (event: any) => data.current.originalId = event.target.id;

  const onDragLeave = (event: any) => {
    const id = event.target.id;
    if (data.current.originalId != id && id) targetId = id;
  }

  const onDragEnd = (event: any) => {    
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const targetColor = targetEl.style.backgroundColor;
      const originalColor = event.target.style.backgroundColor

      event.target.style.backgroundColor = targetColor;
      targetEl.style.backgroundColor = originalColor;
    }
  };

  return (
    <div draggable onDragLeaveCapture={onDragLeave} onDragEnd={onDragEnd} onDragStart={onDragStart} className="square" id={value} style={{ backgroundColor: color }}>{value}</div>
  );
}