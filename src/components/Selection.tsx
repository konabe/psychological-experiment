import "./Selection.css";

export enum ExperimentType {
  MuellerLyerDiagram = "MullerLyer",
}

export type SelectionProps = {
  onSelect: (type: ExperimentType) => void;
};

function Selection({ onSelect }: SelectionProps) {
  return (
    <div>
      <h1 className="page_title">実験一覧</h1>
      <div className="buttons_area">
        <button
          className="experiment_button"
          onClick={() => onSelect(ExperimentType.MuellerLyerDiagram)}
        >
          Müller-Lyer illusion
        </button>
      </div>
    </div>
  );
}

export default Selection;
