import {
  MuellerLyerExperimentDependent,
  MuellerLyerExperimentIndependent,
} from "../../domain/muellerLyerExperiment";

export type MuellerLyerExperimentResultProps = {
  inputData: MuellerLyerExperimentIndependent[];
  outputData: MuellerLyerExperimentDependent[];
  onEnd: () => void;
};

function MuellerLyerExperimentResult({
  inputData,
  outputData,
  onEnd,
}: MuellerLyerExperimentResultProps) {
  return (
    <div>
      <div>
        正答率
        {(1.0 *
          outputData.filter((v, i) => {
            const data = inputData[i];
            return (
              data.topBarLength > data.bottomBarLength && v.selection === "top"
            );
          }).length) /
          outputData.length}
      </div>
      <button onClick={onEnd}>終了する</button>
    </div>
  );
}

export default MuellerLyerExperimentResult;
