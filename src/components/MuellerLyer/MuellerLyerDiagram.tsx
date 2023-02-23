import React from "react";
import { Layer, Line, Stage } from "react-konva";

type MuellerLyerDiagramProps = {
  width: number;
  height: number;
  isOpen: boolean;
  angle: number;
  barLength: number;
  arrowLength: number;
};

const radianToDegree = (degree: number) => degree * (Math.PI / 180);

function MuellerLyerDiagram({
  width,
  height,
  isOpen,
  barLength,
  arrowLength,
  angle,
}: MuellerLyerDiagramProps) {
  const radian = radianToDegree(angle);

  const center = { x: width / 2, y: height / 2 };
  const intersectLeft = { x: center.x - barLength / 2.0, y: center.y };
  const intersectRight = { x: center.x + barLength / 2.0, y: center.y };

  const LeftArrow = ({ isOpen }: { isOpen: boolean }) => (
    <Line
      points={[
        intersectLeft.x + (isOpen ? -1 : 1) * arrowLength * Math.cos(radian),
        intersectLeft.y - arrowLength * Math.sin(radian),
        intersectLeft.x,
        intersectLeft.y,
        intersectLeft.x + (isOpen ? -1 : 1) * arrowLength * Math.cos(radian),
        intersectLeft.y + arrowLength * Math.sin(radian),
      ]}
      stroke={"black"}
    />
  );

  const bar = (
    <Line
      points={[
        intersectLeft.x,
        intersectLeft.y,
        intersectRight.x,
        intersectRight.y,
      ]}
      stroke={"black"}
    />
  );

  const RightArrow = ({ isOpen }: { isOpen: boolean }) => (
    <Line
      points={[
        intersectRight.x + (isOpen ? 1 : -1) * arrowLength * Math.cos(radian),
        intersectRight.y - arrowLength * Math.sin(radian),
        intersectRight.x,
        intersectRight.y,
        intersectRight.x + (isOpen ? 1 : -1) * arrowLength * Math.cos(radian),
        intersectRight.y + arrowLength * Math.sin(radian),
      ]}
      stroke={"black"}
    />
  );

  return (
    <div style={{ width, height, margin: "0px auto" }}>
      <Stage width={width} height={height}>
        <Layer>
          <LeftArrow isOpen={isOpen} />
          {bar}
          <RightArrow isOpen={isOpen} />
        </Layer>
      </Stage>
    </div>
  );
}

export default MuellerLyerDiagram;
