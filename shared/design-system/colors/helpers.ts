import { colorTokens, HexColor } from './tokens';

export interface ColorHelpers {
  alertBadge: {
    primary: HexColor;
    secondary: HexColor;
  };
  alertText: {
    primary: HexColor;
    secondary: HexColor;
  };
  alertShade: {
    primary: HexColor;
    secondary: HexColor;
  };
  warning: {
    primary: HexColor;
    secondary: HexColor;
  };
  successBadge: {
    primary: HexColor;
    secondary: HexColor;
  };
  successShade: {
    primary: HexColor;
    secondary: HexColor;
  };
  neutral: {
    primary: HexColor;
    secondary: HexColor;
  };
}

export type HelperVariant = 'primary' | 'secondary';

export type HelperName = keyof ColorHelpers;

export const colorHelpers: ColorHelpers = {
  alertBadge: {
    primary: colorTokens.Red_90h,
    secondary: colorTokens.Red_90h,
  },
  alertText: {
    primary: colorTokens.Red_90h,
    secondary: colorTokens.Red_60,
  },
  alertShade: {
    primary: colorTokens.AlertShade_Light,
    secondary: colorTokens.Background_Secondary,
  },
  warning: {
    primary: colorTokens.Yellow_40h,
    secondary: colorTokens.Yellow_40h,
  },
  successBadge: {
    primary: colorTokens.Green_Success,
    secondary: colorTokens.Green_Success,
  },
  successShade: {
    primary: colorTokens.SuccessShade_Light,
    secondary: colorTokens.Background_Primary,
  },
  neutral: {
    primary: colorTokens.Neutral_20,
    secondary: colorTokens.Slate_140,
  },
};

export const getHelperColor = (
  helperName: HelperName,
  variant: HelperVariant = 'primary'
): HexColor => {
  return colorHelpers[helperName][variant];
};
