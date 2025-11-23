export type HexColor = `#${string}`;

export interface ColorTokens {
  Red_60: HexColor;
  Red_90: HexColor;
  Red_90h: HexColor;
  Yellow_40h: HexColor;
  Green_Success: HexColor;
  Neutral_20: HexColor;
  Slate_140: HexColor;
  AlertShade_Light: HexColor;
  SuccessShade_Light: HexColor;
  Background_Primary: HexColor;
  Background_Secondary: HexColor;
  Text_Primary: HexColor;
  Text_Secondary: HexColor;
  Text_White: HexColor;
}

export const colorTokens: ColorTokens = {
  Red_60: '#E57373',
  Red_90: '#C62828',
  Red_90h: '#D32F2F',
  Yellow_40h: '#FFC107',
  Green_Success: '#00803C',
  Neutral_20: '#F5F5F5',
  Slate_140: '#546E7A',
  AlertShade_Light: '#FBEDEB',
  SuccessShade_Light: '#EBF5EF',
  Background_Primary: '#FFFFFF',
  Background_Secondary: '#F9FAFB',
  Text_Primary: '#1A1F3A',
  Text_Secondary: '#666666',
  Text_White: '#FFFFFF',
};
