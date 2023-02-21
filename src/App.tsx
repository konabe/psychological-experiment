import React, { useEffect, useState } from "react";
import "./App.css";
import MuellerLyerDiagram from "./components/MuellerLyerDiagram";

function App() {
  const [trial, setTrial] = useState(0);
  const [inputData, setInputData] = useState<{ top: number; bottom: number }[]>(
    []
  );
  const [outputData, setOutputData] = useState<string[]>([]);
  useEffect(() => {
    const data = Array(20)
      .fill({})
      .map(() => {
        return {
          top: 150 + Math.random() * 30 - 60,
          bottom: 150 + Math.random() * 30 - 60,
        };
      });
    setInputData(data);
  }, []);

  const onKeyPress = (e: React.KeyboardEvent) => {
    const key = e.code;
    if (trial === 20) {
      return;
    }
    if (key === "ArrowUp") {
      setOutputData([...outputData, "top"]);
      setTrial(trial + 1);
    }
    if (key === "ArrowDown") {
      setOutputData([...outputData, "bottom"]);
      setTrial(trial + 1);
    }
  };

  const Stimulus = ({
    trialData,
  }: {
    trialData: { top: number; bottom: number } | undefined;
  }) => {
    {
      return trialData != null ? (
        <div>
          {trial}
          <MuellerLyerDiagram
            width={300}
            height={100}
            isOpen={true}
            angle={30}
            barLength={trialData.top}
            arrowLength={50}
          />
          <MuellerLyerDiagram
            width={300}
            height={100}
            isOpen={false}
            angle={30}
            barLength={trialData.bottom}
            arrowLength={50}
          />
        </div>
      ) : (
        <div>
          正答率
          {outputData.filter((v, i) => {
            const data = inputData[i];
            return data.top > data.bottom && v === "top";
          }).length / 20.0}
          %
        </div>
      );
    }
  };
  return (
    <div className="App">
      <header>オープン心理学実験</header>
      <div
        tabIndex={0}
        style={{ outline: "none", width: "100%" }}
        onKeyDown={onKeyPress}
      >
        <h1>Müller-Lyer illusion</h1>
        <p>上の方が長く見えたら↑キーを、下のほうが長く見えたら↓キーを</p>
        <Stimulus trialData={inputData[trial]} />
      </div>
    </div>
  );
}

export default App;
