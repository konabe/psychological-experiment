import React, { useState } from "react";

import Header from "./components/Header";
import Selection, { ExperimentType } from "./components/Selection";
import MuellerLyerExperiment from "./components/MuellerLyer/MuellerLyerExperiment";
import "./App.css";

function App() {
  const [isTopPage, setIsTopPage] = useState(true);
  const [displayingType, setDisplayingType] = useState<
    ExperimentType | undefined
  >(undefined);

  const onHeaderClick = () => {
    setIsTopPage(true);
    setDisplayingType(undefined);
  };
  const onExperimentSelect = (type: ExperimentType) => {
    setIsTopPage(false);
    setDisplayingType(type);
  };
  const onExperimentEnded = () => {
    setIsTopPage(true);
    setDisplayingType(undefined);
  };

  return (
    <div>
      <Header
        onClick={onHeaderClick}
        subTitle={displayingType?.toString() ?? ""}
      />
      <div className="body">
        {isTopPage ? (
          <Selection onSelect={onExperimentSelect} />
        ) : (
          <MuellerLyerExperiment trialLength={30} onEnd={onExperimentEnded} />
        )}
      </div>
    </div>
  );
}

export default App;
