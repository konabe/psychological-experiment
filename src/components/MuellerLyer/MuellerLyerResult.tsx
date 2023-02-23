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
        ・ 開の回答率
        {(
          (1.0 *
            outputData.filter(
              (v, i) =>
                (v.selection === "top" && inputData[i].isTopOpen) ||
                (v.selection === "bottom" && !inputData[i].isTopOpen)
            ).length) /
          outputData.length
        ).toFixed(2)}
        <table>
          <tr>
            <th>試行回数</th>
            {inputData.map((_, i) => (
              <th>{i + 1}</th>
            ))}
          </tr>
          <tr>
            <th>開矢羽の長さ</th>
            {inputData.map((v) => (
              <td>
                {v.isTopOpen
                  ? v.topBarLength.toFixed()
                  : v.bottomBarLength.toFixed()}
              </td>
            ))}
          </tr>
          <tr>
            <th>閉矢羽の長さ</th>
            {inputData.map((v) => (
              <td>
                {!v.isTopOpen
                  ? v.topBarLength.toFixed()
                  : v.bottomBarLength.toFixed()}
              </td>
            ))}
          </tr>
          <tr>
            <th>正答</th>
            {inputData.map((v) => (
              <td>
                {(v.isTopOpen
                  ? v.topBarLength.toFixed()
                  : v.bottomBarLength.toFixed()) >
                (!v.isTopOpen
                  ? v.topBarLength.toFixed()
                  : v.bottomBarLength.toFixed())
                  ? "開"
                  : "閉"}
              </td>
            ))}
          </tr>
          <tr>
            <th>回答</th>
            {outputData.map((o, i) => {
              const v = inputData[i];
              return (
                <td>
                  {v.isTopOpen
                    ? o.selection === "top"
                      ? "開"
                      : "閉"
                    : o.selection === "top"
                    ? "閉"
                    : "開"}
                </td>
              );
            })}
          </tr>
        </table>
      </div>
      <button onClick={onEnd}>終了する</button>
    </div>
  );
}

export default MuellerLyerExperimentResult;
