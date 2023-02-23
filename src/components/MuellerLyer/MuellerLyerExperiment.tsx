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

  const onKeyPress = (e: React.KeyboardEvent) => {
    const key = e.code;
    if (trial === inputData.length) {
      return;
    }
    setTrial(trial + 1);
    if (key === "ArrowUp") {
      setOutputData([...outputData, { selection: "top" }]);
    }
    if (key === "ArrowDown") {
      setOutputData([...outputData, { selection: "bottom" }]);
    }
  };

  return (
    <div
      tabIndex={0}
      style={{ outline: "none", width: "100%" }}
      onKeyDown={onKeyPress}
    >
      {trial < inputData.length ? (
        <MuellerLyerStimulus independent={inputData[trial]} />
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
