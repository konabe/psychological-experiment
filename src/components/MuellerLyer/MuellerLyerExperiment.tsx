import React, { useState } from "react";
import {
  MuellerLyerExperimentIndependent,
  MuellerLyerExperimentDependent,
} from "../../domain/muellerLyerExperiment";
import MuellerLyerStimulus from "./MuellerLyerStimulus";
import MuellerLyerExperimentResult from "./MuellerLyerResult";

export type MuellerLyerExperimentProps = {
  inputData: MuellerLyerExperimentIndependent[];
  onEnd: () => void;
};

function MuellerLyerExperiment({
  inputData,
  onEnd,
}: MuellerLyerExperimentProps) {
  const [trial, setTrial] = useState(0);
  const [outputData, setOutputData] = useState<
    MuellerLyerExperimentDependent[]
  >([]);

  const onClick = (output: "top" | "bottom") => {
    if (trial === inputData.length) {
      return;
    }
    setTrial(trial + 1);
    if (output === "top") {
      setOutputData([...outputData, { selection: "top" }]);
    }
    if (output === "bottom") {
      setOutputData([...outputData, { selection: "bottom" }]);
    }
  };

  return (
    <div>
      {trial < inputData.length ? (
        <MuellerLyerStimulus independent={inputData[trial]} onClick={onClick} />
      ) : (
        <MuellerLyerExperimentResult
          inputData={inputData}
          outputData={outputData}
          onEnd={onEnd}
        />
      )}
    </div>
  );
}

export default MuellerLyerExperiment;
