
export type HexagramLine = {
  type: "solid" | "broken";
}

export interface HexagramDetails {
  id: string;
  name: string;
  chineseName: string;
  pinyin?: string;
  lines: HexagramLine[];
  meaning: string;
  principle: string;
}
