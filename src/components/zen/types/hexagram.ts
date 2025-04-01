
export interface HexagramLine {
  type: "solid" | "broken";
}

export interface HexagramDetails {
  id: string;
  name: string;
  chineseName: string;
  lines: HexagramLine[];
  meaning: string;
  principle?: string;
}
