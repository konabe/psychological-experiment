import React, { useEffect, useState } from "react";
import {
  MuellerLyerExperimentDependent,
  MuellerLyerExperimentIndependent,
  generateIndependentByTrials,
} from "../../domain/muellerLyerExperiment";
import MuellerLyerStimulus from "./MuellerLyerStimulus";
import MuellerLyerExperimentResult from "./MuellerLyerResult";

export type MuellerLyerExperimentProps = {
  trialLength: number;
  onEnd: () => void;
};

function MuellerLyerExperiment({
  trialLength,
  onEnd,
}: MuellerLyerExperimentProps) {
  const [trial, setTrial] = useState(0);
  const [inputData, setInputData] = useState<
    MuellerLyerExperimentIndependent[]
  >([]);
  const [outputData, setOutputData] = useState<
    MuellerLyerExperimentDependent[]
  >([]);
  useEffect(() => {
    setInputData(generateIndependentByTrials(trialLength));
  }, [trialLength]);

  const onKeyPress = (e: React.KeyboardEvent) => {
    const key = e.code;
    if (trial === trialLength) {
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

  const Stimulus = ({
    trialData,
  }: {
    trialData: MuellerLyerExperimentIndependent | undefined;
  }) => {
    return trialData != null ? (
      <MuellerLyerStimulus independent={trialData} />
    ) : (
      <MuellerLyerExperimentResult
        inputData={inputData}
        outputData={outputData}
        onEnd={onEnd}
      />
    );
  };

  return (
    <div
      tabIndex={0}
      style={{ outline: "none", width: "100%" }}
      onKeyDown={onKeyPress}
    >
      <Stimulus trialData={inputData[trial]} />
    </div>
  );
}

export default MuellerLyerExperiment;
