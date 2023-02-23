export type MuellerLyerExperimentIndependent = {
  topBarLength: number; // 上の矢羽の長さ
  bottomBarLength: number; // 下の矢羽の長さ
  isTopOpen: boolean; // 上の矢羽が開いているか
};

export type MuellerLyerExperimentDependent = {
  selection: "top" | "bottom";
};

export const generateIndependentByTrials = (
  length: number
): MuellerLyerExperimentIndependent[] => {
  return Array(length)
    .fill({})
    .map(() => {
      return {
        topBarLength: 200 + Math.random() * 60 - 120,
        bottomBarLength: 200 + Math.random() * 60 - 120,
        isTopOpen: Math.random() > 0.5,
      };
    });
};
