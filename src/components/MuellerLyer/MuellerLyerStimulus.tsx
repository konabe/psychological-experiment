import React from "react";
import { useKeyPressEvent } from "react-use";
import { MuellerLyerExperimentIndependent } from "../../domain/muellerLyerExperiment";
import MuellerLyerDiagram from "./MuellerLyerDiagram";
import "./MuellerLyerStimulus.css";

type MuellerLyerStimulusProps = {
  independent: MuellerLyerExperimentIndependent;
  onClick: (output: "top" | "bottom") => void;
};

function MuellerLyerStimulus({
  independent,
  onClick,
}: MuellerLyerStimulusProps) {
  useKeyPressEvent("ArrowUp", () => onClick("top"));
  useKeyPressEvent("ArrowDown", () => onClick("bottom"));

  return (
    <div>
      <h1>Müller-Lyer illusion</h1>
      <p>
        上の方が長く見えたら<kbd>↑</kbd>
        キーを、下のほうが長く見えたら<kbd>↓</kbd>キーを押してください。
      </p>
      <p>スマートフォンからの場合は画像をタップしてください。</p>
      <button className="button" onClick={() => onClick("top")}>
        <MuellerLyerDiagram
          width={500}
          height={100}
          isOpen={independent.isTopOpen}
          angle={30}
          barLength={independent.topBarLength}
          arrowLength={30}
        />
      </button>
      <button className="button" onClick={() => onClick("bottom")}>
        <MuellerLyerDiagram
          width={500}
          height={100}
          isOpen={!independent.isTopOpen}
          angle={30}
          barLength={independent.bottomBarLength}
          arrowLength={30}
        />
      </button>
    </div>
  );
}

export default MuellerLyerStimulus;
