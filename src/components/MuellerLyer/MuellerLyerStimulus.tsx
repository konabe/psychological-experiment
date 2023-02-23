import React from "react";
import { MuellerLyerExperimentIndependent } from "../../domain/muellerLyerExperiment";
import MuellerLyerDiagram from "./MuellerLyerDiagram";

type MuellerLyerStimulusProps = {
  independent: MuellerLyerExperimentIndependent;
};

function MuellerLyerStimulus({ independent }: MuellerLyerStimulusProps) {
  return (
    <div>
      <h1>Müller-Lyer illusion</h1>
      <p>上の方が長く見えたら↑キーを、下のほうが長く見えたら↓キーを</p>
      <MuellerLyerDiagram
        width={500}
        height={100}
        isOpen={independent.isTopOpen}
        angle={30}
        barLength={independent.topBarLength}
        arrowLength={30}
      />
      <MuellerLyerDiagram
        width={500}
        height={100}
        isOpen={!independent.isTopOpen}
        angle={30}
        barLength={independent.bottomBarLength}
        arrowLength={30}
      />
    </div>
  );
}

export default MuellerLyerStimulus;
