import { colorTokens } from './tokens';

export const colorHelpers = {
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
  helperName,
  variant = 'primary'
) => {
  return colorHelpers[helperName][variant];
};

