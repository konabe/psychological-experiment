export enum ExperimentType {
  MuellerLyerDiagram = "MullerLyer",
}

export type SelectionProps = {
  onSelect: (type: ExperimentType) => void;
};

function Selection({ onSelect }: SelectionProps) {
  return (
    <div>
      <h1>トップ</h1>
      <button onClick={() => onSelect(ExperimentType.MuellerLyerDiagram)}>
        Müller-Lyer illusion
      </button>
    </div>
  );
}

export default Selection;
